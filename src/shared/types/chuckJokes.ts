import type { ICommonEntity } from './common/entity';

export interface IQuestion extends ICommonEntity {
  categories: string[];
  value: string;
  icon_url: string;
  url: string;
}
