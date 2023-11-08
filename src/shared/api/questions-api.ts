import { api } from '~/shared/api/index';
import type { IQuestion } from '~/shared/types/chuckJokes';
import type { AxiosResponse } from 'axios';
import { RANDOM_GET } from '~/shared/constants/api.config';

export const getRandomQuestion = async (): Promise<AxiosResponse<IQuestion>> => api.get(RANDOM_GET);
