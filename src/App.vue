<script setup lang="ts">
import { RouterView } from 'vue-router'
import '@/style.css'
</script>

<template>
  <span class="dark">
    <!-- <span class=""> -->
    <div class="dark:bg-gray-900 min-h-screen">
      <RouterView />
    </div>
  </span>
</template>
