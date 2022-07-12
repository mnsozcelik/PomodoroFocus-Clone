import React, { useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
  } from "firebase/auth";
import { SIZES } from "../constants/theme";
import { auth } from "../configs/firebase-config";

function Login() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="container">
      <div className="row justify-content-md-center" style={styles.loginRow}>
        <img
          src="https://pomofocus.io/images/brandlogo-white.png"
          style={styles.logo}
        />
        <h1 style={styles.header}>Login</h1>
        <div className="col col-lg-3 col-md-4" style={styles.loginCol}>
          <button type="button" className="btn" style={styles.googleLoginButton}>
            <img
              src="https://pomofocus.io/icons/g-logo.png"
              style={styles.googleLoginImage}
            />
            Login with Google
          </button>
          <div style={{ display: "flex", marginTop: "10px" }}>
            <div style={{ width: "45%", color: "#353636" }}>
              <hr />
            </div>
            <div
              style={{
                width: "10%",
                textAlign: "center",
                color: "#353636",
              }}
            >
              {" "}
              or
            </div>
            <div style={{ width: "45%", color: "#353636" }}>
              <hr />
            </div>
          </div>
          <div width="100">
            <p
              style={{
                color: "#C4C4C4",
                fontWeight: "bold",
                marginBottom: "5px",
                marginTop: "22px",
                fontSize: "12px",
              }}
            >
              EMAIL
            </p>
            <input
              placeholder="example@mail.com"
              type="text"
              className="form-control"
              style={styles.loginInput}
              onChange={e => setLoginEmail(e.target.value)}
            />
            <p
              style={{
                color: "#C4C4C4",
                fontWeight: "bold",
                marginBottom: "5px",
                marginTop: "22px",
                fontSize: "12px",
              }}
            >
              PASSWORD
            </p>
            <input
              type="password"
              className="form-control"
              style={styles.loginInput}
              onChange={e => setLoginPassword(e.target.value)}
            />
          </div>
          <button type="button" className="btn" style={styles.emailLoginButton} onClick={login} >
            Login with Email
          </button>
          <div
            style={{
              paddingRight: "auto",
              paddingLeft: "auto",
              width: "100%",
              marginTop: "10px",
              textAlign: "center",
            }}
          >
            <a
              style={{
                color: "#999999",
              }}
              href="#"
            >
              Forgot Password
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

const styles = {
  logo: {
    width: "23%",
  },
  header: {
    fontSize: "18px",
    fontWeight: 600,
    color: "white",
    letterSpacing: "0.05em",
    marginTop: "18px",
    opacity: 0.8,
    marginBottom: "38px",
    textAlign: "center",
  },
  loginRow: {
    paddingTop: "5%",
  },
  loginCol: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "auto",
    marginBootom: "auto",
    backgroundColor: "#FFFFFF",
    minWidth: "350px",
    borderRadius: "7px",
    height: "419px",
    paddingInline: "18px",
    paddingBlock: "26px",
  },
  googleLoginButton: {
    width: "100%",
    height: "42px",
    borderRadius: SIZES.radius / 7,
    boxShadow: "0px 1px 0px 2px rgba(166,166,166,0.45)",
    color: "#777777",
    fontWeight: "bold",
  },
  emailLoginButton: {
    marginTop: "28px",
    width: "100%",
    height: "42px",
    borderRadius: SIZES.radius / 7,
    boxShadow: "0px 1px 0px 2px rgba(166,166,166,0.45)",
    color: "#FFFFFF",
    fontSize: "14px",
    backgroundColor: "#222222",
  },
  googleLoginImage: {
    padding: "2px",
    height: "22px",
    marginRight: "10px",
  },
  loginInput: {
    backgroundColor: "#EFEFEF",
    borderColor: "#EFEFEF",
  },
};
