import * as d3 from "d3";
import countryData from "../../../assets/countries.json"
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
import {useRef, useState, useEffect} from "react";


const EarthWrapper = (props) => {
  const ref = useRef(null);
  let centered, world;
	let path = d3.geoPath();
  const colorScale = d3.scaleThreshold()
  .domain([10,100,1000,10000,15000,20000])
  .range(d3.schemeOrRd[7]);
  useEffect(()=>{
    let svg = d3.select(ref.current);
    const projection = d3.geoEquirectangular()
      .center([0,10])
    let data = new Map()
    svg.selectAll("*").remove();
    var tooltip = d3.select(".tooltip")
    .style("opacity", 0)
    .style("background-color", "white")
    .style("border", "solid")
    .style("border-width", "2px")
    .style("border-radius", "5px")
    .style("padding", "1rem")
    .style("color","black")

    Promise.all([
      d3.json("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson"),
      d3.json("/data/users_per_country.json")
      ]).then(function(loadData){
          let topo = loadData[0]
          let userData = loadData[1].data
          userData.forEach(d=>{
            data.set(d.country_code, +d.user_count)
          })
          // Draw the map
        	let mouseOver = function(event, d) {
            console.log(d)
          d3.selectAll(".Country")
            .transition()
            .duration(200)
            .style("opacity", .5)
            .style("stroke", "transparent");
          d3.select(this)
            .transition()
            .duration(200)
            .style("opacity", 1)
            .style("stroke", "black");
          tooltip
          .style("left", (event.pageX / 10) + "px")
          .style("top", (event.pageY /10) + "px")
          .html(`${d.properties.name} : ${Math.round((d.total))} users`)
          .transition().duration(400)
          .style('opacity', 1);
        }

        let mouseLeave = function() {
          d3.selectAll(".Country")
            .transition()
            .duration(200)
            .style("opacity", 1)
            .style("stroke", "transparent");
            tooltip
            .transition().duration(300)
            .style("opacity", 0);            
        }
        function click(d) {
          let x, y, k;
        
          if (d && centered !== d) {
            let centroid = path.centroid(d);
            x = -(centroid[0] * 6);
            y = (centroid[1] * 6);
            k = 3;
            centered = d;
          } else {
            x = 0;
            y = 0;
            k = 1;
            centered = null;
          }
        
          world.selectAll("path")
              .classed("active", centered && function(d) { return d === centered; });
        
              world.transition()
              .duration(750)
              .attr("transform", "translate(" + x + "," + y + ") scale(" + k + ")" );
          
        }
        world = svg.append("g").attr("class", "world");
        world
          .selectAll("path")
          .data(topo.features)
          .join("path")
            // draw each country
            .attr("d", d3.geoPath()
              .projection(projection)
            )
            // set the color of each country
            .attr("fill", function (d) {
              d.total = data.get(d.id.slice(0,2)) || 0;
              return colorScale(d.total);
            })
            .style("stroke", "transparent")
            .attr("class", function(d) {
              return "Country"
            })
            .attr("id", function(d) {
              return d.id
            })
            .style("opacity", 1)
            .on("mouseover", mouseOver)
            .on("mouseleave", mouseLeave)
            .on("click", click);
          


          const x = d3.scaleLinear()
            .domain([2.6, 75.1])
            .rangeRound([600, 860]);

          const legend = svg.append("g")
            .attr("id", "legend")
            .style("fill", "white");

          const legend_entry = legend.selectAll("g.legend")
            .data(colorScale.range().map(function(d) {
              d = colorScale.invertExtent(d);
              if (d[0] == null) d[0] = x.domain()[0];
              if (d[1] == null) d[1] = x.domain()[1];
              return d;
            }))
            .enter().append("g")
            .attr("class", "legend_entry");

          const ls_w = 12,
              ls_h = 12;

          legend_entry.append("rect")
            .attr("x", 20)
            .attr("y", function(d, i) {
              return 290+(i * ls_h) + 2*ls_h;
            })
            .attr("width", ls_w)
            .attr("height", ls_h)
            .style("fill", function(d) {
              return colorScale(d[0]);
            })
            .style("opacity", 0.8);

          legend_entry.append("text")
            .attr("x", 40)
            .attr("y", function(d, i) {
              return  290+(i * ls_h) + 2*ls_h + 8;
            })
            .text(function(d, i) {
              if (i === 0) return "< " + d[1];
              if (d[1] < d[0]) return d[0];
              return d[0] + " - " + d[1];
            })
            .style("font-size", "8px");

          legend.append("text").attr("x", 15).attr("y", 300).text("Active Users").style("font-size", "11px");
              })
  }, [])
  
    return (
        <Card {...props} sx={{pl:1}}>
        <CardHeader title="User Geolocation" />
        <svg ref={ref} viewBox="0 0 1000 550">
        {/* <g>
          {
            countryData.features.map(f => <path d={pathString(f)} style={{fill:"#004e98", opacity:"0.9",strokeWidth:"0.1",}}/>)
          }
        </g> */}
        </svg>
        </Card>
        
    )
  }
export default EarthWrapper;
