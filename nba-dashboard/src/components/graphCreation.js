import React, { Component } from 'react';
import { getMainColor, getFullName, getSecondaryColor } from 'nba-color';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList, Label
} from 'recharts';


const CustomTooltip = ({ active, payload, label, all_data, all_stats} ) => {
  let team = all_data.team_stats.find(obj => {
    return obj.fullName === label
  })

  if (active) {
    return (
      <div className="custom-tooltip" style={{backgroundColor: 'whitesmoke', padding: "10px", borderRadius: "5px"}}>
        <h5 className="label">{`${label}`}</h5>
        <p>{`${all_data.glossary[all_stats[0]]}: ${payload[0].value} `}</p>
        <p>{`${all_data.glossary[all_stats[1]]}: ${payload[1].value} `}</p>
        <img src={team.logo} alt="teamlogo" style={{width: 50, height: 50}}/>
      </div>
    );
  }

  return null;
};

function processGraph(all_team_data, type_of_graph, stat_to_graph){

  if(type_of_graph === "doublebar"){
    let stats=stat_to_graph.split(" ");
    return(
      <BarChart
        width={1700}
        height={400}
        data={all_team_data.team_stats}
      >
        {/* <XAxis type="category" dataKey={"city"} tickLine={false} /> */}
        <XAxis type="category" interval={0} dataKey={"fullName"} xAxisId={0} tickLine={false} hide/>

        <XAxis type="category" dataKey={"fullName"} xAxisId={1} tickLine={false} hide/>

        {/* <YAxis domain={[dataMin => ((Math.floor(dataMin)-1)), dataMax => (Math.ceil(dataMax))]} /> */}
        {/* <YAxis domain={['dataMin', 'dataMax']} /> */}
        <YAxis interval="preserveStartEnd" />

        <Tooltip content={<CustomTooltip all_data={all_team_data} all_stats={stats} />} animationEasing="ease-in-out" />
        {/* <Tooltip /> */}
        {/* <Legend /> */}

        <Bar dataKey={stats[0]} 
          animationDuration={2000}
          barSize={20}
          barGap={0}
          xAxisId={0}
        >
        {
          all_team_data.team_stats.map((entry, index) => {
            //sets the background color of each bar to the main team color, and secondary color to font and border color
            return <Cell fill={getMainColor(entry.shortName).hex} stroke={"black"}/>;
          })
        }
          <LabelList dataKey="shortName" position='top' />
        </Bar>

        <Bar dataKey={stats[1]}
          animationDuration={2000}
          barSize={20}
          barGap={0}
          xAxisId={1}
        >
        {
          all_team_data.team_stats.map((entry, index) => {
            //sets the background color of each bar to the main team color, and secondary color to font and border color
            return <Cell fill={getSecondaryColor(entry.shortName).hex} stroke={"black"} />;
          })
        }
          {/* <LabelList dataKey="shortName" /> */}
        </Bar>
      </BarChart>
    );
  }

  if(type_of_graph === "bar"){
    return(
      <BarChart
        width={1700}
        height={400}
        data={all_team_data.team_stats}
        
      >
        {/* <XAxis type="category" dataKey={"city"} tickLine={false} /> */}
        <XAxis type="category" dataKey={"fullName"} tickLine={false} hide/>

        <YAxis interval="preserveStartEnd" domain={[dataMin => ((Math.floor(dataMin)-1)), dataMax => (Math.ceil(dataMax))]} />
        {/* <YAxis domain={['dataMin', 'dataMax']} /> */}
        {/* <YAxis interval="preserveStartEnd" /> */}

        <Tooltip />
        <Bar dataKey={stat_to_graph} 
        animationDuration={2000}
        >
        {
          all_team_data.team_stats.map((entry, index) => {
            //sets the background color of each bar to the main team color, and secondary color to font and border color
            return <Cell fill={getMainColor(entry.shortName).hex} stroke={getSecondaryColor(entry.shortName).hex}/>;
          })
        }
          <LabelList dataKey="shortName" />
        </Bar>
      </BarChart>
    );
  }
}


export default class GraphCreation extends Component {




  

    render() {
        return(
            

          processGraph(this.props.all_team_data, this.props.type_of_graph, this.props.stat_to_graph)

        )
    }

}