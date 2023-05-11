import { FormInstance } from "antd";
import { IManageFormTable } from "interface/IManageFormTable.inteface";

export interface IManageFormTableContext {
  dataForm: IManageFormTable[];
  setDataForm: (e: IManageFormTable[]) => void;
  selected: number[];
  setSelected: (e: number[]) => void;
  idDel: number;
  setIdDel: (e: number) => void;
  form: FormInstance<IManageFormTable>;
}
