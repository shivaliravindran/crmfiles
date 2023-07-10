import React, {useState} from "react";
import Axios from "axios";
import {UpdateInvoice} from "./UpdateInvoice";

function StudentTableRow(props)
{
    // const handleUpdate = () => {
    //     props.onUpdate(_id); // Call the onUpdate function passed from the parent component
    //   };
    const handleDelete = () => {
        const url = "http://localhost:4500/crm/delete-invoice/" + _id;
        Axios.delete(url)
        .then((res)=>{
            if(res.status === 200)
            {
                alert("Record deleted successfully..");
                window.location.reload();
            }
            else{
                Promise.reject();
            }
        })

        .catch((err)=>alert(err));
    }
    const {_id, client,dat,expire,total,price,stat,qty} = props.obj; 
    return(
        
            <tr>
              <td>{client}</td>
              <td>{dat}</td>
              <td>{expire}</td>
              <td>{total}</td>
              <td>{price}</td>
              <td>{stat}</td>
              <td>{qty}</td>
              
              <td>
              <a href={`./edit-invoice/${_id}`}><button class="btn btn-sm btn-success m-1">Edit</button></a>
              <button onClick={handleDelete} class="btn btn-sm btn-danger m-1">Delete</button>
                </td>
            </tr>
        
    )
}
export default StudentTableRow;