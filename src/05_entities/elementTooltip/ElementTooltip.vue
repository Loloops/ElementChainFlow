<script setup>
import { defineProps } from "vue";

defineProps({
  showTooltip: Boolean,
});
</script>

<template>
  <Transition name="tooltip">
    <div class="element-tooltip" v-if="showTooltip">
      <div class="element-tooltip-inner">
        <slot></slot>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.element-tooltip {
  position: absolute;
  z-index: 1;
  width: auto;
  padding-top: 15px;
  left: 50%;
  transform: translate(-50%, -10px);
  top: 100%;
  cursor: default;

  & .element-tooltip-inner {
    padding: 5px 10px;
    background: white;
    box-shadow: 0px 2px 6px #cecece;
    display: flex;
    gap: 3px;
    align-items: center;
    justify-content: center;
  }
}

.tooltip-enter-active {
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;
}
.tooltip-enter-from {
  transform: translate(-50%, -30px);
  opacity: 0;
}
.tooltip-enter-to {
  transform: translate(-50%, -10px);
  opacity: 1;
}

.tooltip-leave-active {
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;
}
.tooltip-leave-from {
  transform: translate(-50%, -10px);
  opacity: 1;
}
.tooltip-leave-to {
  transform: translate(-50%, -30px);
  opacity: 0;
}
</style>
