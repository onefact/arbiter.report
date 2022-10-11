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
var trace1 ={
  type: 'bubble',
  x: ['2013-10-04 22:23:00', '2013-10-05 22:23:00', '2013-10-06 22:23:00', '2013-10-07 22:23:00', '2013-10-08 22:23:00', '2013-10-09 22:23:00', '2013-10-10 22:23:00', '2013-10-11 22:23:00', '2013-10-12 22:23:00'],
  y: [10, 11, 12, 13, 10, 13, 12, 13,11],
  mode: 'markers',
  marker: {
    size: [97, 15, 80, 72, 21, 44, 45, 67, 32]
  }
};
var trace2 = {
  type: 'bubble',
  x:  ['2013-10-04 22:23:00', '2013-10-05 22:23:00', '2013-10-06 22:23:00', '2013-10-07 22:23:00', '2013-10-08 22:23:00', '2013-10-09 22:23:00', '2013-10-10 22:23:00', '2013-10-11 22:23:00', '2013-10-12 22:23:00'],
  y: [17,15,19,20,12,16,20,12,19],
  // text: ['A</br>size: 40</br>sixeref: 0.2', 'B</br>size: 60</br>sixeref: 0.2', 'C</br>size: 80</br>sixeref: 0.2', 'D</br>size: 100</br>sixeref: 0.2'],
  mode: 'markers',
  marker: {
    size: [94, 15, 81, 72, 19, 44, 15, 17, 42],
    //setting 'sizeref' to lower than 1 decreases the rendered size
    // sizeref: 2,
    // sizemode: 'area'
  }
};
var trace3 = {
  type: 'bubble',
  x:  ['2013-10-04 22:23:00', '2013-10-05 22:23:00', '2013-10-06 22:23:00', '2013-10-07 22:23:00', '2013-10-08 22:23:00', '2013-10-09 22:23:00', '2013-10-10 22:23:00', '2013-10-11 22:23:00', '2013-10-12 22:23:00'],
  y: [16,12,19,12,14,12,13,12,18,],
  // text: ['A</br>size: 40</br>sixeref: 0.2', 'B</br>size: 60</br>sixeref: 0.2', 'C</br>size: 80</br>sixeref: 0.2', 'D</br>size: 100</br>sixeref: 0.2'],
  mode: 'markers',
  marker: {
    size: [94, 15, 81, 72, 19, 44, 15, 17, 42],
    //setting 'sizeref' to lower than 1 decreases the rendered size
    // sizeref: 2,
    // sizemode: 'area'
  }
};

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
            data={[trace1,trace2,trace3]}
            layout={{
              font:{
                size:10,
                color: 'black'
              },
              xaxis:{
                showgrid:true,
                // ticktext:['2013-10-04 22:23:00', '2013-10-05 22:23:00', '2013-10-06 22:23:00', '2013-10-07 22:23:00', '2013-10-08 22:23:00', '2013-10-09 22:23:00', '2013-10-10 22:23:00', '2013-10-11 22:23:00', '2013-10-12 22:23:00'],
                title:"Time",
                titlefont: {
                  family: 'Arial, sans-serif',
                  size: 18,
                  color: 'black'
                },
              },
              yaxis:{
                showgrid:true,
             
                title:"Toxicity",
                titlefont: {
                  family: 'Arial, sans-serif',
                  size: 18,
                  color: 'black'
                },
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
