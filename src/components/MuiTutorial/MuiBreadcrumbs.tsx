import React from 'react'
import { Box, Breadcrumbs, Link, Typography } from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'


const MuiBreadcrumbs = () => {
  return (
    <Box m={2} >
        <h2>Tutorial 24 Breadcrumbs</h2>
        <Breadcrumbs arial-label='breadcrumbs'
        separator={<NavigateNextIcon fontSize='small'/>}
        maxItems={3}
        itemsAfterCollapse={2}>
        <Link underline='hover' href='#'>Home</Link>
        <Link underline='hover' href='#'>Home</Link>
        <Link underline='hover' href='#'>Home</Link>
        <Typography color='text.primary'>Shoes</Typography>
        </Breadcrumbs>
    </Box>

  )
}

export default MuiBreadcrumbs