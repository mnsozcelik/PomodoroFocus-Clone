import React, { useState } from 'react'
import { SIZES } from '../constants/theme';

function Login() {
    return (
        <div class="container">
            <div class="row justify-content-md-center" style={styles.loginRow}>
                <div class="col col-lg-3 col-md-4" style={styles.loginCol}>
                    <button type="button" class="btn" style={styles.googleLoginButton}>
                        <img src="https://pomofocus.io/icons/g-logo.png" style={styles.googleLoginImage} />
                        Login with Google
                    </button>
                    <div style={{ display: "flex", marginTop: "10px" }}>
                        <div style={{ width: "45%", color: "#353636" }}>
                            <hr />
                        </div>
                        <div style={{
                            width: "10%",
                            textAlign: "center", color: "#353636"
                        }}> or</div>
                        <div style={{ width: "45%", color: "#353636" }} >
                            <hr />
                        </div>
                    </div>
                    <div width="100">
                        <p  style={{ color: "#C4C4C4", fontWeight: "bold", marginBottom: "5px", marginTop: "22px", fontSize: "12px" }}>EMAIL</p>
                        <input placeholder='example@mail.com'  type="text" class="form-control" style={styles.loginInput} />
                        <p style={{ color: "#C4C4C4", fontWeight: "bold", marginBottom: "5px", marginTop: "22px", fontSize: "12px" }}>PASSWORD</p>
                        <input type="password" class="form-control" style={styles.loginInput} />
                    </div>
                    <button type="button" class="btn" style={styles.emailLoginButton}>

                        Login with Email
                    </button>
                    <div style={{
                        paddingRight: "auto",
                        paddingLeft: "auto",
                        width: "100%",
                        marginTop: "10px",
                        textAlign: "center"
                    }}>
                        <a style={{
                            color: "#999999",


                        }} href="#">Forgot Password</a>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Login

const styles = {
    loginRow: {
        paddingTop: "20%",
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
        borderColor: "#EFEFEF"
    }

}