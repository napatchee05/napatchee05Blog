import React from "react"
import myImage from "../images/myimage.jpg"

function Header() {

    const headerStyle = {
        color : "white" ,
        display : "flex"
    }
    
    return(
        <div style={headerStyle}>
            <div>
                <img src={myImage} width="100%"/>
            </div>
        </div>
    )
}

export default Header ;