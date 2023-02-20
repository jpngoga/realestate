import React, { useState } from "react";
import axios from "axios";
import "./addBlogs.css";

import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

export const AddBlogs = () => {
  const [province, setProvince] = useState("");
  const [district, setdistrict] = useState("");
  const [street, setstreet] = useState("");
  const [price, setprice] = useState("");
  const [beds, setbeds] = useState("");
  const [description, setdescription] = useState("");
  const [bath, setbath] = useState("");
  const [lotSize, setLotSize] = useState("");
  const [status, setStatus] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate()




  const handleAddBlog = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("province", province);
    formData.append("District", district);
    formData.append("street", street);
    formData.append("price", price);
    formData.append("beds", beds);
    formData.append("description", description);
    formData.append("bath", bath);
    formData.append("LotSize", lotSize);
    formData.append("status", status);
    formData.append("UploadImages", image);

    axios({
      method: "post",
      url: `https://francois.onrender.com/RealEstate/createEstate`,
      data: formData
    }).then((res) => {
      console.log(res);
      navigate("/dashboard/mylisting")
    }).catch((err)=>{
      console.log(err);
    })
    // fetch('https://francois.onrender.com/RealEstate/createEstate',{
    //   method: "POST",
    //   body: formData,
    // }).then((result)=>{
    //   console.log(result);

    //  })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  return (
    <div>
      <form className="addblogs-form">
        <div className="block-1">
          <label>Province</label>
          <label>District</label>
          <label>Street</label>
          <label>Price</label>
          <label>Beds</label>
          <label>description</label>
          <label>bath</label>
          <label>lotSize</label>
          <label>status</label>
          <label>Image</label>
        </div>

        <div className="block-2">
          <input type={"text"} onChange={(e) => setProvince(e.target.value)} />

          <input type={"text"} onChange={(e) => setdistrict(e.target.value)} />

          <input type={"text"} onChange={(e) => setstreet(e.target.value)} />

          <input type={"text"} onChange={(e) => setprice(e.target.value)} />

          <input type={"text"} onChange={(e) => setbeds(e.target.value)} />

          <input
            type={"text"}
            onChange={(e) => setdescription(e.target.value)}
          />

          <input type={"text"} onChange={(e) => setbath(e.target.value)} />

          <input type={"text"} onChange={(e) => setLotSize(e.target.value)} />

          <input type={"text"} onChange={(e) => setStatus(e.target.value)} />

          <input
            type={"file"}
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          />
          <button
            onClick={(e) => handleAddBlog(e)}
            style={{
              width: "125px",
              padding: "8px 10px",
              backgroundColor: " rgb(33, 34, 129)",
            }}
          >
            Handle
          </button>
        </div>
      </form>
    </div>
  );
};
