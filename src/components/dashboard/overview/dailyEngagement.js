import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Card,
    CardActions,
    CardContent,
    Typography,
  } from '@mui/material';

function DailyEngagement(props)
{
    const [commentData, setCommentData] = useState([]);

    useEffect(() => {
        setCommentData(getCommentData(props.data));
    }, []);

    return (<Card>
            <CardContent>
                <Typography variant='h5' style={{marginBottom: "10px"}}>Total Engagement Over Weeks</Typography>
                {commentData.length !== 0 && <Bar
                    options={{
                        scales: {
                            xAxes: [{
                                barPercentage: 0.4
                            }]
                        }
                    }}
                    data={{
                        labels: Object.keys(commentData),
                        datasets: [{
                            label: "Engagement",
                            data: Object.values(commentData),
                            backgroundColor: "orange",
                        }]
                    }}
                />}
            </CardContent>
        </Card>);
}

function getCommentData(data)
{
    const currYear = (new Date()).getFullYear().toString();
    const engagement = {};

    data.reddit.forEach((rd) => {
        const splt = rd["created_YY_week"].split("_");
        if(splt[0] === currYear)
        {
            engagement[`Week ${parseInt(splt[1])}`] = parseInt(rd["no_posts"]);
        }
    });
    
    data.twitter.forEach((tw) => {
        const splt = tw["year_week"].split('_');
        if(splt[0] === currYear)
        {
            if(!engagement[`Week ${splt[1]}`])
                engagement[`Week ${splt[1]}`] = tw["like_count"] + tw["quote_count"] + tw["reply_count"] + tw["retweet_count"];
            else
                engagement[`Week ${splt[1]}`] += tw["like_count"] + tw["quote_count"] + tw["reply_count"] + tw["retweet_count"];
        }
    });

    return engagement;
}

export default DailyEngagement;

/*
const engagement = {};
    console.log(data)
    data.reddit.forEach((rd) => {
        if(!engagement[rd["created_YY_week"]])
            engagement[rd["created_YY_week"]] = parseInt(rd["no_posts"]);
        else
        engagement[rd["created_YY_week"]] += parseInt(rd["no_posts"]);
    });
    data.twitter.data.forEach((tw)=> {
        if(!engagement[tw["year_week"]])
            engagement[tw["year_week"]] = tw["like_count"] + tw["quote_count"] + tw["reply_count"] + tw["retweet_count"];
        else
            engagement[tw["year_week"]] += tw["like_count"] + tw["quote_count"] + tw["reply_count"] + tw["retweet_count"];
    });
*/