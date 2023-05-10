import { RouteObject } from "react-router-dom";
import HomePage from "views/home";
import DefaultLayout from "layout";
import NotFoundPage from "views/404";

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
        element: <HomePage />,
        index: true,
      },
      {
        path: "/home/test-second",
        element: <HomePage />,
        index: true,
      },
      {
        path: "/home/test-third",
        element: <HomePage />,
        index: true,
      },
    ],
  },
];
