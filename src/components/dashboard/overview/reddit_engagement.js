import { useState, useEffect } from 'react';
import { Box, Card, CardHeader, Checkbox, Divider, Tooltip, Typography } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import { InformationCircleOutlined as InformationCircleOutlinedIcon } from '../../../icons/information-circle-outlined';
import { Chart } from '../../chart';
import {readJSONData} from "../../../utils/readData";


export const RedditEng = (props) => {
  const theme = useTheme();
  let seriesColor = '#4CAF50';
  let data = props.data;
  console.log("Reddit Engagement",data)
    const chartOptions = {
      chart: {
        type:"area",
        background: 'transparent',
        stacked: false,
        zoom: {
          type: 'x',
          enabled: true,
          autoScaleYaxis: true
        },
        toolbar: {
          autoSelected: 'zoom'
        }
      },
      colors: [seriesColor],
      dataLabels: {
        enabled: false
      },
      tooltip: {
        shared: false,
        y: {
          formatter: function (val) {
            return (val).toFixed(0)
          }
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.5,
          opacityTo: 0.1,
          stops: [0, 90, 100]
        },
      },
      grid: {
        borderColor: theme.palette.divider,
        xaxis: {
          lines: {
            show: true
          }
        },
        yaxis: {
          lines: {
            show: true
          }
        }
      },
      legend: {
        show: false
      },
      markers: {
        hover: {
          size: undefined,
          sizeOffset: 2
        },
        radius: 2,
        shape: 'circle',
        size: 4,
        strokeWidth: 0
      },
      stroke: {
        curve: 'smooth',
        lineCap: 'butt',
        width: 3
      },
      theme: {
        mode: theme.palette.mode
      },
      xaxis: {
        type:"datetime",
        axisBorder: {
          color: theme.palette.divider
        },
        axisTicks: {
          color: theme.palette.divider,
          show: true
        },
        categories: data.xaxis.dataPoints,
        labels: {
          style: {
            colors: theme.palette.text.secondary
          }
        }
      },
      yaxis: [
        {
          axisBorder: {
            color: theme.palette.divider,
            show: true
          },
          axisTicks: {
            color: theme.palette.divider,
            show: true
          },
          labels: {
            formatter: function (val) {
              return (val).toFixed(0);
            },
          },
          title: {
            text: 'Views'
          },
        },
      ]
    };
  
    return (
      <Card {...props}>
        <CardHeader
          title="Weekly Reddit Posts about this Article"
          action={(
            <Tooltip title="Widget25 Source by channel">
              <InformationCircleOutlinedIcon sx={{ color: 'action.active' }} />
            </Tooltip>
          )}
        />
        <Divider />
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexWrap: 'wrap',
            mt: 4,
            px: 2
          }}
        >  
        {data.series.map((item) => (
          <Box
            key={item.name}
            sx={{
              alignItems: 'center',
              display: 'flex',
              mr: 2
            }}
          >
            <Typography
              sx={{
                color: 'textPrimary',
                ml:1
              }}
              variant="subtitle2"
            >
              {item.name}
            </Typography>
          </Box>
        ))}
        </Box>
        <Chart
          height={400}
          options={chartOptions}
          series={data.series}
          type="area"
        />
      </Card>
    );
};
