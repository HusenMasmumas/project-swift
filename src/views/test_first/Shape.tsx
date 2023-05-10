import { Col, Row } from "antd";
import { Fragment } from "react";
import { useMainShape } from "providers/shape";
import { ENUM_STATUS_MOVE } from "tools/util.enum";
import { moveShapePosition } from "tools/shape";

const ShapeLayout = () => {
  const { shapeData, setShapeData } = useMainShape();

  return (
    <Row className="pt-[50px]" gutter={[14, 14]} justify="center">
      {shapeData?.map((item, index) => {
        return (
          <Fragment key={item?.id}>
            {index === 0 ? <Col span={5}></Col> : null}
            <Col span={5}>
              <div
                className="card-layout-sold layout-center"
                onClick={() => {
                  setShapeData(
                    moveShapePosition(ENUM_STATUS_MOVE.RANDOM, shapeData)
                  );
                }}
              >
                <div className={item?.name}></div>
              </div>
            </Col>
          </Fragment>
        );
      })}
    </Row>
  );
};

export default ShapeLayout;
