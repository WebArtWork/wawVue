<template>
  <div class="home">
    <h1>Home</h1>
    <router-link to="admin">Admin</router-link>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class Home extends Vue {
}
</script>
