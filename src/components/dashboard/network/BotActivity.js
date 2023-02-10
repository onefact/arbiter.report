import { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  Grid,
} from '@mui/material';
//import reportData from '../../../__fake-api__/report-api-ukraine.json'
import BotActivityGraph from './BotActivityGraph';
import BotActivityTable from './BotActivityTable';
import BotActivityIntro from './GenericCardIntro';
import axios from 'axios';
import { useRouter } from 'next/router';
import botometer_file from '../../../../public/data/Botometer Scores.json'

const reportApiUrl = "http://34.69.181.135:8081/report";




const BotActivity = (props) => {
  

  const reportData = null;
  const [ x_arr, setX_arr] = useState(null);
  const [ top_potential_bots, setTop_potential_bots] = useState(null);
  const router = useRouter();
  const articleUrl = (router.query.lk && router.query.lk.length > 0) ? router.query.lk : "https://www.rt.com/russia/551440-ukraine-us-financed-biolaboratories/";

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
      console.log(response.data);
      const reportData = response.data;
      
        const candidate_edges = reportData.coordination.coord_graph_edges
                          .filter(item => item.avg_delta <= 5000)
                          .map(item => [item.source, item.target, item.coshares, item.avg_delta])
        //console.log("Candidate", candidate_edges)
        const user_bot_candidates = {}
        candidate_edges.forEach((item) => {
          const [source, target, coshares, avg_delta] = item
          const [c_source, avg_delta_source, deltas_count_source] = user_bot_candidates[source] || [0,0,0]
          const [c_target, avg_delta_target, deltas_count_target] = user_bot_candidates[target] || [0, 0, 0]
          //console.log(source, target, coshares, avg_delta, c_source, avg_delta_source, deltas_count_source)
          user_bot_candidates[source] = [c_source + coshares, avg_delta_source + avg_delta, deltas_count_source + 1]
          user_bot_candidates[target] = [c_target + coshares, avg_delta_target + avg_delta, deltas_count_target + 1]
        })
        console.log(user_bot_candidates)
        
        const usernames = new Set(reportData.network_statistics.users.map(item => item.username))
        const potential_bots = Object.entries(user_bot_candidates)
        .sort(({1: a},{1: b}) => b[0] - a[0])
        .slice(0, 10)
        .filter(item => usernames.has(item[0]))

        setTop_potential_bots(potential_bots)

        // Graph data
        setX_arr(Object.values(user_bot_candidates).map(item => item[1] / item[2] / 1000))
        // const bot_scores = reportData.coordination.bot_like_coordination_scoring.scores
        // const mean = bot_scores.reduce((a,b) => a+b, 0) / bot_scores.length
        // const score = Math.floor(bot_like_score_cdf(mean)*100)
      
      
      
    })
    .catch(function (error) {
      console.log(error);
    });

  },[]);
  
  const botometer = []
  console.log(botometer_file[articleUrl])
  botometer_file[articleUrl].map((item) => {
    botometer.push(Object.values(item))
    //console.log(item)
  })

  console.log(botometer)
  const score = "69"
  // console.log(x_arr)
  // console.log("Here", top_potential_bots)
  return (
      <Card {...props} sx={{pl:1}}>
      <CardContent>
      {/* Heading Container*/}
      <Grid container spacing={2}>
        {/* Overview of section */}
        <Grid item xs={6}>
          <BotActivityIntro
            title={"Bot-like Activity"}
            text={"Nowadays bots permeate social media and are a common tool used to easily share information automatically. However When bots it is known that fake bot-accounts are also used to push manipulated. This section gives you an overview of how much bot-activity has been measured around the sharing of the requested article."}
            score={score}
          />
        </Grid>
        {/* Statistics */}
        <Grid item xs={6}>
          {x_arr ?
          <BotActivityGraph 
            x_arr={x_arr}
            legend_name={"Sharing Time (s)"}
          /> : null}
        </Grid>
      </Grid>
      
      {/* Top Cards */}
      <Grid container justifyContent="flex-start">
      {botometer ?
        <BotActivityTable
          botometer={[botometer]}
        /> : null }
      </Grid>
      </CardContent>
    </Card> 
  )
}
export default BotActivity;
