import { Injectable } from '@angular/core';
import * as d3 from 'd3';
import { tip as d3tip } from "d3-v6-tip";


@Injectable({
  providedIn: 'root'
})
export class BubbleChartService {

  constructor() { }
  
  dataset = {
    "children": [
      {
        name: 'ABC',
        children: [
          { "Name": "Patent Issued", "Count": 16 },
          { "Name": "Present Invension", "Count": 19 },
          { "Name": "Cardinal Health", "Count": 22 },
          { "Name": "Cardinal Health", "Count": 14 },
          { "Name": "Cardinal Health", "Count": 23 },
          { "Name": "Cardinal Health", "Count": 20 },
          { "Name": "Reporting Net", "Count": 15 },
          { "Name": "Alcon", "Count": 18 },
          { "Name": "Compositions", "Count": 14 },
          { "Name": "Study Evaluating", "Count": 12 },
          { "Name": "Net Sales", "Count": 18 },
          { "Name": "Sales", "Count": 24 },
         
         
         
        ]
      },

    ]
  };

  renderChart() {
    let diameter = 500;
    let height = 500;
    let width = 1000;
    let width2 = 200;
    let color = d3.scaleOrdinal(d3.schemeCategory10);

    let bubble = d3.pack()
      .size([width, height])
      .padding(10);

    let svg = d3.select('#chart')
      .append("svg")
    .attr("viewBox",`0 0 ${width} ${height}`)
    .attr("perserveAspectRatio","xMinYMid")
    .attr("width", width)
    .attr("height", height)
    .style("padding", "20px")
    .attr("class", "bubble");

    let nodes = d3.hierarchy(this.dataset)
      .sum(function (d: any) {
        return d.Count;
      });

    let node = svg.selectAll(".node")
      .data(bubble(nodes).descendants())
      .enter()
      .filter(function (d) {
        return !d.children
      })
      .append("g")
      .attr("class", "node")
      .attr("transform", function (d) {
        return "translate(" + d.x + "," + d.y + ")";
      }).style("fill", "#f8b0bf"
      // function (d, i: any) {
      //   return color(i);
      // }
      );

    // node.append("title")
    //   .text(function (d: any) {
    //     return d.data.Name + ": " + d.data.Count;
    //   })
    //   .attr('class','abc')
    //   .style("background","#000")

    

    node.append("circle")
      .attr("x", function (d) { return d.x; })
      .attr("y", function (d) { return d.y })
      .attr("r", function (d) {
        return d.r;
      })
      .style("fill", "#f8b0bf"
      // function (d, i: any) {
      //   return color(i);
      // }
      );

    node.append("text")
      .attr("dy", ".2em")
      .style("text-anchor", "middle")
      .text(function (d: any) {
        return d.data.Name.substring(0, d.r / 3);
      })
      .attr("font-family", "FSAlbert-Bold")
      .attr("font-size", function (d) {
        return d.r / 4;
      })
      .attr("fill", "#595959");
      
      node.append('text')
      .attr("dy", "1.3em")
      .style("text-anchor", "middle")
      .text(function (d: any) {
        return d.data.Count;
      })
      .attr("font-family", "FSAlbert-Bold")
      .attr("font-size", function (d) {
        return d.r / 4;
      })
      .attr("fill", "#595959");

    // d3.select(self.frameElement)
    //   .style("height", height + "px")
    //   .style("width", width2 + "px");


const tip = d3tip();

tip
  .attr("class", "d3-tip")
  .html( function(d:any) {
    return (
      `<span> ${d.target.__data__.data.Name}  : ${d.target.__data__.data.Count} </span>`
    )
  })

svg.call(tip)



svg.selectAll('g')
    .on('mouseover', function(event,d) {
          const element = d3.select(this)
                            .select('.particular-element');
          tip.show(event, d, element.node())
     })
    .on('mouseout', tip.hide)


  }



}
