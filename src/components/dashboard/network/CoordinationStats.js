import { Card, CardContent, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import styled from '@emotion/styled';
import { Box } from '@mui/system';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 5,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));

function CoordinationStats({ tweets, sharing_users, total_likes, reach, scores }) {
  const summaryDisplay = [
    [tweets, "Tweets"],
    [sharing_users, "Sharing users"],
    [total_likes, "Total likes"],
    [reach, "Reach"],
  ]
  const progressDisplay = [
    [scores[0], "Coordinated users (%)"],
    [scores[3], "Users that shared in coordination otherwise (%)"],
    [scores[4], "URLs these users shared, were shared in coordination (%)"],
    [scores[1], "Likelihood of coordination given the users' past behaviour"],
    [scores[2], "Likelihood that exactly these users act in coordination"],
  ]
  return (
    <Card raised sx={{mb: 4, width: '100%'}}>
      <CardContent>
        <Typography variant="h5" gutterBottom>Statistics</Typography>
        <Grid container>
          {
            summaryDisplay.map((item, idx) => (
            <Grid item xs={3} key={idx}>
              <Typography variant="h6">{item[0]}</Typography>
              <Typography variant="body1">{item[1]}</Typography>
            </Grid>
            ))
          }
        </Grid>
        <Divider sx={{height: "1px", backgroundColor: 'divider', width: '100%', my:1}}/>
        <Grid container>
          {
            progressDisplay.map((item, idx) => (
              <Grid item xs={12} key={idx} sx={{pb: 1}}>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <Typography variant='body2' component="span">{item[1]}</Typography>
                  <Typography variant='body2' component="span">
                    {(item[0]*100)%1>0.5?Math.ceil(item[0]*100):Math.floor(item[0]*100)}/100
                    {/* Haven't used Math.round since 0.5 needs to be rounded down */}
                  </Typography>
                </div>
                <BorderLinearProgress variant="determinate" value={(item[0]*100)%1>0.5?Math.ceil(item[0]*100):Math.floor(item[0]*100)} />
              </Grid>
            ))
          }
        </Grid>
      </CardContent>
    </Card>
  )
}

export default CoordinationStats