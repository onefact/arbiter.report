import { Paper, Typography } from "@mui/material";
import {Chart} from "../../chart";

function TotalTweetsTrend({data})
{   
    const chartOptions = {
        chart: {
          height: 350,
          type: 'heatmap',
        },
        dataLabels: {
          enabled: true,
          style: {
            colors: ["#000000"]
          }
        },
        legend: {
            enables: true,
            showForSingleSeries: true,
            horizontalAlign: "left", 
            position: "top",
        },
        colors: ["#3e007d"],
        title: {
          text: 'Total Tweets (Url Titles Vs Days since first tweet)'
        },
      };
    
    const series = processData(data);
    console.log(series)
    
    return (<Paper style={{padding: "5px"}}>
            <Typography variant="h4" style={{marginBottom: "20px", marginLeft: "10px"}}> Tweet Trends</Typography>
            <Chart options={chartOptions} series={series} type="heatmap" height={350} foreColor="#000000" />
        </Paper>)
}

function processData(data)
{
    const urls = {};

    data.forEach((tweet) => {
        if(tweet["url_title"]) 
        {
            if(!urls[tweet["url_title"]])
            {
                const urlData = {last: parseInt(tweet["time_since_first_tweet"]), data: []};
                for(let i = 0; i < urlData.last; ++i)
                {
                    urlData.data.push(0);
                }
                urlData.data.push(parseInt(tweet["sum_of_total_conversations"]));
                urls[tweet["url_title"]] = urlData;
            }
            else
            {
                const urlData = urls[tweet["url_title"]];
                const curr = parseInt(tweet["time_since_first_tweet"]);
                for(let i = urlData.last+1; i < curr; ++i)
                {
                    urlData.data.push(0);
                }
                urlData.data.push(parseInt(tweet["sum_of_total_conversations"]));
                urlData.last = curr;
            }
        }
    });

    Object.keys(urls).forEach((url) => {
        if(urls[url].last != data[data.length-2]["time_since_first_tweet"])
        {
            for(let i = urls[url].last+1; i <= data[data.length-2]["time_since_first_tweet"]; ++i)
            {
                urls[url].data.push(0);
            }
        }
    });

    return Object.entries(urls).map((entry) => {return {name: entry[0], data: entry[1].data}});
}

export default TotalTweetsTrend;