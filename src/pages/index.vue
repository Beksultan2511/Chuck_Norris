<script setup lang="ts">
import type { IQuestion } from '~/shared/types/chuckJokes';
import { getRandomQuestion } from '~/shared/api/questions-api';
import { ALLOWED_TIME, getActionButtons } from '~/shared/constants';

const currentJoke = ref<IQuestion | null>(null);
const isTrue = ref<boolean>(false);
const timer = ref<number>(ALLOWED_TIME);
const isFetching = ref<boolean>(false);
const isStarted = ref<boolean>(true);

//Запрашиваю следующую шутку
const getNextQuestion = async () => {
  try {
    isFetching.value = true;
    const { data } = await getRandomQuestion();
    currentJoke.value = data;
    isFetching.value = false;
  } catch {
    throw new Error('Ошибка при получении данных');
  }
};

//Запрашиваю новую шутку и перезапускаю таймер
const onNextQuestionClick = () => {
  timer.value = ALLOWED_TIME;
  isStarted.value = true;
  getNextQuestion();
};

//Проверяю на правильность ответа
const onSubmitClick = (answer: boolean) => {
  if (!currentJoke.value) return;

  isTrue.value = (currentJoke.value.value.length % 2 === 0) === answer;
  isStarted.value = false;
};

//При истечении времени, запрашиваю новую шутку
watch(timer, newValue => {
  if (newValue === 0) onNextQuestionClick();
});

onMounted(() => getNextQuestion());

//Получаю возможные варианты ответа
const actionButtons = computed(() => getActionButtons(onSubmitClick));
</script>

<template>
  <div class="container">
    <HeaderSettings />
    <Timer v-model:timer="timer" v-model:isStarted="isStarted" />

    <Spin v-if="isFetching" />

    <template v-else-if="currentJoke">
      <NuxtImg src="images/chuck-norris.png" class="its-chuck" />

      <JokeAria :joke="currentJoke.value" />
    </template>

    <div class="button-block">
      <CustomButton
        v-for="{ text, id, action, type } in actionButtons"
        :key="id"
        :type="type"
        :text="text"
        @click="action"
      />
    </div>

    <ResultModal :answer="isTrue" :open="!isStarted" @on-next-joke="onNextQuestionClick" />
  </div>
</template>

<style scoped lang="css">
.container {
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px calc(50% - 230px);

  @media (max-width: 420px) {
    margin: 40px calc(50% - 185px);
  }
}

.its-chuck {
  margin-top: 48px;
  max-width: 500px;
  height: 300px;
  object-fit: cover;

  @media (max-width: 390px) {
    max-width: 358px;
    height: 173px;
  }
}

.button-block {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 118px;
}
</style>
