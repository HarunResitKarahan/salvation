"use client"
import { LineChart } from "@ui5/webcomponents-react-charts";
import React from "react";

export default function HomepageLineChart() {
  return (
    <LineChart
      dataset={[
        {
          name: "January",
          sessions: 300,
          users: 100,
          volume: 756,
        },
        {
          name: "February",
          sessions: 330,
          users: 230,
          volume: 880,
        },
        {
          name: "March",
          sessions: 404,
          users: 240,
          volume: 700,
        },
        {
          name: "April",
          sessions: 80,
          users: 280,
          volume: 604,
        },
        {
          name: "May",
          sessions: 300,
          users: 100,
          volume: 756,
        },
        {
          name: "June",
          sessions: 330,
          users: 230,
          volume: 880,
        },
        {
          name: "July",
          sessions: 470,
          users: 20,
          volume: 450,
        },
        {
          name: "August",
          sessions: 180,
          users: 220,
          volume: 104,
        },
        {
          name: "September",
          sessions: 360,
          users: 200,
          volume: 879,
        },
        {
          name: "October",
          sessions: 500,
          users: 250,
          volume: 200,
        },
        {
          name: "November",
          sessions: 404,
          users: 240,
          volume: 700,
        },
        {
          name: "December",
          sessions: 80,
          users: 280,
          volume: 604,
        },
      ]}
      dimensions={[
        {
          accessor: "name",
        },
      ]}
      measures={[
        {
          accessor: "users",
          formatter: function _a(e) {
            return e;
          },
          label: "number of users",
        },
        {
          accessor: "sessions",
        },
        {
          accessor: "volume",
        },
      ]}
      onClick={function _a() {}}
      onDataPointClick={function _a() {}}
      onLegendClick={function _a() {}}
    />
  );
}
