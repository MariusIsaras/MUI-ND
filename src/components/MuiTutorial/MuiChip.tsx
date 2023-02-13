import React from 'react'
import { Stack, Chip, Avatar } from '@mui/material'
import FaceIcon from '@mui/icons-material/Face'
import { useState } from 'react'


const MuiChip = () => {
    const [chips, setChips]=useState(['Chip 1','Chip 2','Chip 3'])
    const handleDelete= (chipToDelete: string)=>{
        setChips((chips)=> chips.filter((chip)=> chip !==chipToDelete))
    }
  return (
    <Stack direction='row' spacing={1}>
        <h2>Tutorial 31 Chip</h2>
    <Chip label='chip' color='primary' size='small' icon={<FaceIcon/>}></Chip>
    <Chip label='chip outlined' color='secondary' size='small' variant='outlined' avatar={<Avatar>M</Avatar>}></Chip>
    <Chip label='Click' color='success' onClick={()=> alert('Clicked')}></Chip>
    <Chip label='Delete' color='error' onClick={()=> alert('Clicked')} onDelete={()=> alert('Delete handler called')}></Chip>
{
    chips.map((chip) => (
        <Chip key={chip} label={chip} onDelete={()=> handleDelete(chip)}/>
    )
    )
}
    </Stack>
  )
}

export default MuiChip