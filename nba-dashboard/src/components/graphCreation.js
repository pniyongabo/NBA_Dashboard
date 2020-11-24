import React, { Component } from 'react';
import { getMainColor, getFullName, getSecondaryColor } from 'nba-color';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList, Label
} from 'recharts';



export default class GraphCreation extends Component {

    render() {
        return(
            <BarChart
              width={1700}
              height={400}
              data={this.props.all_team_data.team_stats}

            >
              {/* <XAxis type="category" dataKey={"city"} tickLine={false} /> */}
              <XAxis type="category" interval={0} dataKey={"fullName"} tickLine={false} hide/>
              <YAxis domain={[dataMin => (Math.floor(dataMin)), dataMax => (Math.ceil(dataMax))]} />
              {/* <YAxis domain={['dataMin', 'dataMax']} /> */}
              <Tooltip />
              <Legend />
              <Bar dataKey="FGM" >
              {
                this.props.all_team_data.team_stats.map((entry, index) => {

                  //sets the background color of each bar to the main team color, and secondary color to font and border color
                  return <Cell fill={getMainColor(entry.shortName).hex} stroke={getSecondaryColor(entry.shortName).hex}/>;
                })
              }
              
                <LabelList dataKey="shortName" />
                
              </Bar>

            </BarChart>
        )
    }

}