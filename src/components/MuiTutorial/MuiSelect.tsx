import React from 'react'
// import { Box} from '@mui/system'
import { Box, TextField, MenuItem } from '@mui/material'
import { useState } from 'react'

export const MuiSelect = () => {
    const [countries, setCountries]= useState<string[]>([])
    console.log({countries})
    const handleChange= (event: React.ChangeEvent<HTMLInputElement>)=>{
        const value=event.target.value
        setCountries(typeof value ==='string' ? value.split(','):value)
    }
  return (
    <Box width='250px'>
        <h2>Tutorial 8 Select</h2>
        <TextField 
        label='Select country' 
        select 
        value={countries} 
        onChange={handleChange}
        fullWidth
        SelectProps={{
            multiple: true,
        }}
        size='small'
        color='secondary'
        helperText='Select country'
        error
        >
            <MenuItem value='LT'>Lithuania</MenuItem>
            <MenuItem value='US'>USA</MenuItem>
            <MenuItem value='RU'>Russia</MenuItem>
        </TextField>

    </Box>
  )
}
