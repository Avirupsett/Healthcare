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
    'Step 1',
    'Step 2',
    'Step 3',
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
    <div className='steppers' style={{marginTop:window.innerWidth>800?"-20px":"-15px"}}>
       <Box sx={{ '& .MuiStepLabel-root .Mui-completed': {
            color: 'var(--first-color)', // circle color (COMPLETED)
            fontFamily:"SF Mono",
          },
          '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
            {
              color: 'rgb(34, 54, 69)', // Just text label (COMPLETED)
              fontFamily:"SF Mono",
              fontSize:window.innerWidth>700? "16px":"13px",
              visibility:window.innerWidth>800? "visible":"hidden"
            },
          '& .MuiStepLabel-root .Mui-active': {
            color: 'var(--first-color)', // circle color (ACTIVE)
            fontFamily:"SF Mono"
          },
          '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
            {
              color: 'rgba(34, 54, 69, 0.8)', // Just text label (ACTIVE)
              fontWeight:'bold',
              fontFamily:"SF Mono",
              fontSize:window.innerWidth>700? "18px":"14px",
              visibility:window.innerWidth>800? "visible":"hidden"
            },
          '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
            fill: 'var(--white-color)', // circle's number (ACTIVE)
            fontFamily:"SF Mono"
          },
          '& .MuiStepLabel-label.Mui-disabled.MuiStepLabel-alternativeLabel':{
            fontFamily:"SF Mono",
            fontSize:window.innerWidth>700? "16px":"13px",
            visibility:window.innerWidth>800? "visible":"hidden"
          }
          }}>
      <Stepper activeStep={match?0:match2?1:2} alternativeLabel style={{marginBottom:window.innerWidth>800?"-25px":"-40px"}}>
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

