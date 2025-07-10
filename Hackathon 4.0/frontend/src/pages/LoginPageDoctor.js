import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useFirebaseApp } from "reactfire";
import { Link } from "react-router-dom";

const LoginPageDoctor = () => {
  const firebase = useFirebaseApp();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleLogin = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      // Redirect doctor to the doctor dashboard
      history.push("/doctor-dashboard");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
  <div>
  <h2>Doctor Login</h2>
  <input
    type="email"
    placeholder="Email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />
  <input
    type="password"
    placeholder="Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
  />
  <button onClick={handleLogin}>Login</button>
  <p>
    Not a doctor? <Link to="/login-patient">Login as Patient</Link>
  </p>
  </div>
  );
};

export default LoginPageDoctor;
