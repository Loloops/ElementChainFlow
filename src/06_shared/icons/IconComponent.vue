<template>
  <svg>
    <use :xlink:href="`#${name}`" />
  </svg>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { nameIcons } from "./type";

defineProps<{
  name: nameIcons;
}>();
</script>

<style scoped>
svg {
  fill: currentColor;
  width: 1em;
  height: 1em;
}
</style>
