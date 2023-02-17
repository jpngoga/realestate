import React from 'react'
import {AiFillGold} from 'react-icons/ai'
import {AiOutlineBarChart} from 'react-icons/ai'
import {IoIosChatboxes} from 'react-icons/io'
import {AiFillHeart} from 'react-icons/ai'
import {AiFillCheckSquare} from 'react-icons/ai'
import {AiOutlineCalendar} from 'react-icons/ai'
import {AiFillCloseCircle} from 'react-icons/ai'
import {RiMessage2Fill} from 'react-icons/ri'
import chart from '../Dashboardpages/chart.png'
import BubleChart from './BubleChart'


export const YourListings=()=> {
  return (
    <div style={{backgroundColor:"#F5F7FB", padding:"20px"
    }}><span><h1 style={{color:"dargkblue",fontSize:"18px", paddingLeft:"20px",}}>DASHBOARD</h1>
    <hr></hr>
    
    
    </span>
        <diV className="listing-headers" style={{marginLeft:"12px", width: "800px",marginTop:"15px"}}>
            <div  style={{display: "flex", flexDirection: "row", gap: "600px", backgroundColor:"white", color:"blue", border:"1px solid lightgray", padding:"0px 8px",margin:"10px"}}>
                <div>
                    <h1 style={{color:"black", fontSize: "14px",}}>Active Listings</h1>
                    <h2 style={{color:"blue", fontSize: "14px", lineHeight:"0px"}}>124</h2>
                </div>
                <div><AiFillGold style={{color:"blue", fontSize: "25px",paddingTop:"15px",}}/></div>
                
            </div>
            <div  style={{display: "flex", flexDirection: "row", gap: "600px", backgroundColor:"white", color:"blue", border:"1px solid lightgray", padding:"0px 8px",margin:"10px"}}>
                <div>
                    <h1 style={{color:"black", fontSize: "14px",}}>Lising Views</h1>
                    <h2 style={{color:"blue", fontSize: "14px", lineHeight:"0px"}}>1056</h2>
                </div>
                <div><AiOutlineBarChart style={{color:"blue", fontSize: "25px",paddingTop:"15px",paddingLeft:"18px"}}/></div>
                
            </div>
            <div  style={{display: "flex", flexDirection: "row", gap: "600px", backgroundColor:"white", color:"blue", border:"1px solid lightgray", padding:"0px 8px",margin:"10px"}}>
                <div>
                    <h1 style={{color:"black", fontSize: "14px",}}>Your Reviews</h1>
                    <h2 style={{color:"blue", fontSize: "14px", lineHeight:"0px"}}>357</h2>
                </div>
                <div><IoIosChatboxes style={{color:"blue", fontSize: "25px",paddingTop:"15px",paddingLeft:"13px"}}/></div>
                
            </div>
            <div  style={{display: "flex", flexDirection: "row", gap: "575px", backgroundColor:"white", color:"blue", border:"1px solid lightgray", padding:"0px 8px",margin:"10px"}}>
                <div>
                    <h1 style={{color:"black", fontSize: "14px",}}>Times Bookmark</h1>
                    <h2 style={{color:"blue", fontSize: "14px", lineHeight:"0px"}}>124</h2>
                </div>
                <div><AiFillHeart style={{color:"blue", fontSize: "25px",paddingTop:"15px",paddingLeft:"10px"}}/></div>
                
            </div>
        
            
        </diV>
        <span><h1 style={{color:"dargkblue",fontSize:"16px", padding:"20px",}}>Your Statistic</h1></span>
        
      <div>
        
        <BubleChart/>

      </div>
      <span><h1 style={{color:"dargkblue",fontSize:"16px", padding:"20px",}}>Last Activities</h1></span>

    <div  style={{display: "flex", flexDirection: "row", gap: "100px", backgroundColor:"white", color:"blue", border:"1px solid lightgray", padding:"0px 14px",margin:"10px 20px",width:"760px",}}>
               
                <div><AiFillCheckSquare style={{color:"blue", fontSize: "25px",marginTop:"18px",}}/></div>
                <div>
                    <p style={{color:"black", fontSize: "14px",}}>Your lising 
                    <span style={{padding:"0px 15px",color:"blue"}}>Urban Appartmes</span> has been approved!<AiOutlineCalendar style={{padding:"0px 15px",color:"blue"}}/><span style={{padding:"0px 15px"}}>28 may 2020</span><AiFillCloseCircle style={{lineHeight:"12px", color:"blue", fontSize:"25px",}}/></p>
                    
                </div>
    </div>
    <div  style={{display: "flex", flexDirection: "row", gap: "100px", backgroundColor:"white", color:"blue", border:"1px solid lightgray", padding:"0px 14px",width:"760px",margin:"10px 20px"}}>
               
                <div><RiMessage2Fill style={{color:"blue", fontSize: "25px",marginTop:"18px",}}/></div>
                <div>
                    <p style={{color:"black", fontSize: "14px",}}>Your lising 
                    <span style={{padding:"0px 15px",color:"blue"}}>Urban Appartmes</span> has been approved!<AiOutlineCalendar style={{padding:"0px 15px",color:"blue"}}/><span style={{padding:"0px 15px"}}>28 may 2020</span><AiFillCloseCircle style={{lineHeight:"12px", color:"blue", fontSize:"25px",}}/></p>
                    
                </div>
    </div>
    <div  style={{display: "flex", flexDirection: "row", gap: "100px", backgroundColor:"white", color:"blue", border:"1px solid lightgray", padding:"0px 14px",width:"760px",margin:"10px 20px"}}>
               
                <div><AiFillHeart style={{color:"blue", fontSize: "25px",marginTop:"18px",}}/></div>
                <div>
                    <p style={{color:"black", fontSize: "14px",}}>Your lising 
                    <span style={{padding:"0px 15px",color:"blue"}}>Urban Appartmes</span> has been approved!<AiOutlineCalendar style={{padding:"0px 15px",color:"blue"}}/><span style={{padding:"0px 15px"}}>28 may 2020</span><AiFillCloseCircle style={{lineHeight:"12px", color:"blue", fontSize:"25px",}}/></p>
                    
                </div>
    </div>

    </div>
  )
}


