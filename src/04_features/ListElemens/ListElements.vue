<script setup lang="ts">
import { ElementItem } from "@/05_entities/ElementItem";
import { useStoreElement } from "@/05_entities/ElementItem/model/store";

const storeElements = useStoreElement();
</script>

<template>
  <ul v-if="storeElements.elements.length">
    <li v-for="element in storeElements.elements" :key="element.id">
      <ElementItem :element="element" />
      <p>1111111</p>
    </li>
  </ul>
</template>

<style scoped lang="scss"></style>
