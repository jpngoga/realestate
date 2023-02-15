import React, { useEffect } from "react";
import { Outlet, useNavigate, NavLink } from "react-router-dom";
import {FaChartLine} from 'react-icons/fa'
import {BsPersonLinesFill} from 'react-icons/bs'
import {BsEnvelope} from 'react-icons/bs'
import {IoIosPeople} from 'react-icons/io'
import {ImBlogger2} from 'react-icons/im'
import {AiOutlineTable} from 'react-icons/ai'
import {BsJournalBookmark} from 'react-icons/bs'
import {MdPreview} from 'react-icons/md'

export const DashboardLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
  navigate("/dashboard/yourlistings");
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "row",
        
      }}
    >
      <div
        style={{
          height: "100%",
          width: "20%",
          position: "fixed",
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          alignItems: "center",
         
          justifyContent: "center",backgroundColor:"#FFF",
          
        }}
      >
      <div style={{borderBottom:"1px solid gray", width:"250px"}}>
        <p
          style={{
            fontSize: 16,
            fontWeight: "bold",paddingLeft:"75px",
            color:"lightgray"
          }}
        >
          MAIN
        </p>
        </div>
        <div style={{borderBottom:"1px solid gray", width:"250px"}}>
          <NavLink to="/dashboard/yourlistings" style={{textDecoration:"none"}}>
          <p style={{fontSize:14,paddingLeft:"75px",textDecoration:"none"}}> <span><FaChartLine style={{paddingRight:"5px",}}/></span>Dashboard</p>
          </NavLink>
        </div>
      
      <div style={{borderBottom:"1px solid gray", width:"250px"}}>
      <NavLink to="/dashboard/yourlistings" style={{textDecoration:"none"}}>
          <p style={{fontSize:14,paddingLeft:"75px"}}><BsPersonLinesFill style={{paddingRight:"5px",marginBottom:"-2%"}}/>Edit profile</p>
        </NavLink>
      </div>
     
      <div style={{borderBottom:"1px solid gray", width:"250px"}}>
        <NavLink to="/dashboard/yourlistings" style={{textDecoration:"none"}}>
          <p style={{fontSize:14,paddingLeft:"75px"}}><BsEnvelope style={{paddingRight:"5px",marginBottom:"-2%"}}/> Messages</p>
        </NavLink>
      </div>

        <div style={{borderBottom:"1px solid gray", width:"250px"}}>
        <NavLink to="/dashboard/yourlistings" style={{textDecoration:"none"}}>
          <p style={{fontSize:14,paddingLeft:"75px"}}><IoIosPeople style={{paddingRight:"5px",marginBottom:"-2%"}}/> Agents List</p>
        </NavLink>
        </div>

        <div style={{borderBottom:"1px solid gray", width:"250px"}}>
        <NavLink to="/dashboard/addBlogs" style={{textDecoration:"none"}}>
          <p style={{fontSize:14,paddingLeft:"75px"}}><ImBlogger2 style={{paddingRight:"5px",marginBottom:"-2%"}}/>Add blog</p>
        </NavLink>
        </div>
        
        <div style={{borderBottom:"1px solid gray", width:"250px"}}><p
          style={{
            fontSize: 16,
            fontWeight: "bold",paddingLeft:"75px",lineHeight:0,
            color:"lightgray"
          }}
        >
          LISTINGS
        
        </p></div>
        
        <div style={{borderBottom:"1px solid gray", width:"250px"}}>
        <NavLink to="/dashboard/mylisting" style={{textDecoration:"none"}}>
          <p style={{fontSize:14,paddingLeft:"75px"}}><AiOutlineTable style={{paddingRight:"5px",marginBottom:"-2%"}}/>My listing</p>
        </NavLink>
        </div>

        <div style={{borderBottom:"1px solid gray", width:"250px"}}>
        <NavLink to="/dashboard/" style={{textDecoration:"none"}}>
          <p style={{fontSize:14,paddingLeft:"75px"}}><BsJournalBookmark style={{paddingRight:"5px",marginBottom:"-2%"}}/>Bookings</p>
        </NavLink>
        </div>
        <div style={{borderBottom:"1px solid gray", width:"250px"}}>
        <NavLink to="/dashboard/"style={{textDecoration:"none"}}>
          <p style={{fontSize:14,paddingLeft:"75px"}}><MdPreview style={{paddingRight:"5px",marginBottom:"-2%"}}/>Reviews</p>
        </NavLink>
        </div>
        <div style={{borderBottom:"1px solid gray", width:"250px"}}>
        <NavLink to="dashboard/addNew"style={{textDecoration:"none"}}>
          <p style={{fontSize:14,paddingLeft:"75px"}}><AiOutlineTable style={{paddingRight:"5px",marginBottom:"-2%"}}/>addNew</p>
        </NavLink>
        </div>
      </div>
      <div
        style={{
          height: "100vh",
          width: "80%",
          marginLeft: "20%",
          backgroundColor:"#F5F7FB"
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};
