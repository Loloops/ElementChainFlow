<script setup lang="ts">
import { SquareItem } from "@/06_shared/components/SquareItem";
import { useListElementItems } from "../model/store";
import ElementItem from "./ElementItem/ElementItem.vue";

const elementsStore = useListElementItems();
const elements = elementsStore.elements;
</script>
<template>
  <ElementItem v-for="element in elements" :key="element.id" :element="element">
    <SquareItem></SquareItem>
  </ElementItem>
</template>

<style scoped lang="scss"></style>
