import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Legend,
  CartesianGrid
} from "recharts";
import Typography from "@material-ui/core/Typography";

const data = [
  {
    name: "January",
    Chargeable: 120,
    Internal: 40
  },
  {
    name: "February",
    Chargeable: 150,
    Internal: 10
  },
  {
    name: "March",
    Chargeable: 150,
    Internal: 30
  }
];

export default class ChargeableChart extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <Typography component="h2" variant="h6" gutterBottom>
          Chargeable Hours by Month
        </Typography>
        <ResponsiveContainer>
          <BarChart width={500} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Chargeable" fill="#8884d8" />
            <Bar dataKey="Internal" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </React.Fragment>
    );
  }
}
