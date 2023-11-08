export interface ICommonEntity {
  id: string;
  updated_at: string;
  created_at: string;
}

export interface ITimerEmits {
  (event: 'update:timer', value: number): void;
  (event: 'update:isStarted', value: boolean): void;
}
