import React,{useState} from "react";
import {Grid, TextField, Typography , Paper, Button, IconButton } from '@material-ui/core/';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import useStyles from '../styles'
import emailjs from 'emailjs-com';
import axios from 'axios'
import FileCopyIcon from '@material-ui/icons/FileCopy';


function Form() {
const classes = useStyles();
const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
const handleDateChange = (date) => {
setSelectedDate(date);
};
const [inputValues, setInputValues] = useState({
  name : '',
  email : '',
  phone : '',
  dob: selectedDate,
  address : '',
  skills : '',
  file : ''
});
const handleInputChange = (event) =>{
  setInputValues({...inputValues,[event.target.name]: event.target.value})
}

const handleFileUpload = (event) => {
  setInputValues({ ...inputValues, file: event.target.files[0] });
};

const handleFormSubmit = (event) => {
  event.preventDefault(); 
//  Send Email on submit 
emailjs.sendForm('service_yejr9fd', 'template_88jmi74', event.target, 'user_nYHUsWESly75w7ANB3JGO')
.then((result) => {
    console.log(result.text);
}, (error) => {
    console.log(error.text);
});

const formData = new FormData();
formData.append('name', inputValues.name);
formData.append('email', inputValues.email);
formData.append('phone', inputValues.phone);
formData.append('dob', new Date(inputValues.dob).toISOString());
formData.append('address', inputValues.address);
formData.append('skills', inputValues.skills);
formData.append('file', inputValues.file);


axios.post('http://localhost:8000/contact', formData)
  .then(function (response) {
    //handle success
    console.log(response);
  })
  .catch(function (response) {
    //handle error
    console.log("error")
    console.log(response);
  });
}

return (
<div className="App">
<Paper className={classes.portalContainer} >
<Grid item lg = {12}>
<Typography align = "center" variant="h4" className={classes.heading}> </Typography>


<Grid item className={classes.formConatiner}>
<form className={classes.block} method = 'POST' action = '/contact' onSubmit = {handleFormSubmit} noValidate autoComplete="off">
  <Grid item  className={classes.inputField}>
      <TextField 
          onChange={handleInputChange}
          name = 'name'
          variant = "outlined" className={classes.inputConatiner} id="outlined-basic" label="Name" 
      />
  </Grid>
  <Grid item  className={classes.inputField}>
      <TextField 
          name = 'email'
          onChange={handleInputChange}
          variant = "outlined" className={classes.inputConatiner} id="outlined-basic" label="Email" 
      />
  </Grid>
  <Grid item  className={classes.inputField}>
      <TextField 
          name = 'phone'
          onChange={handleInputChange}
          variant = "outlined" className={classes.inputConatiner} id="outlined-basic" label="Phone" 
        />
  </Grid>
  <Grid item  className={classes.inputField}> 
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around">
              <KeyboardDatePicker
          disableToolbar
          className={classes.inputConatiner}
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date of Birth"
          name = 'dob'
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
          'aria-label': 'change date',
          }}
      />
      </Grid>
    </MuiPickersUtilsProvider>
  </Grid>
  <Grid item  className={classes.inputField}>
      <TextField 
          name = 'address'
          onChange={handleInputChange}
          
          variant = "outlined"  className={classes.inputConatiner} id="outlined-basic" label="Address" 
      />
      
  </Grid>
  <Grid item  className={classes.inputField}>
      <TextField 
          name = 'skills'
          onChange={handleInputChange}
          variant = "outlined" className={classes.inputConatiner} id="outlined-basic" label="Skills"  
      />
  </Grid>
              
<Grid item  className={classes.inputField}>
<Button  variant="outlined"  className={classes.buttonColorDownload}>
<a className={classes.link} href="/EmployeeInformationForm.pdf" download>Download form</a>
</Button>
<Grid item  className={classes.inputField}>
    <input name = 'file' className={classes.inputFile} id="icon-button-file" type="file" onChange={handleFileUpload}  />
    
</Grid>
<Button type = 'submit' size="large" className={classes.buttonColorSend} >Send</Button>
</Grid>
</form>
</Grid>
</Grid>
</Paper>

</div>
);
}

export default Form;
