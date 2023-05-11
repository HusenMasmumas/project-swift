import { useForm } from "antd/es/form/Form";
import { useTranslation } from "react-i18next";
import { Button, Checkbox } from "antd";
import { IManageFormTable } from "interface/IManageFormTable.inteface";
import { useEffect, useState } from "react";
import TableForm from "./Table";
import HeaderPage from "components/header_page/HeaderPage";
import ManageForm from "./Form";
import ModalDelete from "./Modal";
import MainManageFormTableProvider from "providers/manage_form_table";

const TestThird = () => {
  const { t } = useTranslation();
  const [dataForm, setDataForm] = useState<IManageFormTable[]>([]);
  const [form] = useForm();
  const [selected, setSelected] = useState<number[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [idDel, setIdDel] = useState<number>(0);

  useEffect(() => {
    if (localStorage.getItem("dataForm") !== null) {
      const dataFormInfo = localStorage.getItem("dataForm");
      const dataFormInfoList = JSON.parse(dataFormInfo ? dataFormInfo : `[]`);
      setDataForm(dataFormInfoList);
    }
  }, []);

  const manageModal = (e?: boolean) => {
    setIsModalOpen(e || false);
  };

  const deleteItem = (array1: IManageFormTable[], array2: number[]) => {
    return array1?.filter((item) => {
      return array2?.indexOf(item?.id) === -1;
    });
  };

  const deleteDataForm = () => {
    const dataSelect = selected;
    setSelected([]);
    if (selected?.length === dataForm?.length) {
      localStorage.removeItem("dataForm");
      setDataForm([]);
    } else {
      const values = deleteItem(dataForm, dataSelect);
      localStorage.setItem("dataForm", JSON.stringify(values));
      setDataForm(values);
    }
    manageModal();
  };

  const addAll = (event: boolean) => {
    if (!!event) {
      const add = dataForm?.map((item) => item?.id);
      setSelected(add);
    } else {
      setSelected([]);
    }
  };

  return (
    <MainManageFormTableProvider
      value={{
        dataForm,
        setDataForm,
        selected,
        setSelected,
        idDel,
        setIdDel,
        form,
      }}
    >
      <div>
        <HeaderPage title="formTable" />
        <ManageForm />
        <div className="pt-[20px]">
          <Checkbox
            checked={
              selected?.length === dataForm?.length && !!selected?.length
            }
            onClick={(event: any) => addAll(event?.target?.checked)}
          >
            {t("selectAllData")}
          </Checkbox>
          <Button className="bg-white" onClick={() => manageModal(true)}>
            {t("deleteData")}
          </Button>
        </div>
        <TableForm />
        <ModalDelete
          open={isModalOpen}
          onOk={() => deleteDataForm()}
          onCancel={() => manageModal()}
        />
      </div>
    </MainManageFormTableProvider>
  );
};

export default TestThird;
