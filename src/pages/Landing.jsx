import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../features/Footer";
import Welcome from "../features/WelcomeMessage";
import Footers from "../features/Footer";
import Belt from "../features/Belt"

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
            <Belt/>
            <Footers/>
        </div>
        
    )
}

export default Landing;
