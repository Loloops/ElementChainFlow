<script setup lang="ts">
import { defineProps } from "vue";

import { ButtonToolBar } from "@/06_shared/components/ButtonToolBar";
import { Props } from "./type";

const props = defineProps<Props>();

function setType(type: string): void {
  console.log(type);
}
</script>

<template>
  <ButtonToolBar @click="setType(props.elementType)">
    <slot></slot>
  </ButtonToolBar>
</template>

<style scoped lang="scss"></style>
