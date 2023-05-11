import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Modal, ModalProps } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

interface Props extends ModalProps {}

const ModalDelete: FC<Props> = (props) => {
  const { t } = useTranslation();
  return (
    <Modal
      centered
      forceRender={true}
      title={
        <div>
          <ExclamationCircleOutlined className="icon-warning-del" />
          {`${t("areYouSure")}`}
        </div>
      }
      {...props}
    >
      {`${t("doYouWantToDelete")}`}
    </Modal>
  );
};

export default ModalDelete;
