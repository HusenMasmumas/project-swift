import { Col, Row } from "antd";
import { moveShape } from "./data";
import { useMainShape } from "providers/shape";
import { useTranslation } from "react-i18next";
import { moveShapePosition } from "tools/shape";

const MovePosition = () => {
  const { t } = useTranslation();
  const { shapeData, setShapeData } = useMainShape();

  return (
    <Row gutter={[14, 14]} justify="center" className="pt-[30px]">
      {moveShape?.map((item) => {
        return (
          <Col key={item?.id} span={item?.span}>
            <div
              className="card-layout-sold"
              onClick={() => {
                setShapeData(moveShapePosition(item?.status, shapeData));
              }}
            >
              <Row gutter={[14, 14]} className="h-full">
                {item?.triangle?.map((triangle, i) => {
                  return (
                    <Col
                      key={i}
                      className="layout-center w-full"
                      span={24 / item?.triangle?.length}
                    >
                      <div className={triangle}></div>
                    </Col>
                  );
                })}
              </Row>
            </div>

            <div className="border-move-shape">
              <span className="text-move-shape">{t(item?.footer)}</span>
            </div>
          </Col>
        );
      })}
    </Row>
  );
};

export default MovePosition;
