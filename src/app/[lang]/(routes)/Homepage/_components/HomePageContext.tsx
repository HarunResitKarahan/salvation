"use client";
import React from "react";
import {
  AnalyticalCardHeader,
  Bar,
  Breadcrumbs,
  BreadcrumbsItem,
  Button,
  Card,
  Grid,
  Icon,
  NumericSideIndicator,
  Text,
  Title,
  Toolbar,
  ToolbarSpacer,
} from "@ui5/webcomponents-react";
import {
  LineChart,
  PieChart,
  ScatterChart,
} from "@ui5/webcomponents-react-charts";
import "@ui5/webcomponents-icons/dist/customize.js";
import ViewMessage from "@/app/[lang]/_components/ViewMessage";

export default function HomePageContext() {
  return (
    <>
      <Bar
        className="rounded"
        design="Header"
        endContent={<Button icon="customize"></Button>}
        startContent={<Title level="H4">Dashboard</Title>}
      >
        {/* <span>Center Content</span> */}
      </Bar>
      <ViewMessage></ViewMessage>
      <Breadcrumbs
        className="my-3"
        design="Standard"
        onItemClick={function _a() {}}
        separatorStyle="GreaterThan"
      >
        {/* <BreadcrumbsItem>Products</BreadcrumbsItem> */}
        <BreadcrumbsItem>Homepage</BreadcrumbsItem>
        <BreadcrumbsItem>Dashboard</BreadcrumbsItem>
      </Breadcrumbs>
      {/* <Title level="H2">Homepage</Title>   */}
      <Card
        header={
          <AnalyticalCardHeader
            // description="Q1, 2018"
            // scale="K"
            state="Good"
            subtitleText="Proje Sayısı"
            titleText="Proje Dağılımı"
            // trend="Down"
            // unitOfMeasurement="EUR"
            value="130"
          >
            {/* <NumericSideIndicator number="100" titleText="Target" unit="k" /> */}
            {/* <NumericSideIndicator
              number="34.7"
              state="Good"
              titleText="Deviation"
              unit="%"
            /> */}
          </AnalyticalCardHeader>
        }
      >
        <ScatterChart
          dataset={[
            {
              data: [
                {
                  sessions: 330,
                  users: 120,
                  volume: 744,
                },
                {
                  sessions: 313,
                  users: 213,
                  volume: 881,
                },
                {
                  sessions: 424,
                  users: 241,
                  volume: 670,
                },
                {
                  sessions: 83,
                  users: 328,
                  volume: 630,
                },
                {
                  sessions: 302,
                  users: 102,
                  volume: 126,
                },
                {
                  sessions: 304,
                  users: 233,
                  volume: 880,
                },
                {
                  sessions: 47,
                  users: 202,
                  volume: 452,
                },
                {
                  sessions: 18,
                  users: 222,
                  volume: 500,
                },
                {
                  sessions: 362,
                  users: 210,
                  volume: 892,
                },
                {
                  sessions: 510,
                  users: 215,
                  volume: 2022,
                },
                {
                  sessions: 402,
                  users: 242,
                  volume: 70,
                },
                {
                  sessions: 10,
                  users: 20,
                  volume: 60,
                },
              ],
              label: "Users",
            },
            {
              data: [
                {
                  sessions: 300,
                  users: 100,
                  volume: 756,
                },
                {
                  sessions: 330,
                  users: 230,
                  volume: 880,
                },
                {
                  sessions: 404,
                  users: 240,
                  volume: 700,
                },
                {
                  sessions: 80,
                  users: 280,
                  volume: 604,
                },
                {
                  sessions: 300,
                  users: 100,
                  volume: 756,
                },
                {
                  sessions: 330,
                  users: 230,
                  volume: 880,
                },
                {
                  sessions: 470,
                  users: 20,
                  volume: 450,
                },
                {
                  sessions: 180,
                  users: 220,
                  volume: 5000,
                },
                {
                  sessions: 360,
                  users: 200,
                  volume: 879,
                },
                {
                  sessions: 500,
                  users: 250,
                  volume: 200,
                },
                {
                  sessions: 404,
                  users: 240,
                  volume: 700,
                },
                {
                  sessions: 80,
                  users: 280,
                  volume: 604,
                },
              ],
              label: "APJ",
              opacity: 0.6,
            },
          ]}
          measures={[
            {
              accessor: "users",
              axis: "x",
              label: "Users",
            },
            {
              accessor: "sessions",
              axis: "y",
              label: "Sessions",
            },
            {
              accessor: "volume",
              axis: "z",
            },
          ]}
          onClick={function _a() {}}
          onDataPointClick={function _a() {}}
          onLegendClick={function _a() {}}
        />
      </Card>

      <Grid defaultSpan="XL6 L6 M6 S12">
        <React.Fragment key=".0">
          <Card
            header={
              <AnalyticalCardHeader
                description="Q1, 2018"
                scale="K"
                state="Error"
                subtitleText="Revenue"
                titleText="Project Cloud Transformation"
                trend="Down"
                unitOfMeasurement="EUR"
                value="65.34"
              >
                <NumericSideIndicator
                  number="100"
                  titleText="Target"
                  unit="k"
                />
                <NumericSideIndicator
                  number="34.7"
                  state="Good"
                  titleText="Deviation"
                  unit="%"
                />
              </AnalyticalCardHeader>
            }
          >
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
          </Card>
          <Card
            header={
              <AnalyticalCardHeader
                description="Q1, 2018"
                scale="K"
                state="Error"
                subtitleText="Revenue"
                titleText="Project Cloud Transformation"
                trend="Down"
                unitOfMeasurement="EUR"
                value="65.34"
              >
                <NumericSideIndicator
                  number="100"
                  titleText="Target"
                  unit="k"
                />
                <NumericSideIndicator
                  number="34.7"
                  state="Good"
                  titleText="Deviation"
                  unit="%"
                />
              </AnalyticalCardHeader>
            }
          >
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
          </Card>
        </React.Fragment>
      </Grid>
    </>
  );
}
