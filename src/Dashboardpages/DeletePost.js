import React from 'react'
import axios from 'axios';

export const DeletePost = (id)=> {

    const url=`https://francois.onrender.com/RealEstate/DeleteRealEstate/${id}`

    axios
        .delete(url)
        .then((response) =>{
            console.log(response);
            window.location.reload();
        })
        .catch((error) => console.error(error));
        console.log(url);
};


