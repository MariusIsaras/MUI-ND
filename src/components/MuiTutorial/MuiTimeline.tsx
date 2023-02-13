import React from 'react'
import {Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent} from '@mui/lab'


const MuiTimeline = () => {
  return (
    <Timeline position='left'>
        <h2> Tutorial 43 Timeline</h2>
        <TimelineItem>
            <TimelineOppositeContent color='text.secondary'>
                09:30
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot color='secondary' variant='outlined'/>
                <TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent>
                City A
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
        <TimelineOppositeContent color='text.secondary'>
                10:00
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot/>
                <TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent>
                City B
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
        <TimelineOppositeContent color='text.secondary'>
                10:30
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot/>
            </TimelineSeparator>
            <TimelineContent>
                City C
            </TimelineContent>
        </TimelineItem>
    </Timeline>
  )
}

export default MuiTimeline