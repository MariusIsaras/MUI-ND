import React from 'react'
import { Drawer, Box, IconButton, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'


const MuiDrawer = () => {
    const [isDrawerOpen, setIsDrawerOpen]=useState(false)
  return (
    <>
    <h2>Tutorial 25 Drawer</h2>
    <IconButton size='large' edge='start' color='inherit' aria-label='logo' onClick={()=> setIsDrawerOpen(true)}>
        <MenuIcon />
    </IconButton>
    <Drawer anchor='left'
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}>
        <Box p={2} width='250px' textAlign='center' role='presentation'>
            <Typography variant='h6' component='div'>
                Side panel
            </Typography>
        </Box>
    </Drawer>
    </>
  )
}

export default MuiDrawer