import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../../store";

export default function AuthRoutes({ children }: { children?: ReactNode }) {
  const { user } = useSelector((value: RootState) => value.userCredentials);

  if (!user) {
    return <Navigate to="/" />;
  }
  return <>{children}</>;
}
