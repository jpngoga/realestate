import React from 'react'
import './Create.css'
import {AiOutlineClose} from 'react-icons/ai'
import {useState} from 'react'



export const Create= () => {

  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setUserPassword] = useState("")
  
  // const [email, setEmail] = useState("")
  async function signUp(){
    let item= {userName, password, email}
    console.warn(item)
    
    let result= await fetch("https://odd-cyan-binturong-fez.cyclic.app/user/signup", {
      method: 'POST',
      body:JSON.stringify(item),
      headers:{
        "Content-Type":'application/json',
        "Accept":'application/json'
        
      }
    })
    result= result.json()
    // console.warn("result",result)
    localStorage.setItem("user-info",JSON.stringify(result))
  }
  
    return (
      <>
     
      <div className='create-wrapper'>
        <div className='create-container'>
        <div onClick={()=>{
            document.querySelector('.login-wrapper').style.display="none"
            document.querySelector('.create-wrapper').style.display="none"
            }}><AiOutlineClose style={{position: "relative", left: 250, top: -15}}         
          /></div>
          <h1>Create An Account</h1>
          <p>Don't have an account? Create your account, it takes less than a minute.</p>
          <label>Username</label>
          <input type={"text"} value={userName} onChange={(e)=>setUserName(e.target.value)} />
          <label>Email</label>
          <input type={"text"} value={email} onChange={(e)=>setEmail(e.target.value)}/>
        
       
        
          <div className='create-nameslast'>
          <>
          <label>Password</label>
          </>
          <label>Password Again</label>
          </div>
        
          <div className='create-inputnames'>
          <>
          <input style={{width: "60px"}} type={"password"} value={password} onChange={(e)=>setUserPassword(e.target.value)}/>
          </>
          <input style={{width: "60px"}} type={"password"} value={password}  onChange={(e)=>setUserPassword(e.target.value)}/>
          </div>
          <div>
              <button
                onClick={(event) => signUp(event)}
                style={{ backgroundColor: "#011640",color:"white",padding:"10px 20px",margin:"15px 70px", border:"none",borderRadius:"3px"}}
              >
                SIGN UP
              </button>
          </div>
        
        </div>
      </div>
      </>
    )
  
}
