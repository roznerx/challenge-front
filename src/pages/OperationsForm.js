import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from '@material-ui/core/MenuItem';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const axios=require("axios") 


function OperationsForm() {

  const [operationTypes, setOperationTypes] = React.useState([]);  //OperationTypes = variable que va a ser modificada por la función setOperationTypes

  const [selectedOperationType, setSelectedOperationType] = React.useState(5);

  const [concept, setConcept] = React.useState("");

  const [ammount, setAmmount] = React.useState(0);

  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

 

  useEffect(() => {
    axios.get(
      "http://localhost:8000/api/getOperationTypes")
      .then(response => {
          console.log("response", response);
          let data = response.data.data;
          let mappedData = data.map(value => {return {ID: value.ID, TYPE: value.TYPE}});
          setOperationTypes(mappedData);
      })
      .catch(error => console.log("error", error))
    return () => {
      
    }
  }, [])


  const classes = useStyles();

  const handleChange = (event) => {
    console.log("event target value", event.target.value);
    setSelectedOperationType(event.target.value);
  };
  
  const clickSubmitButton = () => {
    console.log("Submit", concept);
    console.log("Submit", ammount);
    console.log("Submit", selectedDate);
    console.log("Submit", selectedOperationType);

    let data = {
      concept: concept,
      ammount: ammount,
      date: selectedDate,
      typeid: selectedOperationType  
      };

    axios.post(
      "http://localhost:8000/api/operation", data)
      .then(response => {
        console.log("response post", response)
      })
      .catch(error => console.log("error", error))
    
  }
  
  return <div>
    
<form className={classes.root} noValidate autoComplete="off">
  <TextField id="concept" 
             label="Insert Concept" 
             value={concept} 
             onChange={(event) => {setConcept(event.target.value)}}/>

  <TextField id="ammount" 
              label="Insert Ammount" 
              value={ammount}
              onChange={(event) => {setAmmount(event.target.value)}}/>

<MuiPickersUtilsProvider utils={DateFnsUtils}>
  <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Date picker inline"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
          </MuiPickersUtilsProvider>



  <TextField
          id="standard-select-ID"
          select
          label="Select"
          value={selectedOperationType}
          onChange={handleChange}
          helperText="Please select your operation type"
        >
          {operationTypes.map((option) => (
            <MenuItem key={option.ID} value={option.ID}>
              {option.TYPE}
            </MenuItem>
          ))}
        </TextField>

        <Button variant="contained" color="primary" onClick={clickSubmitButton}>
        Submit
      </Button>


</form>





  </div>
}
 
export default OperationsForm;

