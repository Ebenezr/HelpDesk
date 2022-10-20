import React from "react";

const styles = {
    footer: {
        // padding: "350px",
        marginLeft: "45px",
        marginTop: "100px",
        textAlign: "center"
    },
    starter: {
        fontFamily: "Poppins, sans-serif",
        fontWeight: "bold",
        fontSize: "20px",
    },
    seconder: {
        fontFamily: "Poppins, sans-serif",
        fontWeight: "bold",
        fontSize: "20px",
        color: "#0a95ff"
    },
    content: {
        fontFamily: "Poppins, sans-serif",
        fontSize: "12px",
        color: "#7a7878",
      }
}

function Footer() {
    return (
        <footer style={styles.footer}>
            <div>
                <p style={styles.starter}>Ask your Questions,</p>
                <p style={styles.seconder}>Get your Answers</p>
                <p style={styles.content}>Just post your question on our portal and
                    <br></br>
                    You'll get your answer with all
                    <br></br>
                    the details as requested.
                </p>
            </div>
        </footer>
    )
}

export default Footer;