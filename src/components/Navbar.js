import React from "react"

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

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
                
            </div>
        </div>
    )
}

export default Navbar ;