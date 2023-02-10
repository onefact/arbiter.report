import {
  CardContent,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import React from 'react'

function BotActivityTable({botometer}) {

  //console.log(botometer, top_potential_bots)
  console.log(botometer[0])
  return (
  <>
    <Grid item xs={12} sm={6} component={CardContent}>
      <Typography variant="h5">Potentially bot-like accounts</Typography>
      <Typography variant="body1">The following accounts have been observed to repeatedly share content within a very short time interval. This might be an indicator that these accounts are completely or partially controlled by software. For comparison, we also include the the overall score computed by Botometer®.</Typography>
    </Grid>
    <Grid item xs={12}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small">
          <TableHead>
            <TableRow>
              <TableCell align="left">Username</TableCell>
              <TableCell align="left">#Coordinated&nbsp;sharing&nbsp;within&nbsp;5s</TableCell>
              <TableCell align="left">Average&nbsp;sharing&nbsp;time</TableCell>
              <TableCell align="left">Botometer®&nbsp;Score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {botometer[0].map((row) => (
              <TableRow
                key={row[0]}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row[0]}
                </TableCell>
                <TableCell align="center">{row[1]}</TableCell>
                <TableCell align="center">{row[2]}</TableCell>
                <TableCell align="center">{row[3]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  </>
  )
}

export default BotActivityTable