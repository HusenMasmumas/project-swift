import { routers } from "routes/router";
import { useEffect } from "react";
import { RecoilRoot } from "recoil";
import { useTranslation } from "react-i18next";
import { ConfigProvider } from "antd";
import { ValidateMessages } from "rc-field-form/lib/interface";
import { HashRouter, useNavigate, useRoutes } from "react-router-dom";
import thTH from "antd/es/locale/th_TH";
import enUS from "antd/es/locale/en_US";
import AuthProvider from "providers/auth";
import "assets/scss/index.scss";

const route: any[] = routers.map((m) => {
  return {
    ...m,
    children: m?.children?.map((item) => {
      return item;
    }),
  };
});

const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/home", { replace: true });
    // eslint-disable-next-line
  }, []);

  const routes = useRoutes(route);
  return routes;
};
const AppWrapper = () => {
  const { i18n } = useTranslation();
  const validateMessages: ValidateMessages = {
    required: i18n?.language === "th" ? "โปรดกรอกข้อมูล!" : "Please input!",
    types: {
      email:
        i18n?.language === "th"
          ? "โปรดกรอกอีเมลให้ถูกต้อง!"
          : "Please enter a valid email address!",
    },
  };
  return (
    <ConfigProvider
      locale={i18n?.language === "th" ? thTH : enUS}
      form={{ validateMessages }}
    >
      <RecoilRoot>
        <HashRouter>
          <AuthProvider>
            <App />
          </AuthProvider>
        </HashRouter>
      </RecoilRoot>
    </ConfigProvider>
  );
};

export default AppWrapper;
