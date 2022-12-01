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
                nodeLabel={(node) => node.id}
                nodeColor = {node => node.group === 1 ? 'blue' : (node.group === 2 ? 'gray' : (node.group === 3 ?'green' : 'orange'))}
          
                graphData={data}
                
           
              />
          </Box>
        </Box>
      </Card>
    )
  }
export default FollowerGroup;