<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import '@/style.css'
</script>

<template>
  <span class="dark">
    <div class="dark:bg-gray-900 min-h-screen">
      <RouterView />
    </div>
  </span>
</template>
