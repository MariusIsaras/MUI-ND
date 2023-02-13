import React from 'react'
import { Box, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, FormHelperText } from '@mui/material'
import { useState } from 'react'


export const MuiRadioButton = () => {
    const [value, setValue]=useState('')
    console.log({value})

    const handleChange= (event: React.ChangeEvent<HTMLInputElement>)=> {
        setValue(event.target.value)
    }
  return (
    <Box>
        <h2>Tutorial 9 Radio Button</h2>
        <FormControl error>
            <FormLabel id='job-experiance-group-label'>
                Year of xp
            </FormLabel>
            <RadioGroup name='job-experiance-group' 
            aroal-aria-labelledby='job-experiance-group-label'
            value={value}
            onChange={handleChange}
            row
            >
                <FormControlLabel control={<Radio size='medium' color='secondary'/>} label='0-2' value='0-2'/>
                <FormControlLabel control={<Radio/>} label='3-5' value='3-5'/>
                <FormControlLabel control={<Radio/>} label='6-10' value='6-10'/>
            </RadioGroup>
            <FormHelperText>Ivalidas</FormHelperText>
        </FormControl>
    </Box>
  )
}
