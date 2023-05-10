import { useTranslation } from "react-i18next";
import CSelect from "components/select/Selector";

const HeaderLayout = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("local-lang", lang);
  };
  return (
    <div>
      <div className="px-[20px] pt-[10px] flex justify-end">
        <div className="w-[80px]">
          <CSelect
            Source={[
              {
                value: "en",
                label: t("EN"),
              },
              {
                value: "th",
                label: t("TH"),
              },
            ]}
            value={i18n.language === "th" ? "th" : "en"}
            onChange={changeLanguage}
            keyName="label"
            keyValue="value"
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderLayout;
