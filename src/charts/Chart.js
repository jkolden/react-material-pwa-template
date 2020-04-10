import React from "react";
import { useTheme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer
} from "recharts";
import Title from "../components/Title";

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const data = [
  createData("Sun", 4),
  createData("Mon", 8),
  createData("Tue", 9),
  createData("Wed", 8.5),
  createData("Thu", 12),
  createData("Fri", 9),
  createData("Sat", 0)
];

export default function Chart(props) {
  const { timecards } = props;
  const theme = useTheme();

  console.log(theme.palette.primary.main);

  const newData = timecards.map(timecard =>
    createData(timecard.card_title, timecard.hours)
  );

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Weekly Hours
      </Typography>
      <ResponsiveContainer>
        <LineChart
          data={newData}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: "middle", fill: theme.palette.text.primary }}
            >
              Hours
            </Label>
          </YAxis>
          <Line
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
