import React from 'react'
import { Box, TextField } from '@mui/material'
import {DateRangePicker, DateRange} from '@mui/lab'
import {useState} from 'react'

const MuiDateRangePicker = () => {
    const [value, setValue] = useState<DateRange<Date>>([null, null])
    console.log({value})
  return (
    <Box width='500px'>
        <h2>Tutorial 41 Date range picker</h2>
        <DateRangePicker 
        startText= 'Check-in'
        endText='Check-out'
        value={value}
        onChange={(newValue)=> {setValue(newValue)}}
        renderInput={(startProps, endProps) => (
            <>
            <TextField {...startProps}/>
            <Box sx={{mx: 2}}>to</Box>
            <TextField {...startProps}/>
            
            </>
        )}
        />
    </Box>
  )
}

export default MuiDateRangePicker