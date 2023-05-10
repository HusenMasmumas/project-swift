import { IDataShape } from "interface/IShape.interface";
import { ENUM_STATUS_MOVE } from "./util.enum";

export const moveShapePosition = (
  status: ENUM_STATUS_MOVE,
  shapeData: IDataShape[]
) => {
  var shapeInfo = shapeData;
  switch (status) {
    case ENUM_STATUS_MOVE.LEFT: {
      shapeInfo = [...(shapeInfo || []), shapeInfo?.[0]];
      shapeInfo?.splice(0, 1);

      return shapeInfo;
    }
    case ENUM_STATUS_MOVE.RIGHT: {
      shapeInfo = [shapeInfo?.[shapeData?.length - 1], ...(shapeInfo || [])];
      shapeInfo?.splice(shapeData?.length, 1);
      return shapeInfo;
    }
    case ENUM_STATUS_MOVE.UP_DOWN: {
      var spliceThird = shapeInfo?.splice(0, 3);

      shapeInfo = [...(shapeInfo || []), ...(spliceThird || [])];
      return shapeInfo;
    }
    case ENUM_STATUS_MOVE.RANDOM: {
      const sortRandom = shapeInfo
        ?.sort(() => Math.random() - 0.5)
        ?.map((item) => {
          return item;
        });

      return sortRandom;
    }
    default:
      return shapeInfo;
  }
};
