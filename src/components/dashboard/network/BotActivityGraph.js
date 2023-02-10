import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import {Plotly} from "../../../components/plotly";

function BotActivityGraph({x_arr, legend_name}) {
  return (
    <Box sx={{alignItems: 'center', display: 'flex', flexWrap: 'wrap'}}>
      {/* <Typography variant="h6">{title}</Typography> */}
      <Box sx={{alignItems: 'center', display: 'flex', mr: 1, width: '100%', height: '100%', maxHeight: '250px'}}>
        <Plotly
          data={[{
              type: 'histogram',
              x: x_arr,
              mode: 'markers',
              name: legend_name
            }]}
          layout={{
            showlegend: true,
            font:{
              size:10,
              color: 'white'
            },
            plot_bgcolor: 'transparent',
            paper_bgcolor: 'transparent',
            autosize: true,
            xaxis: {
              title: {text: "value"},
              // tickformat: tickformat,
              // tickmode: 'linear',
              // dtick: 1,
              // autotick: false,
              // ticks: "outside",
            },
            yaxis: {
              title: {text: "count"},
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

export default BotActivityGraph