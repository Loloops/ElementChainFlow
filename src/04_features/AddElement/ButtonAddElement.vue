<script setup lang="ts">
import { useStoreElement } from "@/05_entities/ElementItem/model/store";
import { ButtonUI } from "@/06_shared/components/ButtonUI";

const storeElements = useStoreElement();

function handleAddElement() {
  storeElements.addElementItem("square", 11, 11);
}
</script>

<template>
  <ButtonUI @click="handleAddElement()">
    <slot></slot>
  </ButtonUI>
</template>

<style scoped lang="scss"></style>
