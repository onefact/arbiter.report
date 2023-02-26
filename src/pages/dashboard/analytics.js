import { useEffect, useState } from 'react';
import Head from 'next/head';
import { Box, Button, Container, Grid, MenuItem, TextField, Typography } from '@mui/material';
import { AuthGuard } from '../../components/authentication/auth-guard';
import { DashboardLayout } from '../../components/dashboard/dashboard-layout';
import { AnalyticsGeneralOverview } from '../../components/dashboard/analytics/analytics-general-overview';
import { AnalyticsMostVisited } from '../../components/dashboard/analytics/analytics-most-visited';
import { AnalyticsSocialSources } from '../../components/dashboard/analytics/analytics-social-sources';
import { AnalyticsTopicsByPopularity } from '../../components/dashboard/analytics/analytics-visits-by-country';
import { AnalyticsTrafficSources } from '../../components/dashboard/analytics/analytics-traffic-sources';
import Sankey  from '../../components/dashboard/overview/sankey.js';
import {PageViews} from "../../components/dashboard/overview/pageviews"
import { readJSONData } from '../../utils/readData';
// import { Reports as ReportsIcon } from '../../icons/reports';
import { gtm } from '../../lib/gtm';

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

  useEffect(async () => {
    setSankeyData(await readJSONData("/data/sankey_data.json"))
    let data = await readJSONData("/data/pageviews.json")
    setViewData(preProcess(data));
  }, []);

  return (
    <>
      <Head>
        <title>
          SimPPL: Analytics
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
                <Typography variant="h4">
                  Analytics
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
                {/* <Button
                  startIcon={<ReportsIcon fontSize="small" />}
                  sx={{ m: 1 }}
                  variant="outlined"
                >
                  Reports
                </Button> */}
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
              <Grid
              item
              md={12}
              xs={12}
            >
              {viewData && <PageViews data={viewData}/>}
            </Grid> 
              <Grid
                item
                md={12}
                xs={12}
              >
                {sankeyData && <Sankey data={sankeyData} />}
              </Grid>
              {/* <Grid
                item
                md={8}
                xs={12}
              >
                <AnalyticsTrafficSources sx={{ height: '100%' }} />
              </Grid> */}
              <Grid
                item
                md={6}
                xs={12}
              >
                <AnalyticsTopicsByPopularity title={"Influential"}/>
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <AnalyticsTopicsByPopularity title={"Popular"}/>
              </Grid>
              <Grid
                item
                md={8}
                xs={12}
              >
                <AnalyticsMostVisited />
              </Grid>
              <Grid
                item
                md={4}
                xs={12}
              >
                <AnalyticsSocialSources />
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
