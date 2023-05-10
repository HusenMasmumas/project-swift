import { IDataShape } from "interface/IShape.interface";

export interface IShapeContext {
  shapeData: IDataShape[];
  setShapeData: (e: IDataShape[]) => void;
}
