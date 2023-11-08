<script setup lang="ts">
import { getFormattedTime } from '~/shared/helpers/timer';
import type { ITimerEmits } from '~/shared/types/common/entity';

interface ITimerPropsType {
  timer: number;
  isStarted: boolean;
}

const props = defineProps<ITimerPropsType>();
const emits = defineEmits<ITimerEmits>();

const runningOut = ref<boolean>(false);

//Меняю подсветку таймера иходя из оставшегося времени
const timerClasses = computed(() => ({
  runningOut: runningOut.value,
}));

//Получаю отформатированное время
const timerValue = computed(() => getFormattedTime(props.timer));

//Функция для повторного запуска таймера
const handleTimerChange = () => {
  if (!props.isStarted) return;

  if (props.timer < 0) {
    emits('update:isStarted', false);
  } else {
    emits('update:timer', props.timer - 1);
  }
};

//Слежу за изменением отведенного времени для ответа
watch(
  () => props.timer,
  () => {
    runningOut.value = props.timer <= 5;
  },
);

//Запускаю исходный таймер
onMounted(() => {
  const id = setInterval(handleTimerChange, 1000);

  return () => {
    clearInterval(id);
  };
});
</script>

<template>
  <section :class="timerClasses" class="timer-block">{{ timerValue }}</section>
</template>

<style scoped>
.timer-block {
  color: var(--black);
  text-align: center;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 21px;
  letter-spacing: -0.32px;
}

.runningOut {
  color: var(--red);
}
</style>
