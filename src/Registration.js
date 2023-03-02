import React from 'react'
import './Registration.css'
import {
  TextField,
  Button,
  Grid,
  FormGroup,
  // FormControl,
  Checkbox,
  Stack
} from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function Registration() {
  return (
    <></>
//     <div >
//       <Grid container spacing={2} >
//         <Grid item lg={6}>
//           <h3>Registration</h3>
//           <TextField
//             id="name"
//             label="Name"
//             variant="outlined"
//             placeholder="Enter Your Name"
//             fullWidth
//             margin="normal"
//             name="name"
//             onChange={handleAddFormChange}
//           />
//           <TextField
//             id="address"
//             label="Address"
//             multiline
//             rows={4}
//             variant="outlined"
//             placeholder="Enter Your Address"
//             fullWidth
//             margin="normal"
//             name="Address"
//             onChange={handleAddFormChange}
//           />
//           <TextField
//             id="email"
//             label="Email"
//             variant="outlined"
//             placeholder="Email"
//             fullWidth
//             margin="normal"
//             name="email"
//             onChange={handleAddFormChange}

//           />
//           <TextField
//             id="mobile"
//             label="Mobile"
//             variant="outlined"
//             placeholder="Mobile"
//             fullWidth
//             margin="normal"
//             name="mobile"
//             onChange={handleAddFormChange}

//           />
//           <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
//           <RadioGroup
//             row
//             aria-labelledby="demo-row-radio-buttons-group-label"
//             name="row-radio-buttons-group"
//             onChange={handleAddFormChange}
//           >
//           <FormControlLabel value="male" control={<Radio />} label="Male" />
//             <FormControlLabel value="female" control={<Radio />} label="Female" />
            
//           </RadioGroup>
//           <TextField
//             id="city"
//             label="city"
//             variant="outlined"
//             placeholder="city"
//             fullWidth
//             margin="normal"
//             name="city"
//             onChange={handleAddFormChange}
//           />
          
//           <FormGroup>
//           <FormControlLabel control={<Checkbox defaultChecked />} label="I agree to the company terms and policy" />
// </FormGroup>

//           <Stack directon="row" spacing={2}>
//             <Button color="success" variant="contained" >signup</Button>
//             <Button color="secondary" variant="contained">reset</Button>
            
//           </Stack>  
//           </Grid>
//       </Grid>
//     </div>
  )
}

export default Registration