import { useTranslation } from "react-i18next";
import { IManageFormTable } from "interface/IManageFormTable.inteface";
import { StyledInputNumber } from "components/styled/Styled";
import { useMainManageFormTable } from "providers/manage_form_table";
import { Button, Col, Form, Radio, Row } from "antd";
import { StyledDatePicker, StyledInput } from "components/styled/Styled";
import { enterNextInput, KeyboardEvent } from "tools/util";
import { CheckCountryCode, Citizenship } from "assets/data/data";
import { CountryCode, Gender, PrefixName } from "assets/data/data";
import CSelect from "components/select/Selector";

const ManageForm = () => {
  const { t, i18n } = useTranslation();
  const { dataForm, setDataForm, form } = useMainManageFormTable();
  const nextIdCardNumber = (changedValues: any, key: string) => {
    const keyData: {
      [K: string]: {
        next: string;
        value: number;
      };
    } = {
      idCardNumberFirst: {
        next: "idCardNumberSecond",
        value: 1,
      },
      idCardNumberSecond: {
        next: "idCardNumberThird",
        value: 4,
      },
      idCardNumberThird: {
        next: "idCardNumberFourth",
        value: 5,
      },
      idCardNumberFourth: {
        next: "idCardNumberFifth",
        value: 2,
      },
    };

    const numberLength =
      changedValues?.[`${key}`] !== undefined
        ? String(changedValues?.[`${key}`])?.length
        : 0;

    if (numberLength === keyData?.[`${key}`]?.value) {
      document.getElementById(`infoForm_${keyData?.[`${key}`]?.next}`)?.focus();
    }
  };

  const onFinish = (value: IManageFormTable) => {
    if (!!value?.id) {
      update(value);
    } else {
      create(value);
    }
  };

  const create = (value: IManageFormTable) => {
    const values = [
      ...(dataForm || []),
      { ...value, id: dataForm?.length + 1 },
    ];
    localStorage.setItem("dataForm", JSON.stringify(values));
    setDataForm(values);
    form.resetFields();
  };

  const update = (value: IManageFormTable) => {
    const notDataUpdate = dataForm?.filter((item) => item?.id !== value?.id);
    const values = [...(notDataUpdate || []), { ...value }];
    localStorage.setItem("dataForm", JSON.stringify(values));
    setDataForm(values);
    form.resetFields();
  };
  return (
    <div className="flex justify-center">
      <div className="w-[70%] mt-2 border border-black rounded-[5px] p-[10px]">
        <Form
          form={form}
          name="infoForm"
          onFinish={onFinish}
          scrollToFirstError={true}
          onKeyPress={(e) => {
            enterNextInput(e as KeyboardEvent, "infoForm");
          }}
          onValuesChange={(changedValues) => {
            for (const [key] of Object.entries(changedValues)) {
              nextIdCardNumber(changedValues, key);
            }
          }}
        >
          <Form.Item name="id" hidden>
            <StyledInput />
          </Form.Item>
          <Row gutter={[14, 14]}>
            <Col span={6}>
              <Form.Item
                label={t("prefix")}
                name="prefix"
                rules={[
                  { required: true, message: `${t("pleaseSelectInfo")}` },
                ]}
              >
                <CSelect
                  placeholder={t("prefix")}
                  Source={PrefixName}
                  keyName={i18n.language === "th" ? "nameTh" : "nameEn"}
                  keyValue="value"
                />
              </Form.Item>
            </Col>

            <Col span={9}>
              <Form.Item
                label={t("name")}
                name="name"
                rules={[{ required: true }]}
              >
                <StyledInput />
              </Form.Item>
            </Col>

            <Col span={9}>
              <Form.Item
                label={t("lastName")}
                name="lastName"
                rules={[{ required: true }]}
              >
                <StyledInput />
              </Form.Item>
            </Col>

            <Col span={7}>
              <Form.Item
                label={t("dateOfBirth")}
                name="dateOfBirth"
                rules={[{ required: true }]}
              >
                <StyledDatePicker
                  placeholder="เดือน/วัน/ปี"
                  format="MM/DD/YYYY"
                />
              </Form.Item>
            </Col>

            <Col span={9}>
              <Form.Item
                label={t("citizenship")}
                name="citizenship"
                rules={[
                  { required: true, message: `${t("pleaseSelectInfo")}` },
                ]}
              >
                <CSelect
                  placeholder={`-- ${t("pleaseSelect")} --`}
                  Source={Citizenship}
                  keyName={i18n.language === "th" ? "nameTh" : "nameEn"}
                  keyValue="value"
                />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Row>
                <Col span={5}>
                  <Form.Item label={t("idCardNumber")} name="idCardNumberFirst">
                    <StyledInputNumber maxLength={1} />
                  </Form.Item>
                </Col>
                <Col span={1} className="flex justify-center pt-[10px]">
                  -
                </Col>
                <Col span={4}>
                  <Form.Item name="idCardNumberSecond">
                    <StyledInputNumber maxLength={4} />
                  </Form.Item>
                </Col>
                <Col span={1} className="flex justify-center pt-[10px]">
                  -
                </Col>
                <Col span={4}>
                  <Form.Item name="idCardNumberThird">
                    <StyledInputNumber maxLength={5} />
                  </Form.Item>
                </Col>
                <Col span={1} className="flex justify-center pt-[10px]">
                  -
                </Col>

                <Col span={3}>
                  <Form.Item name="idCardNumberFourth">
                    <StyledInputNumber maxLength={2} />
                  </Form.Item>
                </Col>
                <Col span={1} className="flex justify-center pt-[10px]">
                  -
                </Col>

                <Col span={2}>
                  <Form.Item name="idCardNumberFifth">
                    <StyledInputNumber maxLength={1} />
                  </Form.Item>
                </Col>
              </Row>
            </Col>

            <Col span={24}>
              <Form.Item
                name="gender"
                label={t("gender")}
                rules={[
                  { required: true, message: `${t("pleaseSelectInfo")}` },
                ]}
              >
                <Radio.Group>
                  {Gender?.map((item, index) => {
                    return (
                      <Radio key={index} value={item?.value}>
                        {i18n.language === "th" ? item?.nameTh : item?.nameEn}
                      </Radio>
                    );
                  })}
                </Radio.Group>
              </Form.Item>
            </Col>

            <Col span={7}>
              <Form.Item
                label={t("mobileNumber")}
                name="countryCode"
                rules={[
                  { required: true, message: `${t("pleaseSelectInfo")}` },
                ]}
              >
                <CSelect
                  placeholder={t("countryCode")}
                  Source={CountryCode}
                  keyName="name"
                  keyValue="key"
                />
              </Form.Item>
            </Col>
            <Col span={1} className="flex justify-center pt-[10px]">
              -
            </Col>

            <Col span={9}>
              <Form.Item
                name="mobileNumber"
                rules={[
                  { required: true },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      const countryCode = getFieldValue("countryCode");
                      if (!value) {
                        return Promise.resolve();
                      }
                      if (!countryCode) {
                        return Promise.reject(
                          new Error(`${t("pleaseSelectCountryCode")}`)
                        );
                      } else if (
                        !CheckCountryCode?.[countryCode]?.check?.test(value)
                      ) {
                        return Promise.reject(
                          new Error(`${t("pleaseNumberPhone")}`)
                        );
                      } else {
                        return Promise.resolve();
                      }
                    },
                  }),
                ]}
              >
                <StyledInput />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Row>
                <Col span={9}>
                  <Form.Item label={t("passport")} name="passport">
                    <StyledInput />
                  </Form.Item>
                </Col>
              </Row>
            </Col>

            <Col span={9}>
              <Form.Item
                label={t("expectedSalary")}
                name="expectedSalary"
                rules={[{ required: true }]}
              >
                <StyledInput />
              </Form.Item>
            </Col>

            <Col>
              <Button className="bg-white h-[40px]" htmlType="reset">
                {t("cleanup")}
              </Button>
            </Col>
            <Col>
              <Button className="bg-white h-[40px]" htmlType="submit">
                {t("sendInfo")}
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default ManageForm;
