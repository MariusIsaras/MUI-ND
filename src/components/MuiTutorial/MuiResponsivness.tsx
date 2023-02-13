import React from 'react'
import { Box, Typography, styled } from '@mui/material'
import { Masonry} from '@mui/lab'


const StyledBox = styled(Box)(({ theme}) => ({
  height:' 250px',
  width: '250px',
  backgroundColor: theme.palette.neutral?.darker,
}))

const MuiResponsivness = () => {
  return (
    <>
    <h2>Tutorial 45 Responsivness</h2>
    <Box sx={{
      height:'300px',
      width: {
      xs: 200,
      sm:300, 
      md: 400,
      lg: 500,
      xl:600
      },
      bgcolor: 'secondary.dark',}}>
        
        
    </Box>
    <h2>Tutorial 46 Customizing Theme</h2>
    <StyledBox />
    </>
  )
}

export default MuiResponsivness