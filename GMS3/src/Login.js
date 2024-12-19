import {useState} from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";


export default function Login() {
  const navigate=useNavigate();
  const [userData,setUserData]=useState({

    email:"",
    password:""

  })
  const handleChange=({target: {name,value}})=>{
    let updatedData = {...userData}
    updatedData[name] = value;
    setUserData(updatedData)
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(userData.email === "abc@gmail.com" && userData.password==="admin@123"){
      //alert("Login Successful!");
      localStorage.setItem("token",12345);
      navigate("/dashboard");
      window.location.reload();
    }else{
      alert("Wrong Credentials!");
    }
  }

    return (
      <form onSubmit={handleSubmit}>
      <Box sx={{ width: '100%', maxWidth: 500, background: "white", 
        padding: 10, borderRadius: 10
      }}>
        <Typography variant="h1" color="primary" fontSize={30} gutterBottom>
          Login
        </Typography>
        
        <TextField
          required
          id="outlined-required"
          label="Email"
          defaultValue=""
          type='email'
          fullWidth
          sx={{margin:1}}
          name="email"
          onChange={handleChange}
        />
        <TextField
          required
          id="outlined-required"
          label="Password"
          defaultValue=""
          type='password'
          fullWidth
          sx={{margin:1}}
          name="password"
          onChange={handleChange}
        />
        <Button variant="contained" type="submit" sx={{margin:1}} fullWidth>Login</Button>
        </Box>
        </form>
    );
}