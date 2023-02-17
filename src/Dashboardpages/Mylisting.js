import React from "react";
import {AiOutlineSearch} from 'react-icons/ai'
// import {AiFillEye} from 'react-icons/ai'
// import {FiEdit} from 'react-icons/fi'
// import {MdLocationOn} from 'react-icons/md'
// import {GiNetworkBars} from 'react-icons/gi'
// import {RiDeleteBin6Line} from 'react-icons/ri'
// import {RiStarSFill} from 'react-icons/ri'
import axios from 'axios'
import MyListCard from '../Dashboardpages/MyListCard'
import { useEffect, useState } from "react";

export const Mylisting=()=>{

   
    const [blogs, setBlogs] = useState([]);

    useEffect(() =>{
        fetchData();
    }, []);

  

    const fetchData=  () => {
        axios({
            method: "GET",
            url: 'https://francois.onrender.com/RealEstate/All',
            // url: "https://newsapi.org/v2/everything?q=Apple&from=2023-02-03&sortBy=popularity&apiKey=48262bd238ea4e2f8885d992905f5474",
            // url: "https://newsapi.org/v2/top-headlines?country=us&apiKey=48262bd238ea4e2f8885d992905f5474",

        }).then((response) => {
            setBlogs(response.data);
        }).catch((error) =>{
            console.log(error);
        });
        
    };

    
    return(
        <div style={{backgroundColor:"#F5F7FB",height:"100vh"}}>
        
            <h1 style={{fontSize:"15px", padding:"20px", color:"#144273"}}>YOUR LISTINGS</h1>
            
            <hr style={{color:"lightgray",margin:"0px 20px"}}></hr>
            <br/>

            <div>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                    <div><input type={"text"} placeholder="Search" style={{padding:"8px 58px",margin:"0px 20px",borderRadius:"4px",border:"none",justifyContent:"left",fontSize:"12px"}}/><AiOutlineSearch style={{marginLeft:"-14.5%",fontSize:"20px",marginBottom:"-8px",color:"lightblue"}}/></div>
                    
                    <div style={{margin:"0px 20px"}}>
                    <label  style={{padding:"0px 5px",fontSize:"12px"}}>sort by:</label>
                    <select name="cities" placeholder="Lastes" style={{padding:"8px 20px",border:"none"}}>
                        <option value={"lastes"}>Lastes</option>
                        <option value={"lastes"}>lastes</option>
                        <option value={"lastes"}>lastes</option>
                       
                       
                    </select>
                    
                    <button style={{padding:"8px 20px",margin:"0px 20px",backgroundColor:"rgb(50,112,252)",border:"none", color:"white"}}>Add New</button>
                    </div>
                </div>
            </div>
            {/* <div style={{
                display:"flex",
                flexDirection:"row",
                flexWrap:"wrap",
                gap:"20px",
                width:"460px",
                backgroundColor:"white",
                margin:"10px 20px"
            }}>
                <div style={{margin:"20px"}}>
                    <img src="https://homeradar.kwst.net/images/all/3.jpg" alt="not_found"style={{width:"150px"}}/>
                </div>
                <div>
                    <h4 style={{fontSize:"14px", lineHeight:1}}>Gorgeous House For Sale</h4>
                    <p style={{fontSize:"12px", lineHeight:1, color:"#144273",fontWeight:"bold"}}><MdLocationOn style={{color:"blue"}}/> 70 Bright St New York, USA
</p>
                    <p>
                    <RiStarSFill style={{color:"#fad505",fontSize:"16px", margin:"0px 15px",marginTop:"6%"}}/>
                    <RiStarSFill style={{color:"#fad505",fontSize:"16px", margin:"0px 15px",marginTop:"6%"}}/>
                    <RiStarSFill style={{color:"#fad505",fontSize:"16px", margin:"0px 15px",marginTop:"6%"}}/>
                    <RiStarSFill style={{color:"#fad505",fontSize:"16px", margin:"0px 15px",marginTop:"6%"}}/>
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
            </div> */}
            <div style={{display:"flex", flexDirection:"row",flexWrap:"wrap",gap:"2px", }} >
                {/* <MyListCard 
                    title="Gorgeous House For Sale"
                    info=" 70 Bright St New York, USA"
                /> */}
                <MyListCard 
                    title="Gorgeous House For Sale"
                    info=" 70 Bright St okklahoma, USA"
                />
                <MyListCard 
                    title="Gorgeous House For Sale"
                    info=" 70 Bright St New York, USA"
                />
                <MyListCard 
                    title="Gorgeous House For Sale"
                    info=" 40 rollway St Nevada, USA"
                />
                <MyListCard 
                    title="Gorgeous House For Sale"
                    info=" 32 Bowsman St Chocago, USA"
                />
                <MyListCard 
                    title="Gorgeous House For Sale"
                    info=" 56 southgate St DC washongton, USA"
                />
                
                {blogs.map((item) => {
                
                 <MyListCard
                    // urlImg={item.urlToImage}
                    title={item.title}
                    info={item.description}
                    />

               
    
            }
        )}
                
           
                
                
            </div>
          
            
        </div>
        
    )
}