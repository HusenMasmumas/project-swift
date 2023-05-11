import { useState } from "react";
import { Citizenship } from "assets/data/data";
import { useTranslation } from "react-i18next";
import { IManageFormTable } from "interface/IManageFormTable.inteface";
import { useMainManageFormTable } from "providers/manage_form_table";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import dayjs from "dayjs";
import CTable from "components/table/Table";
import ModalDelete from "./Modal";

const TableForm = () => {
  const { t, i18n } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    dataForm,
    setDataForm,
    selected,
    setSelected,
    idDel,
    setIdDel,
    form,
  } = useMainManageFormTable();

  const onSelectChange = (rowKey: any) => {
    setSelected(rowKey);
  };

  const filterCitizenship = (data: string) => {
    return Citizenship?.filter((item) => {
      return item?.value === data;
    });
  };

  const manageModal = (open?: boolean) => {
    setIsModalOpen(open || false);
  };

  const deleteDataForm = () => {
    const delData = dataForm?.filter((item) => item?.id !== idDel);
    setDataForm(delData);
    localStorage.setItem("dataForm", JSON.stringify(delData));
    manageModal();
  };

  const rowSelection = {
    selectedRowKeys: selected,
    onChange: onSelectChange,
  };

  const columns = [
    {
      title: `${t("name")}`,
      dataIndex: "name",
      key: "name",
      sorter: (a: IManageFormTable, b: IManageFormTable) => {
        if (a?.mobileNumber < b?.mobileNumber) return -1;
        if (a?.mobileNumber > b?.mobileNumber) return 1;
        return 0;
      },
      render: (row: string, col: IManageFormTable) => {
        return <div>{[row, col.lastName]?.join(" ")?.trim()}</div>;
      },
    },

    {
      title: `${t("mobileNumber")}`,
      dataIndex: "mobileNumber",
      key: "mobileNumber",
      sorter: (a: IManageFormTable, b: IManageFormTable) => {
        if (a?.mobileNumber < b?.mobileNumber) return -1;
        if (a?.mobileNumber > b?.mobileNumber) return 1;
        return 0;
      },
      render: (mobileNumber: string) => {
        return <div>{mobileNumber}</div>;
      },
    },

    {
      title: `${t("citizenship")}`,
      dataIndex: "citizenship",
      key: "citizenship",
      sorter: (a: IManageFormTable, b: IManageFormTable) => {
        const valueFirst = filterCitizenship(a?.citizenship);
        const valueSecond = filterCitizenship(b?.citizenship);
        const firstLang =
          i18n?.language === "th"
            ? valueFirst?.[0]?.nameTh
            : valueFirst?.[0]?.nameEn;
        const secondLang =
          i18n?.language === "th"
            ? valueSecond?.[0]?.nameTh
            : valueSecond?.[0]?.nameEn;

        if (firstLang < secondLang) return -1;
        if (firstLang > secondLang) return 1;
        return 0;
      },
      render: (citizenship: string) => {
        const value = filterCitizenship(citizenship);
        return (
          <div>
            {i18n?.language === "th" ? value?.[0]?.nameTh : value?.[0]?.nameEn}
          </div>
        );
      },
    },

    {
      title: `${t("manage")}`,
      dataIndex: "id",
      key: "id",

      render: (id: number, col: IManageFormTable) => {
        return (
          <div className="flex">
            <EditFilled
              className="pr-[20px]"
              onClick={(e) => {
                form.resetFields();

                form.setFieldsValue({
                  ...col,
                  dateOfBirth: dayjs(col?.dateOfBirth),
                });
                e.stopPropagation();
              }}
            />
            <DeleteFilled
              onClick={(e) => {
                setIdDel(id);
                manageModal(true);
                e.stopPropagation();
              }}
            />
          </div>
        );
      },
    },
  ];
  return (
    <div className="pt-[30px] pb-[30px]">
      <CTable
        rowKey="id"
        key="id"
        columns={columns}
        dataSource={dataForm}
        rowSelection={{ ...rowSelection, checkStrictly: false }}
      />
      <ModalDelete
        open={isModalOpen}
        onOk={() => deleteDataForm()}
        onCancel={() => manageModal()}
      />
    </div>
  );
};

export default TableForm;
