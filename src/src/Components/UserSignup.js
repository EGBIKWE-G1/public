import React from "react";
import "../Components/UserLoginStyle.css";
import Header from "../Components/Header";
import SignUp from "../Components/Signup";
const UserSignup = () => {
  return (
    <section>
      <section>
        <main>
          <Header />
          <SignUp />
        </main>
        <footer className="user-login-footer"></footer>
      </section>
    </section>
  );
};
export default UserSignup;
