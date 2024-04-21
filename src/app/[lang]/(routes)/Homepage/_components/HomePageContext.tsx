"use client"
import React from "react";
import {
    Breadcrumbs,
    BreadcrumbsItem,
    Title,
  } from "@ui5/webcomponents-react";
  import { LineChart } from "@ui5/webcomponents-react-charts";

export default function HomePageContext() {
  return (
    <>
      <Breadcrumbs
        design="Standard"
        onItemClick={function _a() {}}
        separatorStyle="Slash"
      >
        <BreadcrumbsItem>Products</BreadcrumbsItem>
        <BreadcrumbsItem>Hardware</BreadcrumbsItem>
        <BreadcrumbsItem>Notebooks</BreadcrumbsItem>
      </Breadcrumbs>
      <Title level="H2">Homepage</Title>
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
            formatter: function _a() {},
            interval: 0,
          },
        ]}
        measures={[
          {
            accessor: "users",
            formatter: function _a() {},
            label: "Users",
            lineConfig: {
              type: "linear",
            },
          },
          {
            accessor: "sessions",
            formatter: function _a() {},
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
    </>
  );
}
