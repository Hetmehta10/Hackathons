import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useFirebaseApp } from "reactfire";
import { Link } from "react-router-dom";

const LoginPagePatient = () => {
  const firebase = useFirebaseApp();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleLogin = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      // Redirect patient to the patient dashboard
      history.push("/patient-dashboard");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
  <h2>Patient Login</h2>
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
    Not a patient? <Link to="/login-doctor">Login as Doctor</Link>
  </p>
    </div>
  );
};

export default LoginPagePatient;
