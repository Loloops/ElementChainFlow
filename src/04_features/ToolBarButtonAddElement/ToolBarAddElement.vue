<script setup lang="ts">
import { defineProps } from "vue";
import { useToolBarAddElement } from "./model/useToolBarAddElement";
import { Props } from "./type";
import { IconButton } from "@/06_shared/components/IconButton";
import { ElementType } from "@/06_shared/types";

const props = defineProps<Props>();
const { addElement } = useToolBarAddElement();

function addElementToEditor(type: ElementType): void {
  addElement(type);
}
</script>

<template>
  <IconButton
    :nameIcon="props.nameIcon"
    :buttonTitle="props.buttonTitle"
    :iconClass="props.iconClass"
    @click="addElementToEditor(props.elementType)"
  />
</template>

<style scoped lang="scss"></style>
