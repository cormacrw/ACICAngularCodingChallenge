import Quote from './Quote';

export interface LineOfBusiness {
  id: number;
  name: string;
  description: string;
  quotes: Quote[];
}
