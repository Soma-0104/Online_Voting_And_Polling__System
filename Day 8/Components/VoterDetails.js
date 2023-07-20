import React, {useState } from 'react';
import '../Styles/vpage.css'
import Sidebar1 from './Sidebar1';
function VoterPage(props){
    const [value, setValue]=useState([
        {name:"Voter 1",register_no:"727721EUIT152",department:"CSE",year:"3"},
        {name:"Voter 2",register_no:"727721EUIT126",department:"IT",year:"3"},
        {name:"Voter 3",register_no:"727721EUIT173",department:"AIDS",year:"3"},
    ])
    return(
        <Sidebar1>
        <div className="mainpage">
             <h1>Voter Details</h1>
        <center class="val">
            <table>
                <th>Name</th>
                <th>Register Number</th>
                <th>Year</th>
                {value.map((values)=><tr><td>{values.name}</td>
                <td>{values.register_no}</td>
                <td>{values.year}</td>
                </tr>)}
                    </table>
            </center>
        </div>
        </Sidebar1>
    );
}
export default VoterPage;