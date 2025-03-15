<template>
  <h1>Users table</h1>
  <LoadingSpinner v-if="loading" />
  <UserComponent v-else :users="users" />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import LoadingSpinner from './LoadingSpinner.vue';
import UserComponent from './UserComponent.vue';
import { useUserStore } from '../stores/userStore';
import type { UserGetResponse, User } from '../types/DummyUserApi';

const users = ref<User[]>([]);
const loading = ref(true);
const limit = ref<number>(30); // Fetch 30 users per request
const skip = ref<number>(0);   // Start fetching from 0
const userStore = useUserStore();

const fetchUsers = async () => {
  try {
    console.log(`Fetching users from ${skip.value} to ${skip.value + limit.value}...`);

    const response = await fetch(`https://dummyjson.com/users?limit=${limit.value}&skip=${skip.value}`);
    const data: UserGetResponse = await response.json();

    if (data.users.length === 0) return; // Stop if no more users

    users.value.push(...data.users); // Append new users
    skip.value += data.limit; // Move to next batch

    console.log(`Fetched ${users.value.length}/${data.total} users`);

    if (users.value.length < data.total) {
      await fetchUsers(); // Recursively fetch next batch
    }
  } catch (error) {
    console.error('Failed to fetch users:', error);
  }
};

onMounted(async () => {
  console.log('App Component mounted');
 // userStore.fetchUsers();
  try {
    await fetchUsers(); // Start fetching users in batches
  } catch (error) {
    console.error('Failed to initialize user fetch:', error);
  } finally {
    loading.value = false;
  }
});

</script>

<style></style>