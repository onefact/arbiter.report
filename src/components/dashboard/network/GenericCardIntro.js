import { CardContent, Grid, Typography } from '@mui/material'
import React from 'react'

function GenericCardIntro({title, text, score}) {
  return (
    <CardContent>
    <Grid container sx={{mb:2}}>
      <Grid item xs={9}>
        <Typography variant="h4" component='span' gutterBottom>{title}</Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="h4" component='span'>
          {score}<Typography variant="body1" component='span' color='textSecondary'>/100</Typography>
        </Typography>
      </Grid>
    </Grid>
    <Grid item xs={12}>
      {text}
    </Grid>
    </CardContent>
  )
}

export default GenericCardIntro