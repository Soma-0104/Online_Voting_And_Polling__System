import React from 'react';

import UserService from '../Service/UserService';
import { addUserDetails } from '../Store/MasterSlice';
import { useEffect } from "react";
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from "react-redux";
import VoterPage from './VoterPage';
import VoterHomePage from './Vhome';

function VoterHome() {
    const dispatch = useDispatch();
    const { Emails } = useSelector((state) => state.master);
    const { Token } = useSelector((state) => state.master);
    useEffect(() => {
      getData();
    }, []);
  
    const getData = async () => {
      try {
        const response = await UserService.getUserByEmail(Emails, Token);
        console.log("response", " ", response.data);
        dispatch(addUserDetails(response.data));
      }
      catch (error) {
        console.log(error);
      }
    }
    const {user} = useSelector(state => state.master)
    return ( 
        <>
    <Box sx={{ display: 'flex' }}>
    <VoterHomePage/>
       </Box>
        </>
     );
}
export default VoterHome;