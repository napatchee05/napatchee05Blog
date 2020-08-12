import React from "react"
import Activity1 from "../images/Activity1.png"
import Fade from "react-reveal/Fade"
import Slide from "react-reveal/Slide"

function Activity() {
    
    const introstyle = {
        marginTop : "20px" ,
        backgroundColor : "black" ,
        marginLeft : "5%" , 
        marginRight : "5%" ,
        marginBottom : "1%" ,
        color : "white" ,
        padding : "0.2%",
        paddingBottom : "10px"
    }

    return (
        <Slide bottom>
            <Fade>
                <div style={introstyle}>
                    <div style={{paddingLeft : "5%" , fontSize : "5vw" , paddingTop : "5%" , paddingBottom : "5%", fontWeight : "bold"}}>
                        My Activity (บทความยังไม่เสร็จ)
                    </div>
                    <div>
                        <div>
                            <a href="underconstruction">
                                <div style={{display:"flex",justifyContent:"center" , marginBottom:"3%"}}>
                                    <img src={Activity1} alt="1" width="90%"/>
                                </div>
                                {/* <div style={{padding:"2%" , textAlign:"center" , fontWeight : "bold" , backgroundColor : "#404040"}} classNames="Hyperlink">
                                    Automate your Tinder via Python
                                </div> */}
                            </a>
                        </div>
                    </div>
                </div>
            </Fade>
        </Slide>
    )

}

export default Activity 