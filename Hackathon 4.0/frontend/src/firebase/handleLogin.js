const handleLogin = async () => {
    try {
      const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
      const user = userCredential.user;
      
      // Assuming role info is stored in Firestore
      const userRef = firebase.firestore().collection('users').doc(user.uid);
      const doc = await userRef.get();
      
      if (doc.exists) {
        const role = doc.data().role; // 'doctor' or 'patient'
        if (role === "doctor") {
          history.push("/doctor-dashboard");
        } else if (role === "patient") {
          history.push("/patient-dashboard");
        }
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  