import { useNavigate } from "react-router-dom";
import { Card, Col, Row } from "antd";
import { useTranslation } from "react-i18next";

const menu = [
  {
    id: 1,
    name: "homeMenu.testFirst",
    url: "/home/test-first",
    subMenu: "layoutStyle",
  },
  {
    id: 2,
    name: "homeMenu.testSecond",
    url: "/home/test-second",
    subMenu: "connectAPI",
  },
  {
    id: 3,
    name: "homeMenu.testThird",
    url: "/home/test-third",
    subMenu: "formTable",
  },
];

const HomePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const goToMenu = (link: string) => {
    navigate(link);
  };
  return (
    <Row
      className=" h-[calc(100vh_-_70px)]"
      gutter={[14, 14]}
      justify="center"
      align="middle"
    >
      {menu?.map((item) => {
        return (
          <Col span={4} key={item?.id}>
            <Card
              onClick={() => {
                goToMenu(item?.url);
              }}
            >
              <div className="text-[16px]">{t(item?.name)}</div>
              <div className="pt-[20px]">{t(item?.subMenu)}</div>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default HomePage;
