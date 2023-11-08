<script setup lang="ts">
import { answerTypes } from '~/shared/constants';

interface ResultModalPropsType {
  open: boolean;
  answer: boolean;
}

const emits = defineEmits(['onNextJoke']);
const props = defineProps<ResultModalPropsType>();

//Получаю данные для отображения контента в модалке результата
const answerType = computed(() => (props.answer ? answerTypes.correct : answerTypes.wrong));

const onNextJokeClick = () => emits('onNextJoke');
</script>

<template>
  <CustomModal :open="open">
    <div class="result-content" :class="answerType.class">
      <NuxtImg :src="answerType.icon" width="70" height="70" />

      <p class="result-description" v-html="answerType.description" />

      <CustomButton @click.prevent="onNextJokeClick" />
    </div>
  </CustomModal>
</template>

<style scoped>
.result-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  width: 320px;
  height: 278px;
  flex-shrink: 0;
  border-radius: 20px;
  border: 2px solid;
  background: var(--white);
}

.correct {
  border-color: var(--green);
}

.wrong {
  border-color: var(--red);
}

.result-description {
  color: var(--black);
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
}
</style>
