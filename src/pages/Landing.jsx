import React from "react";
import Navbar from "../components/Navbar/Navbar";

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
        </div>
        
    )
}

export default Landing;
