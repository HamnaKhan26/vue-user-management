import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { User, UserGetResponse } from '../types/DummyUserApi';

export const useUserStore = defineStore('userStore', () => {
    const users = ref<User[]>([]);
    const loading = ref<boolean>(true);
    const totalUsers = ref<number>(0);
    const limit = 30;
    const skip = ref<number>(0);

    const fetchUsers = async () => {
        if (users.value.length) return; // Prevent re-fetching

        try {
            console.log('Fetching total users count...');
            const metaResponse = await fetch('https://dummyjson.com/users?limit=1');
            const metaData: UserGetResponse = await metaResponse.json();
            totalUsers.value = metaData.total;

            console.log(`Total users available: ${totalUsers.value}`);
            while (users.value.length < totalUsers.value) {

                console.log(`Fetching users from ${skip.value} to ${skip.value + limit}...`);
                const response = await fetch(`https://dummyjson.com/users?limit=${limit}&skip=${skip.value}`);
                const data: UserGetResponse = await response.json();

                if (data.users.length === 0) return; // Stop if no more users

                users.value.push(...data.users);
                skip.value += limit;
                console.log(`Fetched ${users.value.length}/${totalUsers.value} users`);

            }

        } catch (error) {
            console.error('Failed to fetch users:', error);
        } finally {
            loading.value = false;
        }
    };

    return { users, loading, fetchUsers };
});
