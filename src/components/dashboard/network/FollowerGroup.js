import { useState, useEffect } from 'react';
import axios from 'axios';
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
import { useRouter } from 'next/router';

const ForceGraph2D = dynamic(() => import('react-force-graph').then(module => module.ForceGraph2D), { ssr: false })

const reportApiUrl = "http://34.69.181.135:8081/report";


const FollowerGroup = ({}) => {

    const router = useRouter();
    const articleUrl = (router.query.lk && router.query.lk.length > 0) ? router.query.lk : "https://www.rt.com/russia/551440-ukraine-us-financed-biolaboratories/";
    
    const [data, setData] = useState(null);
    const theme = useTheme();
    

    useEffect(() =>{
      
      var config = {
        method: 'get',
      maxBodyLength: Infinity,
        url: `${reportApiUrl}?url=${articleUrl}`,
        headers: { 
          'Authorization': 'Basic cGFycm90OnBhcnJvdDEyMw=='
        }
      };
      
      axios(config)
      .then(function (response) {
        console.log(response.data.coordination);
        const d = response.data.coordination
        let nodes = []
        d.overall_coordination_scoring.coord_communities.forEach((val, index) => 
          val.forEach((node)=>
          nodes.push({'id': node, 'group': index})
          ),
        );
        setData({'nodes': nodes, 'links': d.coord_graph_edges})

      })
      .catch(function (error) {
        console.log(error);
      }); 
    
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
            {data ? 
              <ForceGraph2D
                height={450}
                nodeLabel={(node) => node.id}
                nodeColor = {node => node.group === 0 ? 'blue' : (node.group === 1 ? 'gray' : (node.group === 2 ?'green' : (node.group === 3 ? 'red' : (node.group === 4 ?'pink' :'orange'))))}
                graphData={data}
              /> : null}
          </Box>
        </Box>
      </Card>
    )
  }
export default FollowerGroup;