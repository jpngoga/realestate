import React from 'react'
import {RiRecordCircleFill} from 'react-icons/ri'
import {HiInformationCircle} from 'react-icons/hi'
import {RiUserLocationFill} from 'react-icons/ri'
import {CgBulb} from 'react-icons/cg'


export const AddNew=()=> {
  return (
    <div>
      <h1 style={{fontSize:"15px", padding:"20px", color:"#144273"}}>ADD LISTINGS</h1>
      <hr style={{margin:"0px 20px"}}/>
      <div style={{border:"1px solid whitesmoke",margin:"15px 20px", display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"space-between",backgroundColor:"white",lineHeight:0}}>
        <ul style={{display:"flex", flexDirection:"row",flexWrap:"wrap",gap:"20px",textDecoration:"none",listStyleType:"none",}}>
          <li style={{borderRight:"1px solid whitesmoke",padding:"4px 2px",color:"#3270FC",fontWeight:"bold", fontSize:"12px"}}>Info</li>
          <li style={{borderRight:"1px solid whitesmoke",padding:"4px 2px",color:"#3270FC",fontWeight:"bold", fontSize:"12px"}}>Location</li>
          <li style={{borderRight:"1px solid whitesmoke",padding:"4px 2px",color:"#3270FC",fontWeight:"bold", fontSize:"12px"}}>Media</li>
          <li style={{borderRight:"1px solid whitesmoke",padding:"4px 2px",color:"#3270FC",fontWeight:"bold", fontSize:"12px"}}>Details</li>
          <li style={{borderRight:"1px solid whitesmoke",padding:"4px 2px",color:"#3270FC",fontWeight:"bold", fontSize:"12px"}}>Rooms</li>
          <li style={{borderRight:"1px solid whitesmoke",padding:"4px 2px",color:"#3270FC",fontWeight:"bold", fontSize:"12px"}}>Plans</li>
          <li style={{borderRight:"1px solid whitesmoke",padding:"4px 2px",color:"#3270FC",fontWeight:"bold", fontSize:"12px"}}>Widgets</li>
          
        </ul>
        <div><RiRecordCircleFill style={{fontSize:20, margin:"15px 25px",color:"#3270FC"}}/></div>
        
      </div>
      <div style={{backgroundColor:"white",height:"260px",margin:"20px"}}>
        <div style={{display:"flex", flexDirection:"row", flexWrap:"wrap" , margin:"20px",backgroundColor:"white",borderBottom:"1px solid lightgray"}}>
              <div><HiInformationCircle style={{fontSize:20, margin:"15px 5px",color:"#3270FC",paddingLeft:"15px"}}/></div>
              <div><h5 style={{marginTop:"18px",color:"#3270FC"}}>Real Estate</h5></div>  

        </div>
        <div style={{display:"flex", flexDirection:"row",flexWrap:"wrap", gap:"300px", margin:"20px",fontSize:12, padding:"0px 20px"}}>
          <label>Listing Tile</label>
          <label>Type</label>
          <label>Listing Price</label>
        </div>

        <div style={{display:"flex", flexDirection:"row",flexWrap:"wrap", gap:"160px", margin:"20px",fontSize:12}}>
          <input type={"text"} placeholder="Name of your business" style={{padding:"10px 20px", backgroundColor:"#F5F7FB",border:"none"}}/>
          <select style={{padding:"10px 50px",backgroundColor:"#F5F7FB",border:"none"}}>
            <option value="">All Types</option>
            <option value="">Types</option>
          </select>
          <input type={"text"} placeholder="Listing Price" style={{padding:"10px 20px",backgroundColor:"#F5F7FB",border:"none"}}/>
          
        </div>

        <div style={{display:"flex", flexDirection:"row",flexWrap:"wrap", gap:"310px", margin:"20px",fontSize:12, padding:"0px 20px"}}>
          <label>Category</label>
          <label>Keywords</label>
        </div>

        <div style={{display:"flex", flexDirection:"row",flexWrap:"wrap", gap:"160px", margin:"20px",fontSize:12}}>
          <select style={{padding:"10px 53px",backgroundColor:"#F5F7FB",border:"none"}}>
            <option value="">All Categories</option>
            <option value="">Types</option>
          </select>
          <input type={"text"} placeholder="Maximum 15, should be separated by commas" style={{padding:"10px 188px", backgroundColor:"#F5F7FB",border:"none"}}/>

          
        </div>
        
      </div>
      <div style={{backgroundColor:"white",height:"260px",margin:"20px"}}>
        <div style={{display:"flex", flexDirection:"row", flexWrap:"wrap" , margin:"20px",backgroundColor:"white",borderBottom:"1px solid lightgray"}}>
              <div><RiUserLocationFill style={{fontSize:20, margin:"15px 5px",color:"#3270FC",paddingLeft:"15px"}}/></div>
              <div><h5 style={{marginTop:"18px",color:"#3270FC"}}>Location / Contacts</h5></div>  

      </div>

      <div style={{display:"flex", flexDirection:"row",flexWrap:"wrap", gap:"240px", margin:"20px",fontSize:12, padding:"0px 20px"}}>
          
          <label>Address</label>
          <label>Longitude (Drag makeron themap)</label>
          <label>Latitude (Drag makeron themap)</label>
          
      </div>

        <div style={{display:"flex", flexDirection:"row",flexWrap:"wrap", gap:"100px", margin:"20px",fontSize:12,}}>
        <div  style={{display:"flex", flexDirection:"row", flexWrap:"wrap"}}>
        <div><CgBulb style={{padding:"10px 10px",borderRight:"2px solidlight black",backgroundColor:"#F5F7FB",}}/></div>
        <input type={"text"} placeholder="Add your address" style={{padding:"10px 5px", border:"none",backgroundColor:"#F5F7FB"}}/>
        </div>
        <input type={"text"} placeholder="Add your address" style={{padding:"10px 20px", border:"none",backgroundColor:"#F5F7FB"}}/>
        <input type={"text"} placeholder="Add your address" style={{padding:"10px 20px", border:"none",backgroundColor:"#F5F7FB"}}/>
         
          
        </div>

        <div style={{display:"flex", flexDirection:"row",flexWrap:"wrap", gap:"260px", margin:"20px",fontSize:12, padding:"0px 20px"}}>
          <label>Category</label>
          <label>Keywords</label>
        </div>

        <div style={{display:"flex", flexDirection:"row",flexWrap:"wrap", gap:"100px", margin:"20px",fontSize:12}}>
          <input type={"text"} placeholder="Name of your business" style={{padding:"10px 20px", backgroundColor:"#F5F7FB",border:"none"}}/>
          <select style={{padding:"10px 190px",backgroundColor:"#F5F7FB",border:"none"}}>
            <option value="">All Categories</option>
            <option value="">Types</option>
          </select>
          
        </div>
        
      </div>
      
        
    
        
      

      
    </div>
  )
}
