import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import {Plotly} from "../../../components/plotly";

// const d = new Date( '2007-12-31' );
// const x_arr = [...Array(25).keys()]
//               .map((item) => `${d.getFullYear() + Math.floor((d.getMonth()+item)/12)}-${((d.getMonth()+item)%12) + 1}`
//             )
            
// const y_arr = x_arr.map(() => Math.random()*10000)
// const s_arr = y_arr.map((item) => item*0.02*(Math.random() * (1.5 - 1) ) + 1)

function CoordinationGraphs({title, rawData, triMonthly, tickformat}) {
  const data = rawData.map(item => {
    item.created_at = item.created_at.split('T')[0]
    if(triMonthly) { 
      const [y, m, d] = item.created_at.split('-').map(item => parseInt(item))
      // console.log(y, m, d)
      const quotient = Math.ceil(m/3)
      // console.log(quotient)
      const newM = ((quotient)*3)
      item.created_at = [y, newM].join("-")
    }
    return item.created_at
  })
  // console.log(title, data.sort())
  let tableData = data.reduce(function(obj, val) {
    obj[val] = ++obj[val] || 1;
    return obj;
  }, {});
  // console.log(title, tableData)
  const x_arr = Object.keys(tableData)
  const y_arr = Object.values(tableData)

  return (
    <Box sx={{alignItems: 'center', display: 'flex', flexWrap: 'wrap'}}>
      <Typography variant="h6">{title}</Typography>
      <Box sx={{alignItems: 'center', display: 'flex',
          mr: 1, width: '100%', height: '100%'}}>
        <Plotly
          data={[{
              type: 'bar',
              x: x_arr,
              y: y_arr,
              mode: 'markers',
            }]}
          layout={{
            font:{
              size:10,
              color: 'white'
            },
            plot_bgcolor: 'transparent',
            paper_bgcolor: 'transparent',
            autosize: true,
            xaxis: {
              tickformat: tickformat,
              // tickmode: 'linear',
              // dtick: 1,
              // autotick: false,
              // ticks: "outside",
            },
            yaxis: {
              title: {text: "No. of Accounts"}
            }
          }}
          useResizeHandler={true}
          responsive={true}
          style={{width: '100%', height: 'fit-content'}}
        />
      </Box>
    </Box>
  )
}

export default CoordinationGraphs