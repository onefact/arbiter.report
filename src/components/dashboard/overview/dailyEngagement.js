import { useEffect, useState } from 'react';
import {Chart} from "../../chart";
import {
    Card,
    CardActions,
    CardContent,
    Typography,
  } from '@mui/material';

function DailyEngagement(props)
{
    const [engagementData, setEngagementData] = useState([]);

    useEffect(() => {
        setEngagementData(getEngagementData(props.data));
    }, []);

    let datasets;
    let chartOptions;
    if(engagementData.length !== 0) 
    {
        const datasetColours = ["orange", "red", "blue", "green", "violet"];
        
        const weeks = Object.keys(engagementData);
        const engagementTypes = Object.keys(engagementData[weeks[0]]);
        datasets = engagementTypes.map((engType, id) => {
            return {
                name: engType, 
                data: Object.values(engagementData).map((eng) => eng[engType]), 
                backgroundColor: datasetColours[id]
            }
        });
    
        chartOptions = {
            chart: {
                id: "basic-bar",
                foreColor: 'black',
                zoom: {
                    type: 'x',
                    enabled: true,
                    autoScaleYaxis: true
                  },
                toolbar: {
                    autoSelected: 'zoom',
                    tools:{
                        download: false,
                    }
                }
            }, 
            plotOptions: {
                bar: {
                  dataLabels: {
                    position: "top" // top, center, bottom
                  }
                }
              },
              dataLabels:{
                enabled:false
              },
              tooltip: {
                enabled: true,
                shared: false,
                intersect: true,
                followCursor: true,
                theme: "dark",
                onDatasetHover: {
                  highlightDataSeries: false
                },
              },
            xaxis: {
                categories: weeks,
                tickPlacement: 'on'
            },
            legend: {
                horizontalAlign: "left", 
                position: "top",
            }
        };
    }

    return (<Card>
            <CardContent style={{overflow: "auto"}}>
                <Typography variant='h5' style={{marginBottom: "20px"}}>Total Engagement Over Weeks</Typography>
                {engagementData.length !== 0 && <Chart
                    options={chartOptions}
                    series={datasets}
                    type="bar"
                    width={"100%"}//{`${datasets[0].data.length*5*50}px`}
                    height={500}
                />}
            </CardContent>
        </Card>);
}

function getEngagementData(data)
{
    const currYear = (new Date()).getFullYear().toString();
    const engagement = {};

    let key;
    data.reddit.forEach((rd) => {
        const splt = rd["created_YY_week"].split("_");
        if(splt[0] === currYear)
        {
            key = `Week ${parseInt(splt[1])}`;
            engagement[key] = {Posts: parseInt(rd["no_posts"])};
        }
    });
    
    data.twitter.forEach((tw) => {
        const splt = tw["year_week"].split('_');
        if(splt[0] === currYear)
        {
            key = `Week ${parseInt(splt[1])}`;
            if(!engagement[key])
            {
                engagement[key] = {Posts: 0, Likes: tw["like_count"], Quotes: tw["quote_count"], Replies: tw["reply_count"], 
                Retweets: tw["retweet_count"]};
            }
            else
            {
                engagement[key].Likes = tw["like_count"];
                engagement[key].Quotes = tw["quote_count"];
                engagement[key].Replies = tw["reply_count"];
                engagement[key].Retweets = tw["retweet_count"];
            }
        }
    });

    return engagement;
}

export default DailyEngagement;