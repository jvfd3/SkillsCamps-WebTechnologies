import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigator = useNavigate();
  const API = "http://zimin404.beget.tech/api-file/authorization";

  // Create state
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);

  // Error states
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState("");

  const signIn = async (e) => {
    e.preventDefault();

    const bodyJson = JSON.stringify({
      email,
      password,
    });

    const bodyOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: bodyJson,
    };

    const fetchAuth = await fetch(API, bodyOptions);
    const dataFetch = await fetchAuth.json();

    console.log(dataFetch);

    if (dataFetch.message && dataFetch.code === 422) {
      setErrorEmail(dataFetch.message?.email ?? "");
      setErrorPassword(dataFetch.message?.password ?? "");
    }

    if (dataFetch.message === "Authorization failed") {
      setErrorLogin(dataFetch.message);
    }

    if (dataFetch.success) {
      localStorage.setItem("token", dataFetch.token);
      navigator("/upload");
    }
  };

  return (
    <>
      <main className="main">
        <div className="responsive-wrapper">
          <h1>Login</h1>
          <form className="registration card" onSubmit={signIn}>
            <label>
              Email
              <input type="email" />
            </label>
            <label>
              Password
              <input type="password" />
            </label>
            <button className="base-button">Login</button>
          </form>
        </div>
      </main>
    </>
  );
};

export default Login;
