import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ErrorLabel = ({ errorMessage }) => {
  if (!errorMessage) return null;
  return <span className="error-span">{errorMessage}</span>;
};

const Registration = () => {
  const navigator = useNavigate();

  const API = "http://zimin404.beget.tech/api-file/registration";

  // Create state
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const [firstName, setFirstName] = useState([]);
  const [lastName, setLastName] = useState([]);
  const [country, setCountry] = useState([]);

  // Create error state
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorFirstName, setErrorFirstName] = useState("");
  const [errorLastName, setErrorLastName] = useState("");
  const [errorCountry, setErrorCountry] = useState("");

  const signUp = async (e) => {
    e.preventDefault();

    const bodyJson = JSON.stringify({
      email,
      password,
      first_name: firstName,
      last_name: lastName,
      country,
    });

    const bodyOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: bodyJson,
    };

    const fetchData = await fetch(API, bodyOptions);
    const dataFetch = await fetchData.json();

    if (dataFetch.message && dataFetch.code === 422) {
      setErrorEmail(dataFetch.message?.email ?? "");
      setErrorPassword(dataFetch.message?.password ?? "");
      setErrorFirstName(dataFetch.message?.firstName ?? "");
      setErrorLastName(dataFetch.message?.lastName ?? "");
      setErrorCountry(dataFetch.message?.country ?? "");
    } else {
      navigator("/login");
    }
  };

  return (
    <>
      <main className="main">
        <div className="responsive-wrapper">
          <h1>Registration</h1>
          <form className="registration card" onSubmit={signUp}>
            <label>
              Last Name
              <input
                type="text"
                className={errorLastName.length > 0 ? "error-input" : ""}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </label>
            <ErrorLabel errorMessage={errorLastName} />

            <label>
              First Name
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </label>
            <ErrorLabel errorMessage={errorFirstName} />

            <label>
              E-mail
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <ErrorLabel errorMessage={errorEmail} />

            <label>
              Password
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <ErrorLabel errorMessage={errorPassword} />

            <label>
              Country
              <input
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </label>
            <ErrorLabel errorMessage={errorCountry} />

            <button className="base-button">Register</button>
          </form>
        </div>
      </main>
    </>
  );
};

export default Registration;
