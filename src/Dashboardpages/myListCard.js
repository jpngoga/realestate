import React from 'react'

import {AiFillEye} from 'react-icons/ai'
import {FiEdit} from 'react-icons/fi'
import {MdLocationOn} from 'react-icons/md'
import {GiNetworkBars} from 'react-icons/gi'
import {RiDeleteBin6Line} from 'react-icons/ri'
import {RiStarSFill} from 'react-icons/ri'

function MyListCard(props) {
  return (
    <div>
        <div style={{
                display:"flex",
                flexDirection:"row",
                flexWrap:"wrap",
                gap:"20px",
                width:"440px",
                backgroundColor:"white",
                margin:"10px 20px"
            }}>
                <div style={{margin:"20px"}}>
                    <img src="https://homeradar.kwst.net/images/all/3.jpg" alt="not_found"style={{width:"150px"}}/>
                </div>
                <div>
                    <h4 style={{fontSize:"14px", lineHeight:1}}>{props.title}</h4>
                    <p style={{fontSize:"12px", lineHeight:1, color:"#144273",fontWeight:"bold"}}><MdLocationOn style={{color:"blue"}}/>{props.info}
                    </p>
                    <p>
                    <RiStarSFill style={{color:"#fad505",fontSize:"16px", margin:"0px 2px",marginTop:"6%"}}/>
                    <RiStarSFill style={{color:"#fad505",fontSize:"16px", margin:"0px 2px",marginTop:"6%"}}/>
                    <RiStarSFill style={{color:"#fad505",fontSize:"16px", margin:"0px 2px",marginTop:"6%"}}/>
                    <RiStarSFill style={{color:"#fad505",fontSize:"16px", margin:"0px 2px",marginTop:"6%"}}/>
                    <RiStarSFill style={{color:"lightgray",fontSize:"16px", margin:"0px 5px",marginTop:"6%"}}/></p>
                    <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:2,}}>
                        <div style={{marginTop:"6%"}}>
                        <AiFillEye style={{color:"blue",fontSize:"16px", margin:"0px 5px",}}/>

                        </div>
                        <div> <p style={{fontSize:"11px",}}>viewed 564</p></div>
                        <FiEdit style={{color:"blue",fontSize:"16px", margin:"0px 5px",marginTop:"6%"}}/>
                        <GiNetworkBars style={{color:"blue",fontSize:"16px", margin:"0px 5px",marginTop:"6%"}}/>
                        <RiDeleteBin6Line style={{color:"blue",fontSize:"16px", margin:"0px 5px",marginTop:"6%"}}/>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default MyListCard

