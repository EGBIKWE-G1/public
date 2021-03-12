import React from "react";
import "../Components/UserLoginStyle.css";
import Header from "../Components/Header";
import Login from "./Login";

const UserLoginStyle = () => {
  return (
    <section>
      <section>
        <main className="user-login-interface mango">
          <Header />
          <Login />
        </main>
        <footer className="user-login-footer"></footer>
      </section>
    </section>
  );
};
export default UserLoginStyle;
