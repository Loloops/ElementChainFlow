<script setup lang="ts">
import { useStoreElement } from "@/05_entities/ElementItem/model/store";

import { ButtonToolBar } from "@/06_shared/components/ButtonToolBar";

const storeElements = useStoreElement();

function handleAddElement() {
  storeElements.addElementItem("square", 11, 11);
}
</script>

<template>
  <ButtonToolBar @click="handleAddElement()">
    <slot></slot>
  </ButtonToolBar>
</template>

<style scoped lang="scss"></style>
