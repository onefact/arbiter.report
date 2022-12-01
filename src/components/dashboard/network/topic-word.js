import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Divider,
    Grid,
    Tooltip,
    Typography
  } from '@mui/material';
  import { useTheme } from '@mui/material/styles';
  import { ArrowRight as ArrowRightIcon } from '../../../icons/arrow-right';
  import { InformationCircleOutlined as InformationCircleOutlinedIcon } from '../../../icons/information-circle-outlined';
  import { Chart } from '../../chart';
  
  const data = {
    series: [
      {
        color: 'rgba(86, 100, 210, 0.5)',
        data: 40,
        label: 'hashtag'
      },
      {
        color: '#FFB547',
        data: 10,
        label: 'immediately'
      },
      {
        color: '#7BC67E',
        data: 20,
        label: 'url'
      },
      {
        color: '#64B6F7',
        data: 30,
        label: 'leave'
      },
      {
        color: '#455a64',
        data: 20,
        label: 'gas'
      }
    ]
  };
  
  export const TopicWordScores = () => {
    const theme = useTheme();
  
    const chartOptions = {
      chart: {
        background: 'transparent',
        stacked: false,
        toolbar: {
          show: false
        }
      },
      colors: data.series.map((item) => item.color),
      dataLabels: {
        enabled: false
      },
      fill: {
        opacity: 1
      },
      labels: data.series.map((item) => item.label),
      legend: {
        show: false
      },
      stroke: {
        width: 0
      },
      theme: {
        mode: theme.palette.mode
      }
    };
  
    const chartSeries = data.series.map((item) => item.data);
  
    return (
      <Card>
        <CardHeader
          title="Social Media Sources"
          action={(
            <Tooltip title="Widget25 source by Social Media platforms">
              <InformationCircleOutlinedIcon sx={{ color: 'action.active' }} />
            </Tooltip>
          )}
        />
        <Divider />
        <CardContent>
          <Chart
            height={200}
            options={chartOptions}
            series={chartSeries}
            type="donut"
          />
          <Grid container>
            {data.series.map((item) => (
              <Grid
                item
                key={item.label}
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                  p: 1
                }}
                xs={6}
              >
                <Box
                  sx={{
                    border: 3,
                    borderColor: item.color,
                    borderRadius: '50%',
                    height: 16,
                    mr: 1,
                    width: 16
                  }}
                />
                <Typography variant="subtitle2">
                  {item.label}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    );
  };
  