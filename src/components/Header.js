import React , {useState} from "react"
import myImage from "../images/myimage2.jpg"
import Intro from "./Intro"

function Header() {

    
    const [intro,setIntro] = useState(1) 

    const headerStyle = {
        color : "black" 
    }
    
    
    const introstyle = {
        marginTop : "20px" ,
        backgroundColor : "black" ,
        marginLeft : "5%" , 
        marginRight : "5%" ,
        color : "white" ,
        textAlign : "center"
    }
    
    const clickHandler = () => {
        if (intro === 0) {
            setIntro(1)
        }else {
            setIntro(0)
        }
    }

    return(
        <div style={headerStyle}>
            <div>
                <img src={myImage} width="100%" alt="header" onClick={clickHandler}/>
            </div>
            <div>
                <Intro/>
            </div>
        </div>
    )
}

export default Header ;