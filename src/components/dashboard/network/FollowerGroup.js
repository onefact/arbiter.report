import {
  Box,
  Card,
  CardHeader,
  Divider,
  useTheme,
} from '@mui/material';
import { red } from '@mui/material/colors';
import dynamic from 'next/dynamic';

const ForceGraph2D = dynamic(() => import('react-force-graph').then(module => module.ForceGraph2D)

, { ssr: false })

// const preProcess = (data) => {
    
// }

const FollowerGroup = ({data}) => {
    // let data = preProcess(props.data)
    const theme = useTheme();

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
                nodeColor = {node => node.group === 1 ? 'blue' : (node.group === 2 ? 'gray' : (node.group === 3 ?'green' : 'orange'))}
               
                // nodeAutoColorBy="group"
         
       
                // linkColor={d=>theme.palette.divider}
                graphData={data}
                
                // graphData={{ nodes: [
                //   {id:1, name: "name1", val:1},
                //   {id:2, name: "name2", val:2},
                //   {id:3, name: "name3", val:1},
                //   {id:4, name: "name4", val:5},
                //   {id:5, name: "name5", val:3},
                //   {id:6, name: "name6", val:1},
                //   {id:7, name: "name7", val:2},
                //   {id:8, name: "name8", val:1},
                //   {id:9, name: "name9", val:4},
                // ], links: [
                  
                //   {source: 1, target: 2, },
                //   {source: 2, target: 3},
                //   {source: 1, target: 3},
                //   {source: 1, target: 4},
                //   {source: 1, target: 8},

                //   {source: 6, target: 7},
                //   {source: 6, target: 5},
                //   {source: 6, target: 9},
                // ] }}
              />
          </Box>
        </Box>
      </Card>
    )
  }
export default FollowerGroup;