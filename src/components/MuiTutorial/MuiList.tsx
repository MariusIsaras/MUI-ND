import React from 'react'
import {List, ListItem, ListItemText, ListItemIcon, ListItemAvatar, ListItemButton, Divider, Avatar, Box} from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'

const MuiList = () => {
  return (
    <Box sx={{width:'400px', bgcolor:'whitesmoke'}}>
        <h2>Tutorial 30 List</h2>
        <List>
            <ListItem disablePadding> 
                <ListItemButton>  
                <ListItemIcon>
                    <ListItemAvatar>
                        <Avatar><MailIcon/></Avatar>
                    </ListItemAvatar>
                </ListItemIcon>
                </ListItemButton>  
                <ListItemText primary='List item 1' secondary='Secondary text'></ListItemText>
            </ListItem>
            <Divider/>

            <ListItem>     
                <ListItemIcon>
                    <ListItemAvatar>
                        <Avatar><MailIcon/></Avatar>
                    </ListItemAvatar>
                </ListItemIcon>
                <ListItemText primary='List item 1' secondary='Secondary text'></ListItemText>
            </ListItem>
            <Divider/>

            <ListItem>     
                <ListItemIcon>
                    <ListItemAvatar>
                        <Avatar><MailIcon/></Avatar>
                    </ListItemAvatar>
                </ListItemIcon>
                <ListItemText primary='List item 1' secondary='Secondary text'></ListItemText>
            </ListItem>
            <Divider/>


            
            
        </List>
    </Box>
  )
}

export default MuiList