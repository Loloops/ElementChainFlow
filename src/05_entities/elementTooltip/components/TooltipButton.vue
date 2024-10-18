<script setup lang="ts">
import { defineProps } from "vue";
import { ButtonUI } from "@/06_shared/components/ButtonUI";
import { IconComponent, nameIcons } from "@/06_shared/icons";

defineProps<{
  nameIcon: nameIcons;
  iconClass?: string;
}>();
</script>

<template>
  <ButtonUI class="tooltip-button" title="delete element">
    <IconComponent :name="nameIcon" :class="iconClass" />
  </ButtonUI>
</template>

<style lang="scss" scoped>
.tooltip-button {
  background-color: white;
  transition: all 0.2s ease;
  padding: 3px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: black;
    color: white;
  }
}
</style>
