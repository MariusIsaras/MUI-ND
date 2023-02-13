import React from 'react'
import { Stack } from '@mui/system'
import { TextField, InputAdornment } from '@mui/material'
import {useState} from 'react'

export const MuiTextField = () => {
    const [value, setValue] = useState('')
  return (
    <Stack spacing={4}>
        <h2>Tutorial 7 Text Field</h2>
        <Stack direction='row' spacing={2}>
           <TextField label='Name' variant='outlined'/>
           <TextField label='Name' variant='filled'/>
           <TextField label='Name' variant='standard'/>
        </Stack>
        <Stack direction='row' spacing={2}>
            <TextField label='Small secondary' size='small' color='secondary' />
        </Stack>
        <Stack direction='row' spacing={2}>
            <TextField label='Form Inpurt' required value={value} onChange={(e)=>setValue(e.target.value)} error={!value} 
            helperText={ !value ? 'Required': 'Do not share your passwod'}/>
            <TextField label='Password' type='password' helperText='do not share your password' disabled/>
            <TextField label='Read only' InputProps={{readOnly: true}} />

        </Stack>
        <Stack direction='row' spacing={2}>
            <TextField label='Amount' InputProps={{
                startAdornment: <InputAdornment position='start'>$</InputAdornment>,
            }}
            />
            <TextField label='Weight' InputProps={{
                endAdornment: <InputAdornment position='end'>kg</InputAdornment>,
            }}/>
        </Stack>
    </Stack>
  )
}
