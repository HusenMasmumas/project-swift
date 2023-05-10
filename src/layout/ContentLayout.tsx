import React, { FC } from "react";
import { Outlet } from "react-router-dom";

type Props = {
  children?: React.ReactNode;
};

const ContentLayout: FC<Props> = () => {
  return <Outlet />;
};

export default ContentLayout;
