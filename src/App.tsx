import React from 'react';
import router from './navigation/router';
import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import './App.css'


// import { MuiAccordion } from './components/MuiTutorial/MuiAccordion'
// import { MuiImageList } from './components/MuiTutorial/MuiImageList'
// import MuiLink from './components/MuiTutorial/MuiLink';
// import MuiBreadcrumbs from "./components/MuiTutorial/MuiBreadcrumbs"
// import MuiDrawer from './components/MuiTutorial/MuiDrawer';
// import MuiSpeedDial from './components/MuiTutorial/MuiSpeedDial';
// import MuiBottomNavigation from './components/MuiTutorial/MuiBottomNavigation';
// import MuiAvatar from './components/MuiTutorial/MuiAvatar';
// import { MuiNavbar } from './components/MuiTutorial/MuiNavbar'
// import { MuiCard } from './components/MuiTutorial/MuiCard'
// import { MuiLayout } from './components/MuiTutorial/MuiLayout'
// import { MuiSelect } from './components/MuiTutorial/MuiSelect'
// import { MuiButton } from './components/MuiTutorial/MuiButton'
// import { MuiTextField } from './components/MuiTutorial/MuiTextField'
// import { MuiTypography } from './components/MuiTutorial/MuiTypography'
// import { MuiRadioButton } from './components/MuiTutorial/MuiRadioButton'
// import { MuiCheckBox } from './components/MuiTutorial/MuiCheckBox'
// import { MuiSwitch } from './components/MuiTutorial/MuiSwitch'
// import { MuiRating } from './components/MuiTutorial/MuiRating'
// import { MuiAutocomplete } from './components/MuiTutorial/MuiAutocomplete'

// import MuiBadge from './components/MuiTutorial/MuiBadge';
// import MuiList from './components/MuiTutorial/MuiList';
// import MuiChip from './components/MuiTutorial/MuiChip';
// import MuiTooltip from './components/MuiTutorial/MuiTooltip';
// import MuiTable from './components/MuiTutorial/MuiTable';
// import MuiAlert from './components/MuiTutorial/MuiAlert';
// import MuiSnackbar from './components/MuiTutorial/MuiSnackbar';
// import MuiDialog from './components/MuiTutorial/MuiDialog';
// import MuiProgress from './components/MuiTutorial/MuiProgress';
import MuiSkeleton from './components/MuiTutorial/MuiSkeleton';

import { LocalizationProvider } from '@mui/lab';

import MuiLoadingButton from './components/MuiTutorial/MuiLoadingButton';
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import {MuiPicker} from './components/MuiTutorial/MuiPicker';
import MuiDateRangePicker from './components/MuiTutorial/MuiDateRangePicker';
import MuiTabs from './components/MuiTutorial/MuiTabs';
import MuiTimeline from './components/MuiTutorial/MuiTimeline';
import MuiMasonry from './components/MuiTutorial/MuiMasonry';
import MuiResponsivness from './components/MuiTutorial/MuiResponsivness';
import {createTheme, colors, ThemeProvider} from '@mui/material'

// function App() {
//   return (
//     <div className="App">
//       <RouterProvider router={router}/>

//     </div>
//   )
// }
const theme= createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    secondary: {
      main: colors.orange[500],
    },
    neutral: {
      main:colors.grey [500],
      darker: colors.grey[700],
    }
  },
})
const App = () => (
  <ThemeProvider theme={theme}>
  {/* <LocalizationProvider dateAdapter={AdapterDateFns}> */}
  <div>
  {/* <RouterProvider router={router} /> */}


  {/* <MuiTypography />
  <MuiButton />
  <MuiTextField/>
  <MuiSelect />
  <MuiRadioButton />
  <MuiCheckBox/>
  <MuiSwitch />
  <MuiRating />
  <MuiAutocomplete/>
  <MuiLayout />
  <MuiCard/>
  <MuiAccordion/>
  <MuiImageList/>
  <MuiNavbar />
  <MuiLink />
  <MuiBreadcrumbs />
  <MuiDrawer/>
  <MuiSpeedDial/>
  <MuiBottomNavigation/>
  <MuiAvatar/> */}

<MuiBadge/>
<MuiList/>
<MuiChip/>
<MuiTooltip/>
<MuiTable/>
<MuiAlert/>
<MuiSnackbar/>
<MuiDialog />
<MuiProgress />
<MuiSkeleton/>
 
<MuiLoadingButton/>
<MuiPicker/>
<MuiDateRangePicker/>
<MuiTabs/>
<MuiTimeline/>
<MuiMasonry/>
<MuiResponsivness/>

</div>
{/* </LocalizationProvider> */}
</ThemeProvider>
);

export default App
