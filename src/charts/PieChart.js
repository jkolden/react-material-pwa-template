import React, { PureComponent } from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Legend
} from "recharts";
import Typography from "@material-ui/core/Typography";

const data = [
  { name: "Internal Productivity", value: 400 },
  { name: "Dixon Industries", value: 300 },
  { name: "Milestone Billing", value: 300 },
  { name: "Administration", value: 100 }
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default class Example extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <Typography component="h2" variant="h6" gutterBottom>
          Year to Date by Project
        </Typography>
        <ResponsiveContainer>
          <PieChart onMouseEnter={this.onPieEnter}>
            <Pie
              data={data}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </React.Fragment>
    );
  }
}
