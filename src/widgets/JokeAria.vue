<script setup lang="ts">
interface IQuestionCardPropsType {
  joke: string;
}

defineProps<IQuestionCardPropsType>();
</script>

<template>
  <div class="joke-block">
    <p class="joke-description">{{ joke }}</p>
  </div>
</template>

<style scoped>
.joke-block {
  min-height: 176px;
  max-width: 358px;
  padding: 20px 40px;
  border-radius: 20px;
  border: 2px solid var(--border-color);
  background: var(--white);
  box-shadow: 0 4px 16px 0 var(--box-shadow);
}

.joke-description {
  color: var(--black);
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
}
</style>
