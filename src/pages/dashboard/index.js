import { useEffect, useState } from 'react';
import Head from 'next/head';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Divider,
  Grid,
  MenuItem,
  TextField,
  Typography
} from '@mui/material';
import { AuthGuard } from '../../components/authentication/auth-guard';
import { DashboardLayout } from '../../components/dashboard/dashboard-layout';
import { OverviewBanner } from '../../components/dashboard/overview/overview-banner';
import { OverviewCryptoWallet } from '../../components/dashboard/overview/overview-crypto-wallet';
import { OverviewInbox } from '../../components/dashboard/overview/overview-inbox';
import { SubredditRankedList } from '../../components/dashboard/overview/subreddits-ranked-list';
import { OverviewPrivateWallet } from '../../components/dashboard/overview/overview-private-wallet';
import { OverviewTotalBalance } from '../../components/dashboard/overview/overview-total-balance';
import { OverviewTotalTransactions } from '../../components/dashboard/overview/overview-total-transactions';
import { AnalyticsGeneralOverview } from '../../components/dashboard/analytics/analytics-noview';
import { readCSVData, readJSONData } from '../../utils/readData';
import { ArrowRight as ArrowRightIcon } from '../../icons/arrow-right';
import { Briefcase as BriefcaseIcon } from '../../icons/briefcase';
import { Download as DownloadIcon } from '../../icons/download';
import { ExternalLink as ExternalLinkIcon } from '../../icons/external-link';
import { InformationCircleOutlined as InformationCircleOutlinedIcon } from '../../icons/information-circle-outlined';
import { Reports as ReportsIcon } from '../../icons/reports';
import { Users as UsersIcon } from '../../icons/users';
import { gtm } from '../../lib/gtm';
import {PageViews} from "../../components/dashboard/overview/pageviews"
import {RedditEng} from "../../components/dashboard/overview/reddit_engagement"
import EarthWrapper from "../../components/dashboard/overview/choropleth";
import DailyEngagement from "../../components/dashboard/overview/dailyEngagement";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement
  } from 'chart.js';
import { Line, Bar} from 'react-chartjs-2';

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

