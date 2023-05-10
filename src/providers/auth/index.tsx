import { IAuthContext } from "./interface";
import { useLocation, useNavigate } from "react-router-dom";
import { createContext, useContext, useEffect } from "react";

const AuthProviderContext = createContext<IAuthContext>({});

const AuthProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    let part = "/home";

    const _redirect = () => {
      if (pathname === "/") {
        navigate(part, { replace: true });
      } else return navigate(pathname, { replace: true });
    };
    _redirect();

    // eslint-disable-next-line
  }, [navigate, pathname]);

  return <>{children}</>;
};
export const useAuth = () => useContext(AuthProviderContext);
export default AuthProvider;
