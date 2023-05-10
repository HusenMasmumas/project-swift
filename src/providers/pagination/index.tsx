import { IPaginationContext } from "./interface";
import { createContext, useContext } from "react";

const MainPaginationContext = createContext<IPaginationContext>(
  {} as IPaginationContext
);

const MainPaginationProvider = ({
  children,
  value,
}: {
  children: JSX.Element;
  value: any;
}) => {
  return (
    <MainPaginationContext.Provider value={{ ...value }}>
      {children}
    </MainPaginationContext.Provider>
  );
};

export const useMainPagination = () => useContext(MainPaginationContext);
export default MainPaginationProvider;
