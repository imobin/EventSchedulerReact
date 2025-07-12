import React from "react";
import LoginForm from "../components/LoginForm";

export default function SignInPage({setisRegistered}) {
  return (
    <>
      <LoginForm setisRegistered={setisRegistered}/>
    </>
  );
}
