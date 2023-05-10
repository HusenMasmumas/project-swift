import { RouteObject } from "react-router-dom";
import HomePage from "views/home";
import TestFirst from "views/test_first";
import TestThird from "views/test_third";
import TestSecond from "views/test_second";
import NotFoundPage from "views/404";
import DefaultLayout from "layout";

export interface IRouter {
  path: string;
  name: string;
  authentMenuName: string;
  exact: boolean;
  component: React.FC;
}

export const routers: RouteObject[] = [
  {
    path: "*",
    element: <NotFoundPage />,
  },
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/home",
        element: <HomePage />,
        index: true,
      },
      {
        path: "/home/test-first",
        element: <TestFirst />,
        index: true,
      },
      {
        path: "/home/test-second",
        element: <TestSecond />,
        index: true,
      },
      {
        path: "/home/test-third",
        element: <TestThird />,
        index: true,
      },
    ],
  },
];
