import { useEffect, useState } from 'react';
import Head from 'next/head';
import { Box, Button, Container, Grid, MenuItem, TextField, Typography } from '@mui/material';
import { AuthGuard } from '../../components/authentication/auth-guard';
import { DashboardLayout } from '../../components/dashboard/dashboard-layout';
import { AnalyticsGeneralOverview } from '../../components/dashboard/analytics/analytics-general-overview';
// import { AnalyticsMostVisited } from '../../components/dashboard/analytics/analytics-most-visited';
import { TopicsRankedList } from '../../components/dashboard/network/topic-ranked-list';
// import { AnalyticsSocialSources } from '../../components/dashboard/analytics/analytics-social-sources';
import { TopicWordScores } from '../../components/dashboard/network/topic-word';
import {TopicHierarchyScores} from '../../components/dashboard/network/topic_hierarchy';
import { AnalyticsTopicsByPopularity } from '../../components/dashboard/analytics/analytics-visits-by-country';
import { AnalyticsTrafficSources } from '../../components/dashboard/analytics/analytics-traffic-sources';
import Sankey  from '../../components/dashboard/overview/sankey.js';
import {PageViews} from "../../components/dashboard/overview/pageviews"
import { readJSONData, readCSVData } from '../../utils/readData';
import { Reports as ReportsIcon } from '../../icons/reports';
import { gtm } from '../../lib/gtm';
import PropogandaDetection from '../../components/dashboard/network/PropogandaDetection';
import TotalTweetsTrend from '../../components/dashboard/network/TotalTweetsTrend';
import ToxicityTrend from '../../components/dashboard/network/ToxicityTrend';
import DegreeSpread from '../../components/dashboard/network/DegreeSpread';
import FollowerGroup from '../../components/dashboard/network/FollowerGroup';
import network_data from '../../../public/data/network.json'

const preProcess = (jsonData) => {
  jsonData = jsonData["data"][0];
  let name = jsonData["page"];
  let dataPoints =  jsonData["page_views"].map(obj=>{
    return Object.keys(obj)[0]
  })
  let data = jsonData["page_views"].map(obj=>{
    return Object.values(obj)[0]
  })
  let processedData = {
    series: [
      {
        data: data,
        name: name
      }
  ],
    xaxis: {
      dataPoints: dataPoints
    }
  };
  return processedData
}

const Analytics = () => {
  const [sankeyData, setSankeyData] = useState(null);
  const [viewData, setViewData] = useState(undefined);
  const [conversationData, setConversationData] = useState(undefined);

  useEffect(async () => {
    setSankeyData(await readJSONData("/data/sankey_data.json"))
    setConversationData(await readCSVData("/data/toxicity_conversation_trend.csv"))
    let data = await readJSONData("/data/pageviews.json")
    setViewData(preProcess(data));
  }, []);

  return (
    <>
      <Head>
        <title>
          SimPPL: Network and Topic
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ mb: 4 }}>
            <Grid
              container
              justifyContent="space-between"
              spacing={3}
            >
              <Grid item>
                <Typography variant="h3">
                  Network and Topic
                </Typography>
              </Grid>
              <Grid
                item
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                  m: -1
                }}
              >
                <Button
                  startIcon={<ReportsIcon fontSize="small" />}
                  sx={{ m: 1 }}
                  variant="outlined"
                >
                  Upload File
                </Button> 
                
                {/* <TextField
                  defaultValue="week"
                  label="Period"
                  select
                  size="small"
                  sx={{ m: 1 }}
                >
                  <MenuItem value="week">Last week</MenuItem>
                  <MenuItem value="month">Last month</MenuItem>
                  <MenuItem value="year">Last year</MenuItem>
                </TextField> */}
              </Grid>
            </Grid>
          </Box>
          <Box>
            <Grid
              container
              spacing={4}
            >
            <Grid item md={12} xs={12}>
                <FollowerGroup data={network_data} />
            </Grid>
            <Grid item md={12} xs={12}>
                <DegreeSpread />
            </Grid>
            <Grid item md={12} xs={12}>
                {conversationData && <TotalTweetsTrend data={conversationData} /> }
            </Grid>

            <Grid item md={12} xs={12}>
                {conversationData && <ToxicityTrend data={conversationData} /> }
            </Grid>

            <Grid item md={12} xs={12}>
                <PropogandaDetection />
            </Grid>

            {/*<Grid
              item
              md={7}
              xs={12}
            >
              <TopicsRankedList/>
            </Grid> 
              <Grid
                item
                md={5}
                xs={12}
              >
                <TopicWordScores />
              </Grid>*/}
              {/* <Grid
                item
                md={8}
                xs={12}
              >
                <AnalyticsTrafficSources sx={{ height: '100%' }} />
              </Grid> 
              <Grid
                item
                md={6}
                xs={12}
                spacing={0} alignItems="center"
                justifyContent="center"
              >
                <TopicHierarchyScores/>
                 <AnalyticsTopicsByPopularity title={"Influential"}/> 
              </Grid>*/}
              {/* <Grid
                item
                md={6}
                xs={12}
              > */}
                {/* <AnalyticsTopicsByPopularity title={"Popular"}/> */}
              {/* </Grid> */}
              <Grid
                item
                md={8}
                xs={12}
              >
                {/* <AnalyticsMostVisited /> */}
              </Grid>
              <Grid
                item
                md={4}
                xs={12}
              >
                {/* <AnalyticsSocialSources /> */}
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

Analytics.getLayout = (page) => (
  <AuthGuard>
    <DashboardLayout>
      {page}
    </DashboardLayout>
  </AuthGuard>
);

export default Analytics;
