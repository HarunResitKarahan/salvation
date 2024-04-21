"use client";
import React from "react";
import { Breadcrumbs, BreadcrumbsItem, Title } from "@ui5/webcomponents-react";
import { LineChart, PieChart } from "@ui5/webcomponents-react-charts";

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
            formatter: function _a(e) { return e},
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
    </>
  );
}
