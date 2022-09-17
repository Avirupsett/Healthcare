import React from 'react'
import './Form.css'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Symptoms from './Form Components/Symptoms';
import { Route, useRouteMatch } from 'react-router-dom';
import Disease from './Form Components/Disease';
import Medication from './Form Components/Medication';


const steps = [
    'Symptoms',
    'Prediction',
    'Precautions',
  ];

export default function Form() {
  const match = useRouteMatch({
    path: "/form/symptoms",
    strict: true,
    sensitive: true
});
const match2 = useRouteMatch({
  path: "/form/disease",
  strict: true,
  sensitive: true
});

  
  return (
    <div className='steppers' style={{marginTop:"-25px"}}>
       <Box sx={{ '& .MuiStepLabel-root .Mui-completed': {
            color: 'var(--first-color)', // circle color (COMPLETED)
            fontFamily:"SF Mono"
          },
          '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
            {
              color: 'rgb(34, 54, 69)', // Just text label (COMPLETED)
              fontFamily:"SF Mono",
              fontSize:window.innerWidth>700? "17px":"13px"
            },
          '& .MuiStepLabel-root .Mui-active': {
            color: 'var(--first-color)', // circle color (ACTIVE)
            fontFamily:"SF Mono"
          },
          '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
            {
              color: 'rgb(34, 54, 69)', // Just text label (ACTIVE)
              fontWeight:'bold',
              fontFamily:"SF Mono",
              fontSize:window.innerWidth>700? "17px":"13px"
            },
          '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
            fill: 'var(--white-color)', // circle's number (ACTIVE)
            fontFamily:"SF Mono"
          },
          '& .MuiStepLabel-label.Mui-disabled.MuiStepLabel-alternativeLabel':{
            fontFamily:"SF Mono",
            fontSize:window.innerWidth>700? "17px":"13px"
          }
          }}>
      <Stepper activeStep={match?0:match2?1:2} alternativeLabel style={{marginBottom:"-25px"}}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>     
      <Route exact path="/form/symptoms">
          <Symptoms/>
      </Route>
      <Route exact path="/form/disease">
          <Disease/>
      </Route>
      <Route exact path="/form/medication">
          <Medication/>
      </Route>
      
    </div>
  );
};

