import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'

function CoordinationCardContent({title, subtitle, freqData, dataSize}) {
  // freqData = {key:val, key:val}
  // Filter freqData by freqs here v
  //console.log(title, subtitle, freqData, dataSize)
  try{
    const data = Object.assign(                 // collect all objects into a single obj
      ...Object                                 // spread the final array as parameters
        .entries(freqData)                      // key a list of key/ value pairs
        .sort(({ 1: a }, { 1: b }) => b - a)    // sort DESC by index 1
        .slice(0, dataSize)                     // get first three items of array
        .map(([k, v]) => ({ [k]: v }))          // map an object with a destructured
    );                                          // key/value pair
  
  // data is now filtered data
  return (
    <Card variant="outlined" sx={{height: '100%'}}>
      <CardContent sx={{padding: 3}}>
        <Typography variant="h5" gutterBottom>{title}</Typography>
        <Typography variant="subtitle2" gutterBottom>{subtitle}</Typography>
        <Typography variant="body2" color="text.secondary">
          {
            Object.keys(data).map((key, idx) => <div style={{display: 'flex', justifyContent: 'space-between'}} key={idx}>
              <Typography variant='body1' component="span">{key}</Typography>
              <Typography variant='body1' component="span">{data[key]}</Typography>
            </div>)
          }
        </Typography>
      </CardContent>
    </Card>
  )
        }
  catch{
    return (
      <Card variant="outlined" sx={{height: '100%'}}>
        <CardContent sx={{padding: 3}}>
          <Typography variant="h5" gutterBottom>{title}</Typography>
          <Typography variant="subtitle2" gutterBottom>{subtitle}</Typography>
          <Typography variant="body2" color="text.secondary">
            -
          </Typography>
        </CardContent>
      </Card>
    )
  }
}


export default CoordinationCardContent