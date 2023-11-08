const pad = (value: number) => String(value).padStart(2, '0');

export const getFormattedTime = (timer: number) => {
  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  return `${pad(minutes)}:${pad(seconds)}`;
};
