<script setup lang="ts">
import { ButtonUI } from "@/06_shared/components/ButtonUI";
</script>

<!-- заменить иконки на новое решение, избавиться от фабрика -->
<!-- Удалить слайс -->

<template>
  <ButtonUI>
    <slot></slot>
  </ButtonUI>
</template>

<style scoped></style>
