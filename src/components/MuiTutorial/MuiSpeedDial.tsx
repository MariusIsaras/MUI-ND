import React from 'react'
import { SpeedDial, SpeedDialAction, SpeedDialIcon} from '@mui/material'
import CopyIcon from '@mui/icons-material/FileCopyOutlined'
import PrintIcon from '@mui/icons-material/Print'
import ShareIcon from '@mui/icons-material/Share'
import EditIcon from '@mui/icons-material/Edit'


const MuiSpeedDial = () => {
  return (
    <>
    <h2>Tutorial 26 Speed Dial</h2>
    <SpeedDial
    ariaLabel='Navigation speeddial'
    sx={{position:'absolute', bottom: 16, right:16 }}
    icon={<SpeedDialIcon openIcon={<EditIcon/>}/>}>
    <SpeedDialAction icon={<CopyIcon />} tooltipTitle='Copy' tooltipOpen/>
    <SpeedDialAction icon={<PrintIcon />} tooltipTitle='Print' tooltipOpen/>
    <SpeedDialAction icon={<ShareIcon />} tooltipTitle='Share' tooltipOpen/>
    </SpeedDial>
    </>
  )
}

export default MuiSpeedDial