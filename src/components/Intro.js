import React from "react"
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade" ;

function Intro() {

    const introstyle = {
        marginTop : "20px" ,
        backgroundColor : "black" ,
        marginLeft : "5%" , 
        marginRight : "5%" ,
        marginBottom : "1%" ,
        color : "white" ,
        textAlign : "center" ,
        padding : "0.2%",
        paddingBottom : "10px"
    }

    return (
        <Fade opposite>
            <Slide top opposite>
                <div style={introstyle}>
                    <h1>Napat Cheetanom , Full time Sleeper</h1>
                    <div style={{marginBottom:"20px"}}>
                        Greetings ! I'm Captain , I currently being sophomore year , computer engineering student @CHULALONGKORN UNIVERSITY <br/>
                    </div>
                    <div stlye={{marginBottom:"20px"}}>
                        This webpage is where I keep my life journey. Come to see how I messing up my life.
                    </div>
                </div>
            </Slide>
        </Fade>
    )
}

export default Intro ;