const Overview = () => {
  const [displayBanner, setDisplayBanner] = useState(false);
  const [postData, setPostData] = useState(undefined);
  const [weeklyRedditData, setWeeklyRedditData] = useState(undefined);
  const [weeklyTwitterData, setWeeklyTwitterData] = useState(undefined);
  const [commentData, setCommentData] = useState(undefined);
  const [viewData, setViewData] = useState(undefined);
  const [dailyRedditComments, setDailyRedditComments] = useState(undefined);

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement
  );

  useEffect(async () => {
    //gtm.push({ event: 'page_view' });
    setDailyRedditComments(await readCSVData("/data/reddit_comment_history_updated.csv"))
    setPostData(await readCSVData("/data/post_per_subreddit_count.csv"));
    setCommentData(await readCSVData("/data/comments_per_subreddit_count.csv"));
    setWeeklyRedditData(await readCSVData("/data/reddit_weekly_agg_data.csv"))
    setWeeklyTwitterData(await readJSONData("/data/twitter_engagements_per_week.json"));
    let data = await readJSONData("/data/pageviews.json")
    setViewData(preProcess(data));
  }, []);

  useEffect(() => {
    // Restore the persistent state from local/session storage
    const value = globalThis.sessionStorage.getItem('dismiss-banner');

    if (value === 'true') {
      // setDisplayBanner(false);
    }
  }, []);

  const handleDismissBanner = () => {
    // Update the persistent state
    // globalThis.sessionStorage.setItem('dismiss-banner', 'true');
    setDisplayBanner(false);
  };

  return (
    <>
      <Head>
        <title>
          Dashboard: SimPPL
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
                  Welcome!
                </Typography>
              </Grid>
              <Grid
                item
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  m: -1
                }}
              >
                <Button
                  startIcon={<ReportsIcon fontSize="small" />}
                  sx={{ m: 1 }}
                  variant="outlined"
                >
                  Reports
                </Button>
                {/* <TextField
                  defaultValue="week"
                  label="Period"
                  select
                  size="small"
                  sx={{ m: 1 }}
                >
                  <MenuItem value="week">
                    Last week
                  </MenuItem>
                  <MenuItem value="month">
                    Last month
                  </MenuItem>
                  <MenuItem value="year">
                    Last year
                  </MenuItem>
                </TextField> */}
              </Grid>
            </Grid>
          </Box>
          <AnalyticsGeneralOverview />
          <Box sx={{ mt: 4 }}>
          <Grid
            container
            spacing={4}
          >
            {displayBanner && (
              <Grid
                item
                xs={12}
              >
                <OverviewBanner onDismiss={handleDismissBanner} />
              </Grid>
            )}
              <Grid
              item
              md={12}
              xs={12}
            >
              <div id="choropleth">
                <div class="tooltip"></div>
              <EarthWrapper/>
              </div>
            </Grid> 
            <Grid
              item
              md={6}
              xs={12}
            >
              {postData && <SubredditRankedList 
              title={"Subreddits with the most reposts"} 
              columns={["Subreddit", "Reposts"]} 
              data={postData}/>}
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              {commentData && <SubredditRankedList 
              title={"Subreddits with the most comments"} 
              columns={["Subreddit", "Comments"]} 
              data={commentData}/>}
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              {viewData && <PageViews data={viewData}/>}
            </Grid> 
            <Grid item md={12} xs={12}>
              {weeklyRedditData && weeklyTwitterData && <DailyEngagement data={{reddit: weeklyRedditData, twitter: weeklyTwitterData.data}} />}
            </Grid>


            {/* <Grid
              item
              md={12}
              xs={12}
            >
              {weeklyRedditData && <RedditEng data={weeklyRedditData}/>}
            </Grid>  */}

            {/* <Grid
              item
              md={6}
              xs={12}
            >
              <Card>
                <CardContent>
                  <Box
                    sx={{
                      alignItems: 'center',
                      display: 'flex'
                    }}
                  >
                    <BriefcaseIcon
                      color="primary"
                      fontSize="small"
                    />
                    <Typography
                      color="primary.main"
                      sx={{ pl: 1 }}
                      variant="subtitle2"
                    >
                      Jobs
                    </Typography>
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{ mt: 2 }}
                  >
                    Find your dream job
                  </Typography>
                  <Typography
                    color="textSecondary"
                    variant="body2"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Typography>
                </CardContent>
                <Divider />
                <CardActions>
                  <Button
                    endIcon={<ArrowRightIcon fontSize="small" />}
                    size="small"
                  >
                    Search Jobs
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <Card>
                <CardContent>
                  <Box
                    sx={{
                      alignItems: 'center',
                      display: 'flex'
                    }}
                  >
                    <InformationCircleOutlinedIcon color="primary" />
                    <Typography
                      color="primary.main"
                      sx={{ pl: 1 }}
                      variant="subtitle2"
                    >
                      Help Center
                    </Typography>
                  </Box>
                  <Typography
                    sx={{ mt: 2 }}
                    variant="h6"
                  >
                    Need help figuring things out?
                  </Typography>
                  <Typography
                    color="textSecondary"
                    variant="body2"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Typography>
                </CardContent>
                <Divider />
                <CardActions>
                  <Button
                    endIcon={<ExternalLinkIcon fontSize="small" />}
                    size="small"
                  >
                    Help Center
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <Card>
                <CardContent>
                  <Box
                    sx={{
                      alignItems: 'center',
                      display: 'flex'
                    }}
                  >
                    <DownloadIcon color="primary" />
                    <Typography
                      color="primary.main"
                      sx={{ pl: 1 }}
                      variant="subtitle2"
                    >
                      Download
                    </Typography>
                  </Box>
                  <Typography
                    sx={{ mt: 2 }}
                    variant="h6"
                  >
                    Download our Free PDF and learn how to
                    get more job leads
                  </Typography>
                  <Typography
                    color="textSecondary"
                    variant="body2"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Typography>
                </CardContent>
                <Divider />
                <CardActions>
                  <Button
                    endIcon={<DownloadIcon fontSize="small" />}
                    size="small"
                    variant="outlined"
                  >
                    Download Free PDF
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <Card>
                <CardContent>
                  <Box
                    sx={{
                      alignItems: 'center',
                      display: 'flex'
                    }}
                  >
                    <UsersIcon color="primary" />
                    <Typography
                      color="primary.main"
                      sx={{ pl: 1 }}
                      variant="subtitle2"
                    >
                      Contacts
                    </Typography>
                  </Box>
                  <Typography
                    sx={{ mt: 2 }}
                    variant="h6"
                  >
                    Contacts allow you to manage your company contracts
                  </Typography>
                  <Typography
                    color="textSecondary"
                    variant="body2"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Typography>
                </CardContent>
                <Divider />
                <CardActions>
                  <Button
                    endIcon={<ArrowRightIcon fontSize="small" />}
                    size="small"
                    variant="outlined"
                  >
                    My Contacts
                  </Button>
                </CardActions>
              </Card>
            </Grid> */}
          </Grid>
          </Box>     
        </Container>
      </Box>
    </>
  );
};

Overview.getLayout = (page) => (
  <AuthGuard>
    <DashboardLayout>
      {page}
    </DashboardLayout>
  </AuthGuard>
);

export default Overview;
