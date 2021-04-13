import React, {useState} from "react";
import logo from "../../assets/vision-logo.ico";
import { Link } from "react-router-dom";
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export function Jumbotron() {
    const styles = {
        height: "20px",
        background:"none"
    };
    const [isDarkMode, setisDarkMode] = useState(false);
    const body = document.body;
    const darkTheme = "dark";
    const lightTheme = "light";
    let theme;

    if(localStorage){
        theme = localStorage.getItem("theme")
    }

    if(theme === lightTheme || theme === darkTheme) {
        body.classList.add(theme);
    } else {
        body.classList.add(lightTheme);
    }

    const toggleDarkMode = () => {
        if(theme === darkTheme) {
            body.classList.replace(darkTheme, lightTheme);
            setisDarkMode(false);
            localStorage.setItem("theme", "light")
            theme=lightTheme;
        } else {
            body.classList.replace(lightTheme, darkTheme);
            setisDarkMode(true);
            localStorage.setItem("theme", "dark")
            theme=darkTheme;
        }
    };

    return (
        <div className="jumbotron" style={styles}>
              <Link to={"/"}>
                <img src={logo} alt="vision-logo">
                </img>
            </Link>
            <DarkModeSwitch
                id="darkModeSwitch"
                style={{ color:"gray", marginBottom: '2rem', float: "right" }}
                checked={isDarkMode}
                onChange={toggleDarkMode}
                size={30}
            />

        </div>
    );
}

