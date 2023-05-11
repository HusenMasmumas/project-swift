import { FC } from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

type Props = {
  title: string;
};

const HeaderPage: FC<Props> = ({ title }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/home", { replace: true });
  };

  return (
    <div className="flex items-center">
      <div className="text-[25px]">{t(title)}</div>
      <div className="ml-auto">
        <Button className="bg-white" onClick={goHome}>
          {t("homePage")}
        </Button>
      </div>
    </div>
  );
};

export default HeaderPage;
