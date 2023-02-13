import React from 'react'
import { Stack, Link, Typography } from '@mui/material'
// import { Link } from 'react-router-dom'



const MuiLink = () => {
  return (
    
    <Stack spacing={2}
    direction='row'
    m={4}>
        <h2>Tutorial 23 Link</h2>

        <Link href='#' variant='body2'>Link</Link>
        <Typography variant='h6'>
        <Link href='#' color='secondary' underline='none'>Link</Link>
        </Typography>
    </Stack>
  )
}

export default MuiLink