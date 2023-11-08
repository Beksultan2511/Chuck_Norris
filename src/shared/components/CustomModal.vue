<script setup lang="ts">
interface ModalPropsType {
  open: boolean;
}

const props = withDefaults(defineProps<ModalPropsType>(), {
  open: false,
});
</script>

<template>
  <div v-show="props.open" class="custom-modal">
    <div class="content-block">
      <slot />
    </div>
  </div>
</template>

<style>
.custom-modal {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  background: var(--modal-bg);
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.content-block {
  display: flex;
  align-items: center;
}
</style>
