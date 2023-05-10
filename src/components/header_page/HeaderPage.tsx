import { FC } from "react";
import { useTranslation } from "react-i18next";

type Props = {
  title: string;
};

const HeaderPage: FC<Props> = ({ title }) => {
  const { t } = useTranslation();
  return <div className="text-[25px]">{t(title)}</div>;
};

export default HeaderPage;
