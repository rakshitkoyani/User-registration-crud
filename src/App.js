import './App.css';
import React,{useState} from 'react';
// import Registration from './Registration';
import UserDetails from './UserDetails';
import data from "./data.json"

import {
  TextField,
  Button,
  Grid,
  FormGroup,

  Checkbox,
  Stack
} from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


export default function App() {
  const  [contacts, setContacts ] = useState(data);
  const [addFormData, setAddFormData]= useState({
    fullName:"",
    address:"",
    email:"",
    mobile:"",
    gender:"",
    city:"",
  })
// export function handleAddFormChange(event){
const handleAddFormChange=(event)=>{
    event.preventDefault();
    const fieldName=event.target.getAttribute('name');
    const fieldValue=event.target.value;

    const newFormData={...addFormData};
    newFormData[fieldName]=fieldValue;

    setAddFormData(newFormData);
  
  return (
    <div className="App">
      User Details
Searchbar
add new entry
      <table>
        <thead>
        <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Address</th>
        <th>Email</th>
        <th>Mobile</th>
        <th>Gender</th>
        <th>City</th>
        <th>Action</th>
        </tr>
        </thead>
        <tbody>
        {contacts.map((contact)=>(
        <tr>
        <td>{contact.fullName}</td>
        <td>{contact.fullName}</td>
        <td>{contact.address}</td>
        <td>{contact.email}</td>
        <td>{contact.mobile}</td>
        <td>{contact.gender}</td>
        <td>{contact.city}</td>
        <td></td>
        </tr>
          ))}
        
        
        <tr>
        <td>2</td>
        <td>dev</td>
        <td>address2</td>
        <td>dev@gmail.com</td>
        <td>1234567890</td>
        <td>Male</td>
        <td>Rajkot</td>
        <td>edit and delete</td>
        </tr>
        </tbody>
      </table>
      <UserDetails></UserDetails>
      <Grid container spacing={2} >
      <Grid item lg={6}>
        <h3>Registration</h3>
        <TextField
          id="name"
          label="Name"
          variant="outlined"
          placeholder="Enter Your Name"
          fullWidth
          margin="normal"
          name="name"
          onChange={handleAddFormChange}
        />
        <TextField
          id="address"
          label="Address"
          multiline
          rows={4}
          variant="outlined"
          placeholder="Enter Your Address"
          fullWidth
          margin="normal"
          name="Address"
          onChange={handleAddFormChange}
        />
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          placeholder="Email"
          fullWidth
          margin="normal"
          name="email"
          onChange={handleAddFormChange}

        />
        <TextField
          id="mobile"
          label="Mobile"
          variant="outlined"
          placeholder="Mobile"
          fullWidth
          margin="normal"
          name="mobile"
          onChange={handleAddFormChange}

        />
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          onChange={handleAddFormChange}
        >
        <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          
        </RadioGroup>
        <TextField
          id="city"
          label="city"
          variant="outlined"
          placeholder="city"
          fullWidth
          margin="normal"
          name="city"
          onChange={handleAddFormChange}
        />
        
        <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked />} label="I agree to the company terms and policy" />
</FormGroup>

        <Stack directon="row" spacing={2}>
          <Button color="success" variant="contained" >signup</Button>
          <Button color="secondary" variant="contained">reset</Button>
          
        </Stack>  
        </Grid>
    </Grid>
      
    </div>
  );
}
}
