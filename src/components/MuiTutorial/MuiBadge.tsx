import React from 'react'
import { Stack, Badge } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'

const MuiBadge = () => {
  return (
    <Stack spacing={2} direction='row'>
        <h2>Tutorial 29 Badge</h2>
        <Badge badgeContent={5} color='primary'>
            <MailIcon/>
        </Badge>
        <Badge badgeContent={0} color='primary' showZero>
            <MailIcon/>
        </Badge>
        <Badge badgeContent={5} color='primary'>
            <MailIcon/>
        </Badge>
        <Badge badgeContent={500} color='primary' max={999}>
            <MailIcon/>
        </Badge>
        <Badge variant='dot' color='primary' >
            <MailIcon/>
        </Badge>
    </Stack>
  )
}

export default MuiBadge