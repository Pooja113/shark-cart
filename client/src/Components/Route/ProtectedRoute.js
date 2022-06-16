import React, { Fragment } from "react";
import { useSelector } from "react-redux";
//import { Redirect, Route } from "react-router-dom";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAdmin, component: Component, ...rest }) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);

  if(loading === false){
    console.log(user?.role)
    if (isAuthenticated === false) {
      console.log("isauth");
      return <Navigate to="/login" />;
    }
     else if (isAdmin === true && user?.role !== "admin") {
      console.log("user");
      return <Navigate to="/login" />;
    } else {
      console.log("admin111");
      return <Outlet />
    }
   
  }
 

  
};

export default ProtectedRoute;

