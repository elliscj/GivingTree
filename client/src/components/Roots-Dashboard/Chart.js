import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Paper, CssBaseline } from "@material-ui/core";
import {
  CartesianGrid,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
} from "recharts";
import Title from "./Title";

// need to import donation data from database to display dynamically in chart

// Generate Sales Data
function createData(date, amount) {
  return { date, amount };
}

const data = [
  createData("00:00", 0),
  createData("03:00", 300),
  createData("06:00", 600),
  createData("09:00", 800),
  createData("12:00", 1500),
  createData("15:00", 2000),
  createData("18:00", 2400),
  createData("21:00", 200),
  createData("24:00", 600),
];

export default function Chart() {
  const theme = useTheme();

  return (
    <>
      <Title>Your Donations</Title>
      <LineChart
        width={1000}
        height={400}
        data={data}
        margin={{
          top: 16,
          right: 16,
          bottom: 0,
          left: 24,
        }}
      >
        <XAxis
          dataKey="time"
          stroke={theme.palette.text.secondary}
          style={theme.typography.body2}
        />
        <YAxis
          stroke={theme.palette.text.secondary}
          style={theme.typography.body2}
        >
          <Label
            angle={270}
            position="left"
            style={{
              textAnchor: "middle",
              fill: theme.palette.text.primary,
              ...theme.typography.body1,
            }}
          >
            Donations ($)
          </Label>
        </YAxis>
        <Line
          isAnimationActive={true}
          type="monotone"
          dataKey="amount"
          stroke="#00FF17"
          dot={true}
        />
        <CartesianGrid stroke="#bbb" strokeDasharray="5 5" />

        <Line type="monotone" dataKey="amout" stroke="#000000" />
      </LineChart>
    </>
  );
}
