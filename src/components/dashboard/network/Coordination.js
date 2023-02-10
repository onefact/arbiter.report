import React from 'react';
import { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from '@mui/material';
import CoordinationCardContent from './CoordinationCardContent';
//import reportData from '../../../__fake-api__/report-api-ukraine.json'
import CoordinationStats from './CoordinationStats';
import CoordinationIntro from './GenericCardIntro'
import CoordinationGraphs from './CoordinationGraphs';
import axios from 'axios';

import { useRouter } from 'next/router';

const reportApiUrl = "http://34.69.181.135:8081/report";

const Coordination = (props) => {

    const router = useRouter();
    const articleUrl = (router.query.lk && router.query.lk.length > 0) ? router.query.lk : "https://www.rt.com/russia/551440-ukraine-us-financed-biolaboratories/";
    const [reportData, setReportData] = useState(Object);
    const [totalLikes, setTotalLikes] = useState(null);
    const [reach, setReach] = useState(null);
    const displayControl = []
    //const reportData = null;
    //const total_likes = 0
    //const reach = 0


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
        console.log(response.data.network_statistics.tweets);
        const data = response.data
        setReportData(data);
        const likes = 0;
        const reach_ = 0;
        response.data.network_statistics.tweets.forEach(item => {
          likes+=item.like_count
        })
        response.data.network_statistics.users.forEach(item => {
          reach_ += item.followers_count
        })
        setTotalLikes(likes)
        setReach(reach_)
        
        
        
        console.log(displayControl)
      })
      .catch(function (error) {
        console.log(error);
      });
  
    },[]);

    
    displayControl = [
      // Title, subtitle, key for data access
      ['Top #hashtags', 'Top shared hahstags within this network', 'hashtags_frequencies'],
      ['Top @users', 'Top retweeted users within this network', 'retweeted_users_frequencies'],
      ['Top languages', 'Top languages within this network', 'languages_frequencies'],
      ['Top annotations', 'Top annotations within this network', 'annotation_frequencies'],
    ]
   
    
    // const content = () =>{
    //   if(Object.keys(reportData).length > 0){
    //     if(Object.keys(reportData.network_statistics.hashtags_frequencies).length === 0){
    //       displayControl.splice(0, 1)
    //       console.log("hash")
    //     }
    //     if(Object.keys(reportData.network_statistics.retweeted_users_frequencies).length === 0){
    //       displayControl.splice(1, 1)
    //       console.log("re")
    //     }
    //     if(Object.keys(reportData.network_statistics.languages_frequencies).length === 0){
    //       displayControl.splice(2, 1)
    //       console.log("lang")
    //     }
    //     if(Object.keys(reportData.network_statistics.annotation_frequencies).length === 0){
    //       displayControl.splice(3, 1)
    //       console.log("ann")
    //     }
    //   }
    //   console.log(displayControl)
    //   return 1
    // }


    const score = "88"
    return (
      <Card {...props} sx={{pl:1}}>
        <CardContent>
        {/* Heading Container*/}
        <Grid container spacing={2}>
          {/* Overview of section */}
          <Grid item xs={6}>
            <CoordinationIntro
              title={"Coordination"}
              text={"A strong indicator of propagandistic effort is inauthentic sharing behaviour. When a narrative is being pushed, hired trolls and bots are activated in order to disseminate it inorganically in social media networks. Here we measure the sharing coordination of a URL and estimate how likely the given dissemination has been produced by propagandistic efforts."}
              score={score}
            />
          </Grid>
          {/* Statistics */}
          <Grid item xs={6}>
          {Object.keys(reportData).length > 0 ?
            <CoordinationStats 
              tweets={reportData.network_statistics.shared_tweets}
              sharing_users={reportData.network_statistics.sharing_users}
              total_likes={totalLikes}
              reach={reach>1000?`${Math.floor(reach/1000)}k`:reach}
              scores={reportData.coordination.overall_coordination_scoring.scores}
            /> : null}
          </Grid>
          {/* Graphs */}
          <Grid item xs={12} sm={6}>
          {Object.keys(reportData).length > 0 ?
            <CoordinationGraphs
              title="Tweet Creation"
              rawData={reportData.network_statistics.tweets}
              tickformat={'%e %b \n %Y'}
            /> : null}
          </Grid>
          <Grid item xs={12} sm={6}>
          {Object.keys(reportData).length > 0 ?
            <CoordinationGraphs 
              title="User Creation"
              rawData={reportData.network_statistics.users}
              tickformat={'%Y'}
              triMonthly
            />: null}
          </Grid>
        </Grid>
        
        {/* Top Cards */}
        <Grid container justifyContent="space-around">
          {
            displayControl.map((item, idx) => ( 
            <Grid container item xs={6} md={3} justifyContent="center" key={idx}>
              <Grid item xs={10}>
                {Object.keys(reportData).length > 0 ? 
                <CoordinationCardContent 
                  title={item[0]}
                  subtitle={item[1]}
                  freqData={reportData.network_statistics[item[2]]}
                  dataSize={10}
                /> : null }
              </Grid>
            </Grid>
            ))
          }
        </Grid>
        </CardContent>
      </Card>
    )
  }
export default Coordination;
