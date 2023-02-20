import React, { useState } from 'react'

import {AiFillEye} from 'react-icons/ai'
import {FiEdit} from 'react-icons/fi'
import {MdLocationOn} from 'react-icons/md'
import {GiNetworkBars} from 'react-icons/gi'
import {RiDeleteBin6Line} from 'react-icons/ri'
import {RiStarSFill} from 'react-icons/ri'
import { DeletePost } from './DeletePost'

function MyListCard(props) {

    const [isDeleting, setisDeleting] = useState(false)
    const [posts, setPost] = useState([])

    const handleDelete = () => {
        setisDeleting(true);
        DeletePost(props.id)
        .then(() => {
            console.log("Delete");
        })
        .catch((error) =>{
            console.error(error)
        })
        .finally(() => {
            setisDeleting(false);
        });
    }
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
                    <h4 style={{fontSize:"12px", lineHeight:1}}>{props.title}</h4>
                    <div><p style={{fontSize:"8px", lineHeight:1, color:"#144273",fontWeight:"bold"}}><MdLocationOn style={{color:"blue"}}/>{props.info}
                    </p></div>
                    
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
                        <RiDeleteBin6Line style={{color:"blue",fontSize:"16px", margin:"0px 5px",marginTop:"6%"}} onClick={handleDelete}/>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default MyListCard

