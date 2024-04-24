"use client"
import { PieChart } from "@ui5/webcomponents-react-charts";
import React from "react";

export default function HomepagePieChart() {
  return (
    <PieChart
      dataset={[
        {
          name: "January",
          users: 100,
        },
        {
          name: "February",
          users: 230,
        },
        {
          name: "March",
          users: 240,
        },
        {
          name: "April",
          users: 280,
        },
        {
          name: "May",
          users: 100,
        },
        {
          name: "June",
          users: 230,
        },
        {
          name: "July",
          users: 20,
        },
        {
          name: "August",
          users: 220,
        },
        {
          name: "September",
          users: 200,
        },
        {
          name: "October",
          users: 250,
        },
        {
          name: "November",
          users: 240,
        },
        {
          name: "December",
          users: 280,
        },
      ]}
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
