import React from "react"
import facebookIcon from "../images/facebook.png"
import githubIcon from "../images/github.png"
import instagramIcon from "../images/instagram.png"


const myStyle = {
    backgroundColor : "black" , 
    display : "flex" ,
    color : "white",
    paddingLeft : "3vw" ,
    paddingRight : "3vw" ,
    height : "8vh",
    alignItems : "center",
    justifyContent : "space-between"
}

function Navbar() {
    return (
        <div width="100%" style={myStyle}>
            <div>
                napatchee05's webpage
            </div>
            <div>
                <span style={{marginRight : "12px"}}>
                    <a href="https://www.facebook.com/napatchee05"><img src={facebookIcon} alt="facebook" width="30px" /></a>
                </span>
                <span style={{marginRight : "12px"}}>
                    <a href="https://www.instagram.com/napatchee05/"><img src={instagramIcon} alt="instagram" width="30px" /></a>
                </span>
                <span style={{marginRight : "12px"}}>
                    <a href="https://github.com/napatchee05"><img src={githubIcon} alt="github" width="30px" /></a>
                </span>
            </div>
        </div>
    )
}

export default Navbar ;