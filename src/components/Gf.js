import React from "react" 
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade" ;
import Cream from "../images/Cream2.jpg"

function Gf() {

    const mystyle= {
        marginRight : "5%" ,
        marginLeft : "5%" ,
        backgroundColor : "#ffd5cd" ,
        marginTop : "20px" ,
    }


    return (
        <Slide right>
            <Fade>
                <div style={mystyle}>
                    <div style={{color:"#ff6b6b",textAlign:"center",padding:"1.2%",fontWeight:"bold",fontSize:"20px"}}>
                        CREAM , HALF OF MY JOURNEY
                    </div> 
                    <div style={{backgroundColor : "#efbbcf"}}>
                        <img src={Cream} alt="Cream" style={{paddingTop : "2%",paddingBottom : "2%",display:"block" , marginRight:"auto" , marginLeft:"auto"}} width="96%"/>
                    </div>
                    <div style={{padding:"1.5%",backgroundColor : "#c3aed6" , fontSize:"18px" , color:"white", fontWeight:"bold",textAlign:"center"}}>
                        My Little Chubby Girl <br/>
                        Thanks for staying together naka 
                    </div>
                </div>
            </Fade>
        </Slide>
    )
}

export default Gf ;