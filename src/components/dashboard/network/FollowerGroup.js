import { useState, useEffect } from 'react';
// import FullCalendar from "@fullcalendar/react"
// import { constrainPoint } from '@fullcalendar/common';
import {
  Box,
  Card,
  CardHeader,
  Divider,
  useTheme,
} from '@mui/material';
import { red } from '@mui/material/colors';
import dynamic from 'next/dynamic';
import network_data from '../../../../public/data/cordination.json';

const ForceGraph2D = dynamic(() => import('react-force-graph').then(module => module.ForceGraph2D), { ssr: false })

// const preProcess = (data) => {
    
// }

const FollowerGroup = ({}) => {
    // let data = preProcess(props.data)

    const theme = useTheme();
    const [data, setData] = useState({});
    

    useEffect(() =>{
      
      let nodes = []
      network_data.overall_coordination_scoring.coord_communities.forEach((val, index) => 
        val.forEach((node)=>
        nodes.push({'id': node, 'group': index})
        ),
      );
      setData({'nodes': nodes, 'links': network_data.coord_graph_edges})

    },[]);

    return (
        <Card {...data} sx={{pl:1}}>
        <CardHeader title="Follower Groups Network Graph" />
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
              <ForceGraph2D
                height={450}
                nodeLabel={(node) => node.id}
                nodeColor = {node => node.group === 0 ? 'blue' : (node.group === 1 ? 'gray' : (node.group === 2 ?'green' : (node.group === 3 ? 'red' : (node.group === 4 ?'pink' :'orange'))))}
          
                graphData={data}
                
           
              />
          </Box>
        </Box>
      </Card>
    )
  }
export default FollowerGroup;