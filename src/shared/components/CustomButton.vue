<script setup lang="ts">
interface ButtonPropsType {
  disabled?: boolean;
  type?: string;
  text?: string;
}

const props = withDefaults(defineProps<ButtonPropsType>(), {
  type: 'success',
  text: 'Next',
});

//Определяю параметры для переиспользуемой кнопки
const btnClasses = computed(() => ({
  disabled: props.disabled,
  [props.type]: props.type,
}));
</script>

<template>
  <button :disabled="disabled" class="custom-button" :class="btnClasses" @click.prevent>
    {{ text }}
  </button>
</template>

<style scoped>
.custom-button {
  width: 182px;
  height: 56px;
  border-radius: 20px;
  border: none;
  color: var(--white);
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  cursor: pointer;
  padding: 16px 68px 18px 68px;
}

.disabled {
  opacity: 0.3;
}

.success {
  background: var(--green);
}

.wrong {
  background: var(--red);
}
</style>
