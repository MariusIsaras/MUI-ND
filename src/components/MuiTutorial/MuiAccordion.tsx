import React from 'react'
import{Accordion, AccordionSummary, AccordionDetails, Typography} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useState } from 'react'


export const MuiAccordion = () => {
    const [expanded, setExpanded] = useState<string | false>(false)
    const handleChange = (isExpanded: boolean, panel:string)=>{
        setExpanded(isExpanded ? panel : false)
    }
  return (
    <div>
        <h2>Tutorial 19 Accordion</h2>
        <Accordion
         expanded={expanded === 'panel1'} 
         onChange={(event, isExpanded)=> handleChange(isExpanded, 'Panel1')}>
        <AccordionSummary 
        id='panel-header'
        aria-controls='panel1-content'
        expandIcon={<ExpandMoreIcon/>}
        >
            <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, tenetur! Error culpa dicta totam sapiente laboriosam voluptatem praesentium sunt sint officiis fuga, tenetur placeat minima est neque? Iusto, consequuntur libero.
            </Typography>
        </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel2'} onChange={(event, isExpanded)=> handleChange(isExpanded, 'Panel2')}>
        <AccordionSummary 
        id='panel-deader'
        aria-controls='panel-content'
        expandIcon={<ExpandMoreIcon/>}
        >
            <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, tenetur! Error culpa dicta totam sapiente laboriosam voluptatem praesentium sunt sint officiis fuga, tenetur placeat minima est neque? Iusto, consequuntur libero.
            </Typography>
        </AccordionDetails>
        </Accordion >

        <Accordion expanded={expanded === 'panel3'} onChange={(event, isExpanded)=> handleChange(isExpanded, 'Panel3')}>
        <AccordionSummary 
        id='panel-deader'
        aria-controls='panel-content'
        expandIcon={<ExpandMoreIcon/>}
        >
            <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, tenetur! Error culpa dicta totam sapiente laboriosam voluptatem praesentium sunt sint officiis fuga, tenetur placeat minima est neque? Iusto, consequuntur libero.
            </Typography>
        </AccordionDetails>
        </Accordion>
        </div>
  )
}
