import { useContext, useState } from "react";
import React from "react";
// import { MyContext } from './context/context';
export default function Details(props){
    // const{selectValue}=useContext(MyContext);
    return(
        <div>
            <div className="sub1">
                <div className="value">
                <table>
  <tr>
    <th>Name</th>
    <th>Department</th>
    <th>Year</th>
  </tr>
    <th>{props.value.name}</th>
    <th>{props.value.department}</th>
    <th>{props.value.year}</th>         
    </table>
                </div>
            </div>
            </div>
    )
}