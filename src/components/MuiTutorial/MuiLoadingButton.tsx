import React from 'react'
import { LoadingButton } from '@mui/lab'
import { Stack } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save'

const MuiLoadingButton = () => {
  return (
    <Stack spacing={2} direction='row'>
        <h2>Tutorial 39 Loading button</h2>
        <LoadingButton variant='outlined'>Submit</LoadingButton>
        <LoadingButton loading variant='outlined'>Submit</LoadingButton>
        <LoadingButton variant='outlined' loadingIndicator='Loading...'>Fetch Data</LoadingButton>
        <LoadingButton loading variant='outlined' loadingIndicator='Loading...'>Fetch Data</LoadingButton>

        <LoadingButton variant='outlined' loadingPosition='start' startIcon={<SaveIcon/>}>Save</LoadingButton>
        <LoadingButton loading variant='outlined' loadingPosition='start' startIcon={<SaveIcon/>}>Save</LoadingButton>
        
    </Stack>
  )
}

export default MuiLoadingButton