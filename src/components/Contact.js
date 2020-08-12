import React from "react" 
import facebook from "../images/facebookIcon.png"
import instagram from "../images/instagramIcon.png"
import github from "../images/githubIcon.png"
import Fade from "react-reveal/Fade" ;

function Contact() {
    
    const myStyle = {
        marginTop : "20px" ,
        backgroundColor : "black" ,
        marginLeft : "5%" , 
        marginRight : "5%" ,
        marginBottom : "1%" ,
        color : "white" ,
        textAlign : "center" ,
        paddingRight : "3%" ,
        paddingLeft : "3%" ,
        paddingTop : "1%" , 
        paddingBottom : "3%"
    }

    return (
        <div style={myStyle}>
            <div style={{paddingTop : "1.5%",paddingBottom:"3%" , fontSize:"6vw" , fontWeight : "bold"}}>
                Can I text you ? Yes
            </div>
            <div style={{display:"flex" , justifyContent:"space-between" , paddingLeft : "4%" , paddingRight : "4%"}}>
                <div style={{width:"25%" , backgroundColor : "white" , padding : "2%"}}>
                    <a href="https://www.facebook.com/napatchee05">
                        <Fade>
                            <img src={facebook} alt="facebook" width="100%"/>
                        </Fade>
                    </a>
                </div>
                <div style={{width:"25%" , backgroundColor : "white" , padding : "2%"}}>
                    <a href="https://www.instagram.com/napatchee05">
                        <Fade>
                            <img src={instagram} alt="instagram" width="100%"/>
                        </Fade>
                    </a>
                </div>
                <div style={{width:"25%" , backgroundColor : "white" , padding : "2%"}}>
                    <a href="https://www.github.com/napatchee05">
                        <Fade>
                            <img src={github} alt="github" width="100%"/>
                        </Fade>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact ;