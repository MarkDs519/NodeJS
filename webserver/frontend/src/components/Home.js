import React from "react";
import { Link } from "react-router-dom";
import { TextField } from "@material-ui/core";

const Home = ({data, test}) => {
    return(
        
        <ul>
            <TextField name="email" id="email" label="email" variant="outlined" fullWidth onChange={(e) => test(e)}/>
            <Link to="/">Go back to Log In</Link>
        </ul>
    
        
    )
}

export default Home;