import React from 'react'
import { Box } from '@mui/system'
import { FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup, FormHelperText } from '@mui/material'
import { useState } from 'react'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';


export const MuiCheckBox = () => {
    const [acceptTnC, setAcceptTnC] = useState(false)
    const [skills, setSkillls] = useState<string[]>([])
    console.log({skills})
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
        setAcceptTnC(event.target.checked)
    }
    const handleSkillChange=(event: React.ChangeEvent<HTMLInputElement>)=>{
        const index = skills.indexOf(event.target.value)
        if (index=== -1){
            setSkillls([...skills, event.target.value])
        } else {
            setSkillls(skills.filter((skill)=> skill !== event.target.value))
        }
    }
  return (
    <Box >
        <h2>Tutorial 10 Checkbox</h2>
        <Box>
            <FormControlLabel label='I accept terms and conditions' control={<Checkbox size='small' color='secondary' checked={acceptTnC} onChange={handleChange}/>}/>
        </Box>
        <Box>
            <Checkbox 
            icon={<BookmarkBorderIcon />}
            checkedIcon={<BookmarkIcon />}
            checked={acceptTnC}
            onChange={handleChange}
            />
        </Box>
        <Box>
            <FormControl error>
                <FormLabel >Skills</FormLabel>
                <FormGroup row>
                <FormControlLabel label='HTML' control={<Checkbox value='html' checked={skills.includes('html')} onChange={handleSkillChange}/>}/>
                <FormControlLabel label='CSS' control={<Checkbox value='css' checked={skills.includes('css')} onChange={handleSkillChange}/>}/>
                <FormControlLabel label='JS' control={<Checkbox value='JS' checked={skills.includes('JS')} onChange={handleSkillChange}/>}/>

                </FormGroup>
                <FormHelperText >Invalidas</FormHelperText>

            </FormControl>
        </Box>
    </Box>
  )
}
