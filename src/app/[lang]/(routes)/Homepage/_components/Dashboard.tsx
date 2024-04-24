"use client";
import React, { useEffect } from "react";
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
  ValueColor,
} from "@ui5/webcomponents-react";
import { LineChart, PieChart, ScatterChart } from "@ui5/webcomponents-react-charts";
import "@ui5/webcomponents-icons/dist/customize.js";
import ViewMessage from "@/app/[lang]/_components/ViewMessage";
import dynamic from "next/dynamic";
import LineChartPlaceHolder from "@/app/[lang]/_components/LineChartPlaceHolder";
import ScatterChartPlaceHolder from "@/app/[lang]/_components/ScatterChartPlaceHolder";
import PieChartPlaceHolder from "@/app/[lang]/_components/PieChartPlaceHolder";
const HomepagePieChart = dynamic(
  () => import("./HomepageCharts/HomepagePieChart"),
  {
    loading: () => (
      <PieChartPlaceHolder/>
    ),
  }
);
const HomepageLineChart = dynamic(
  () => import("./HomepageCharts/HomepageLineChart"),
  {
    loading: () => (
      <LineChartPlaceHolder/>
    )
  }
);
const HomepageScatterChart = dynamic(
  () => import("./HomepageCharts/HomepageScatterChart"),
  {
    loading: () => (
      <ScatterChartPlaceHolder/>
    ),
  }
);

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
        <HomepageScatterChart />
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
                  state={ValueColor.Good}
                  titleText="Deviation"
                  unit="%"
                />
              </AnalyticalCardHeader>
            }
          >
            <HomepagePieChart></HomepagePieChart>
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
                  state={ValueColor.Good}
                  titleText="Deviation"
                  unit="%"
                />
              </AnalyticalCardHeader>
            }
          >
            <HomepageLineChart></HomepageLineChart>
          </Card>
        </React.Fragment>
      </Grid>
    </>
  );
}
