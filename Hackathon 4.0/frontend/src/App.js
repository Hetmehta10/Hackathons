import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPageDoctor from "./pages/LoginPageDoctor";
import LoginPagePatient from "./pages/LoginPagePatient";
import DoctorDashboard from "./pages/DoctorDashboard";
import PatientDashboard from "./pages/PatientDashboard";
import { FirebaseAppProvider } from "reactfire";
import firebaseConfig from "./firebase/firebaseConfig";

const App = () => {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPageDoctor} />
          <Route path="/login-doctor" component={LoginPageDoctor} />
          <Route path="/login-patient" component={LoginPagePatient} />
          <Route path="/doctor-dashboard" component={DoctorDashboard} />
          <Route path="/patient-dashboard" component={PatientDashboard} />
        </Switch>
      </Router>
    </FirebaseAppProvider>
  );
};

export default App;
