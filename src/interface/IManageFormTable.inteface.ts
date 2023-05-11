import { Dayjs } from "dayjs";

export interface IManageFormTable {
  prefix: string;
  id: number;
  name: string;
  lastName: string;
  dateOfBirth: Dayjs;
  citizenship: string;
  idCardNumberFirst?: number;
  idCardNumberSecond?: number;
  idCardNumberThird?: number;
  idCardNumberFourth?: number;
  idCardNumberFifth?: number;
  countryCode: string;
  mobileNumber: string;
  passport?: string;
  expectedSalary: string;
}

export interface IDelOrUpdate {
  id: number;
  update: IManageFormTable;
}
