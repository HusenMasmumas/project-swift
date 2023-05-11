import { IManageFormTableContext } from "./interface";
import { createContext, useContext } from "react";

const MainManageFormTableContext = createContext<IManageFormTableContext>(
  {} as IManageFormTableContext
);

const MainManageFormTableProvider = ({
  children,
  value,
}: {
  children: JSX.Element;
  value: IManageFormTableContext;
}) => {
  return (
    <MainManageFormTableContext.Provider value={{ ...value }}>
      {children}
    </MainManageFormTableContext.Provider>
  );
};

export const useMainManageFormTable = () =>
  useContext(MainManageFormTableContext);
export default MainManageFormTableProvider;
