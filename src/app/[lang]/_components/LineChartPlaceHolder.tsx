"use client"
import { LineChart } from "@ui5/webcomponents-react-charts";
import React from "react";

export default function LineChartPlaceHolder() {
  return (
    <LineChart
      dataset={[]}
      dimensions={[
        {
          accessor: "name",
          interval: 0,
        },
      ]}
      measures={[
        {
          accessor: "users",
          label: "Users",
          lineConfig: {
            type: "linear",
          },
        },
        {
          accessor: "sessions",
          hideDataLabel: true,
          label: "Active Sessions",
        },
        {
          accessor: "volume",
          label: "Vol.",
        },
      ]}
      onClick={function _a() {}}
      onDataPointClick={function _a() {}}
      onLegendClick={function _a() {}}
    />
  );
}
