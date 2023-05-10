import { shape } from "./data";
import { useState } from "react";
import HeaderPage from "components/header_page/HeaderPage";
import ShapeLayout from "./Shape";
import MovePosition from "./MovePosition";
import MainShapeProvider from "providers/shape";

const TestFirst = () => {
  const [shapeData, setShapeData] = useState(shape);

  return (
    <MainShapeProvider
      value={{ shapeData: shapeData, setShapeData: setShapeData }}
    >
      <div>
        <HeaderPage title="layoutStyle" />
        <MovePosition />
        <ShapeLayout />
      </div>
    </MainShapeProvider>
  );
};

export default TestFirst;
