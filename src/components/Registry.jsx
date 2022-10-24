import React from "react";

const styles = {
    form: {
        marginLeft: "1000px",
        marginTop: "-135px", 
        textAlign: "center",     
    },
    header: {
        fontFamily: "Poppins, sans-serif",
        fontWeight: "small",
        color: "#0a95ff"
    },
    elements: {
        height: "30px",
        borderRadius: "5px",
        borderColor: "#f1f2f3",
        margin: "2px",
        color: "#aba8a8"
    },
    button: {
        height: "30px",
        borderRadius: "5px",
        backgroundColor: "#0a95ff",
        color: "#f1f2f3",
        width: "120px"
    },
    tagLine: {
        color: "#aba8a8",
        fontWeight: "small"
    }
}

function Register() {
    return(
        <div style={styles.form}>
            <h1 style={styles.header}>Join Our Community</h1>
        <div className="formBody">
            <div>
                <input style={styles.elements} type="text" id="fullname" placeholder="FULL NAME"/>
            </div>
            <div className="email">
                <input  type="email" style={styles.elements} placeholder="EMAIL"/>
            </div>
            <div className="password">
                <input style={styles.elements} type="password"   placeholder="PASSOWRD"/>
            </div>
            <div className="confirm-password">
                <input style={styles.elements} type="password" placeholder="CONFIRM PASSWORD"/>
            </div>
        </div>
        <div class="footer">
            <button style={styles.button} type="submit" class="btn">PROCEED</button>
        </div>
        <div style={styles.tagLine}>
            <p>By proceeding you agree to the privacy policy and <br></br> terms of service</p>
        </div>
    </div> 
    )
}

export default Register;