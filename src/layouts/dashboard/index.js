import React, { useEffect } from "react";
import { Stack } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";
import useResponsive from "../../hooks/useResponsive";
import SideNav from "./SideNav";
import ToolBar from "./ToolBar";
import { useDispatch, useSelector } from "react-redux";

const DashboardLayout = () => {
  const isDesktop = useResponsive("up", "md");
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(FetchUserProfile());
  // }, []);

  // if (!isLoggedIn) {
  //   return <Navigate to={"/auth/login"} />;
  // }

  return (
    <Stack>
      <ToolBar />
      <Stack direction="row">
        {isDesktop && (
          // SideBar
          <SideNav />
        )}

        <Outlet />
      </Stack>
    </Stack>
  );
};

export default DashboardLayout;
