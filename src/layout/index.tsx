import { useLocation } from "react-router-dom";
import { FC, useEffect, useRef } from "react";
import HeaderLayout from "./HeaderLayout";
import ContentLayout from "./ContentLayout";

type Props = {};

export interface IMenu {
  keyName: string;
  name: string;
  icon?: any;
  link?: string;
}

const DefaultLayout: FC<Props> = (props) => {
  const { pathname } = useLocation();
  const sc = useRef<any>();
  useEffect(() => {
    sc?.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return (
    <div ref={sc} className="w-full h-[calc(100vh)] overflow-y-auto">
      <div className="px-[30px]">
        <HeaderLayout />
        <ContentLayout />
      </div>
    </div>
  );
};

export default DefaultLayout;
