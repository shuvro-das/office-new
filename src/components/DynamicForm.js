import React, { useState } from "react";
import {
  Container,
  Paper,
  Box,
  Typography,
  Grid,
  TextField,
  IconButton,
  Button,
  MenuItem
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import DeleteOutlineIcon from '@mui/icons-material/';
import { DeleteOutline } from "@material-ui/icons";
import ReactHookFormSelect  from "./ReactHookFormSelect";
import Select from 'react-select'

const options = [
    { value: 'Developer', label: 'Developer' },
    { value: 'HR', label: 'HR' },
    { value: 'Sales', label: 'Sales' },
    { value: 'Staffing', label: 'Staffing' },
    { value: 'Trainee', label: 'Trainee' }
  ]
  const setName = [
    { value: 'set1', label: 'Set 1' },
    { value: 'set2', label: 'Set 2' },
   
  ]
  const setValue = [
    { value: 'set1', label: '70%' },
    { value: 'set2', label: '30%' },
   
  ]

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: theme.palette.grey[300],
    paddingTop: theme.spacing(5),
  },
  inputGroup: {
    marginBottom: theme.spacing(1),
  },
//   root: {
//     margin: "-1rem 0 2rem 0",
//     padding: "0 7rem",
//     [theme.breakpoints.down("xs")]: {
//       padding: "0"
//     },
//     [theme.breakpoints.down("md")]: {
//       padding: "0"
//     },
//     marginTop: "auto"
//   },
  textField: {
    width: "100%"
  },
  errorMessage: {
    color: "red",
    fontSize: "0.9rem",
    marginTop: "0.2rem"
  },
  select: {
    variant: "outlined"
  }
}));
// const target =5;

function DynamicForm() {
  const classes = useStyles();
  const KPIForm = { KPIName: "", Weightage: "", Target: "" };

  const [KpiTemplate, setKpiTemplate] = useState([KPIForm]);

  const addNewForm = () => {
    setKpiTemplate([...KpiTemplate, KPIForm]);
  };
//   calculation part weightage. 100 passed it will not create new form

  const 
  const onChange = (e, index) => {
    const UpdatedTemplates = KpiTemplate.map((user, i) =>
      index == i
        ? Object.assign(user, {[e.target.name]: e.target.value})
        : user
    );
    setKpiTemplate(UpdatedTemplates);
    console.log(KpiTemplate)
  };

  const removeForm = (index) => {
        const removedForms = [...KpiTemplate];
        removedForms.splice(index, 1)
        setKpiTemplate(removedForms)
  }
  const handleNewTable = (event) => {
    if (event.key === "Enter") {
      console.log("shuvro das")
    }
  };

  return (
    <div>
        <Container className={classes.root}>
        <Paper component={Box} p={4} mx="auto">
        <Grid
             container
             spacing={4}
            //  key={index}
             className={classes.inputGroup}
           >
             <Grid item sm={12} md={4}>
             <label>Select Diviion</label>
             <Select options={options} />
             </Grid>
             <Grid item sm={12} md={3}>
             <label>Set</label>
             <Select options={setName} />
             </Grid>
             <Grid item sm={12} md={3}>
                 <label>Percentage</label>
               <Select label="Target" options={setValue} />
             </Grid>
             
           </Grid>
        </Paper>
        <Paper component={Box} p={4} mx="auto">
          
          <Grid item xs={6}>
                {/* <ReactHookFormSelect
                  id="numero_prestacao"
                  name="numero_prestacao"
                  className={classes.textField}
                  label="Em quantas parcelas?"
                //   control={control}
                //   error={!!errors.numero_prestacao}
                //   defaultValue={numero_prestacao || ""}
                  variant="outlined"
                  margin="normal"
                >
                  <MenuItem value="">Escolha uma opção</MenuItem>
                  <MenuItem value="3">03 parcelas</MenuItem>
                  <MenuItem value="6">06 parcelas</MenuItem>
                  <MenuItem value="9">09 parcelas</MenuItem>
                  <MenuItem value="12">12 parcelas</MenuItem>
                  <MenuItem value="16">16 parcelas</MenuItem>
                  <MenuItem value="18">18 parcelas</MenuItem>
                </ReactHookFormSelect> */}
                {/* {errors.numero_prestacao && (
                  <p className={classes.errorMessage}>
                    {errors.numero_prestacao.message}
                  </p>
                )} */}
                
              </Grid>
            {KpiTemplate.map((Kpi, index) => (
              <Grid
                container
                spacing={4}
                key={index}
                className={classes.inputGroup}
              >
                <Grid item sm={12} md={4}>
                  <TextField
                    label="KPIName"
                    placeholder="Enter KPI Name"
                    variant="outlined"
                    name="KPIName"
                    value={KpiTemplate.KPIName}
                    onChange={(e) => onChange(e, index)}
                    fullWidth
                  />
                </Grid>
                <Grid item sm={12} md={3}>
                  <TextField
                    label="Weightage"
                    placeholder="Enter Weightage"
                    variant="outlined"
                    fullWidth
                    value={KpiTemplate.Weightage}
                    onChange={(e) => onChange(e, index)}
                    name="Weightage"
                  />
                </Grid>
                <Grid item sm={12} md={3}>
                  <TextField
                    label="Target"
                    placeholder="Enter Target"
                    variant="outlined"
                    name="Target"
                    value={KpiTemplate.Target}
                    onChange={(e) => onChange(e, index)}
                    fullWidth
                    // value={target}
                  />
                </Grid>
                <Grid item sm={12} md={2}>
                  <IconButton color="secondary" onClick={() => removeForm(index)}>
                    <DeleteOutline />
                  </IconButton>
                </Grid>
              </Grid>
            ))}
            <Button variant="contained" color="primary" onClick={addNewForm}>
              Add More KPI Name
            </Button>
          
          
          </Paper>
        </Container>
        {/* <Container className={classes.root}>
       
      
     </Container> */}
    </div>
  );
}

export default DynamicForm;



// https://stackoverflow.com/questions/60530892/react-loop-inputs-and-get-sum-value
