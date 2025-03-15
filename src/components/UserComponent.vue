<template>
    <table>
        <thead>
            <tr>
                <th>Username</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Address</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user in users" :key="user.id">
                <td>{{ user.username }}</td>
                <td>{{ user.firstName }} {{ user.lastName }}</td>
                <td><input :value ="user.email" readonly/></td>
                <td>
                    <pre>{{ user.address.street }}{{ user.address.city }}, {{ user.address.state }} {{ user.address.zip }}</pre>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

const props = defineProps(['users']);

onMounted(() => {
    console.log('User Component mounted');
});
</script>

<style>
table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  padding: 10px;
  border: 1px solid #ccc;
}
</style>