import { IShapeContext } from "./interface";
import { createContext, useContext } from "react";

const MainShapeContext = createContext<IShapeContext>({} as IShapeContext);

const MainShapeProvider = ({
  children,
  value,
}: {
  children: JSX.Element;
  value: IShapeContext;
}) => {
  return (
    <MainShapeContext.Provider value={{ ...value }}>
      {children}
    </MainShapeContext.Provider>
  );
};

export const useMainShape = () => useContext(MainShapeContext);
export default MainShapeProvider;
