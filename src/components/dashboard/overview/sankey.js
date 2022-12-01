import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography
} from '@mui/material';
import * as d3 from "d3";
import {useState, useEffect} from "react";
import {Plotly} from "../../../components/plotly";

const preProcessSankey = (data) =>{
    let uniqueLabels = [...new Set([...data.trg_page, ...data.src_landing])]
    let linkToIdx = new Map()
    uniqueLabels.forEach((l,idx)=>{
        linkToIdx.set(l, idx)
    }) 
    let loopSrc = data.src_landing.map(s=>linkToIdx.get(s))
    let loopTarget = data.trg_page.map(t=>linkToIdx.get(t))
    let maxChannels = 25
    let src = loopSrc.filter((s, i)=> loopTarget[i] !== s).slice(0, maxChannels)
    let target = loopTarget.filter((s, i)=> loopSrc[i] !== s).slice(0, maxChannels)
    let val = data.users.filter((d, i)=>loopTarget[i] !== loopSrc[i]).slice(0, maxChannels)
    let colors = uniqueLabels.map((u, k, arr)=>d3.interpolateWarm((k+0.02)/maxChannels)).slice(0, maxChannels)
    //remove self loops
    let labels = uniqueLabels.map(u=>u)
    return {src, target,loopSrc,loopTarget, val, colors, uniqueLabels, labels}
}
const Sankey = (props) => {
    let channelData = preProcessSankey(props.data)
    return (
        <Card {...props} sx={{pl:1}}>
        <CardHeader title="User Channel Count" />
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
                type: "sankey",
                orientation: "h",
                node: {
                  pad: 10,
                  thickness: 20,
                  line: {
                    color: "black",
                    width: 0.25
                  },
                label: channelData.uniqueLabels,
                color: channelData.colors
                },              
                link: {
                  source: channelData.src,
                  target: channelData.target,
                  value:  channelData.val,
                }
            }]}
            layout={{
              font:{
                size:10,
                color: 'white'
              },
              plot_bgcolor: '#111827',
              paper_bgcolor: '#111827',
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
export default Sankey;
