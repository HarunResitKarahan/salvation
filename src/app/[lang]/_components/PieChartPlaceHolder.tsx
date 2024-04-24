"use client";
import { PieChart } from "@ui5/webcomponents-react-charts";
import React from "react";

export default function PieChartPlaceHolder() {
  return (
    <PieChart
      dataset={[]}
      dimension={{
        accessor: "name",
      }}
      measure={{
        accessor: "users",
      }}
      onClick={function _a() {}}
      onDataPointClick={function _a() {}}
      onLegendClick={function _a() {}}
    />
  );
}
