import {
  Box,
  Card,
  CardHeader,
  Divider,
  useTheme,
} from '@mui/material';
import {Plotly} from "../../../components/plotly";

const preProcess = (data) => {
    
}
const DegreeSpread = (props) => {
    // let data = preProcess(props.data)
    const theme = useTheme();
    
    return (
        <Card {...props} sx={{pl:1}}>
        <CardHeader title="Degree of post spread over time" />
          <Divider />

          <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexWrap: 'wrap',
          }}
        >
          <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                mr: 1,
                width: '100%', 
                height: '100%'
              }}
            >
          <Plotly
            data={[{
                type: 'bubble',
                x: ['2013-10-04 22:23:00', '2013-10-05 22:23:00', '2013-10-06 22:23:00', '2013-10-07 22:23:00', '2013-10-08 22:23:00', '2013-10-09 22:23:00', '2013-10-10 22:23:00', '2013-10-11 22:23:00', '2013-10-12 22:23:00'],
                y: [10, 11, 12, 13, 10, 13, 12, 13,11],
                mode: 'markers',
                marker: {
                  size: [97, 15, 80, 72, 21, 44, 45, 67, 32]
                }
              }]}
            layout={{
              font:{
                size:10,
                color: 'white'
              },
              plot_bgcolor: 'transparent',
              paper_bgcolor: 'transparent',
              autosize: true
            }}
            useResizeHandler={true}
            responsive={true}
            style={{width: '100%', height: '100%'}}
          />
          </Box>
        </Box>
      </Card>
    )
  }
export default DegreeSpread;
