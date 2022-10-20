import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Welcome from "../features/WelcomeMessage";

const styles = {
    Landing: {
        backgroundColor: "#f1f2f3",
        heght: "1100px"
    }
}

function Landing() {
    return(
        <div style={styles.Landing}>
            <Navbar/>
            <Welcome/>
        </div>
        
    )
}

export default Landing;
