<script setup lang="ts">
import { ChartBarIcon, ShieldCheckIcon, CogIcon, TruckIcon } from '@heroicons/vue/24/solid'
import type { FunctionalComponent } from 'vue'

interface SidebarItem {
  icon: FunctionalComponent
  name: string
  path: string
}

const sidebarItems: SidebarItem[] = [
  {
    icon: ChartBarIcon,
    name: 'Dashboard',
    path: '/'
  },
  {
    icon: ShieldCheckIcon,
    name: 'Insurance',
    path: '/Insurance'
  },
  {
    icon: TruckIcon,
    name: 'vehicles',
    path: '/vehicles'
  }
]
</script>

<template>
  <aside
    id="separator-sidebar"
    class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
    aria-label="Sidebar"
  >
    <div class="h-full px-3 py-4 overflow-y-auto bg-gradient-to-b from-blue-600 to-blue-800">
      <ul class="space-y-2 font-medium" v-for="item in sidebarItems">
        <li>
          <a href="#" class="flex items-center p-2 rounded-lg text-white hover:bg-blue-700 group">
            <!-- <svg
              class="w-5 h-5 transition duration-75 text-white group-hover:"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 21"
            >
              <path
                d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"
              />
              <path
                d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"
              />
            </svg> -->
            <component :is="item.icon" class="w-6" />
            <span class="ml-3">{{ item.name }}</span>
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>
