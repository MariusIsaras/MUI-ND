import React from 'react'
import {Stack, TextField} from '@mui/material'
import {DatePicker, TimePicker, DateTimePicker} from '@mui/lab'
import {useState} from 'react'

export const MuiPicker = () => {
    const [selectedDate, setSelectedDate]= useState<Date | null>(null)
    const [selectedTime, setSelectedTime]= useState<Date | null>(null)
    const [selectedDateTime, setSelectedDateTime]= useState<Date | null>(null)
    // console.log({selectedTime: selectedTime && selectedTime.toLocaleTimeString(),})
    console.log({selectedDateTime,})
  return (
    <Stack spacing={4} sx={{width: '250px'}}>
        <h2>Tutorial 40 Date and Time Picker</h2>
        <DatePicker 
        label='Date Picker'
        renderInput={params => <TextField {...params} />}
        value={selectedDate}
        onChange={newValue => {setSelectedDate(newValue)}}
        />
        <TimePicker 
        label='Time Picker'
        renderInput={(params) => <TextField {...params} />}
        value={selectedTime}
        onChange={(newValue) => {setSelectedTime(newValue)}}
        />
        <DateTimePicker 
        label='Date Time Picker'
        renderInput={(params) => <TextField {...params} />}
        value={selectedDateTime}
        onChange={(newValue) => {setSelectedDateTime(newValue)}}
        />
    </Stack>
  )
}

export default MuiPicker