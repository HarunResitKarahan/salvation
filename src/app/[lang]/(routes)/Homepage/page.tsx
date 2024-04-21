"use client";
import React, { useEffect } from "react";
import { Locale } from "@/app/[lang]/_i18n/i18n.config";
import { getDictionary } from "@/app/[lang]/_libs/dictionary";
import { Image } from "@nextui-org/react";
import LocaleSwitcher from "../../_components/locale-switcher";
import {
  Breadcrumbs,
  BreadcrumbsItem,
  FlexBox,
  FlexibleColumnLayout,
  Grid,
  Title,
} from "@ui5/webcomponents-react";
import { LineChart } from "@ui5/webcomponents-react-charts";
import "@ui5/webcomponents-icons/dist/product.js";
import { signOut } from "next-auth/react";
import {
  SideNavigation,
  SideNavigationItem,
  SideNavigationSubItem,
} from "@ui5/webcomponents-react";

export default function Homepage({
  lang,
  session,
}: {
  lang: Locale;
  session: any;
}) {
  // const { navbar } = await getDictionary(lang)
  useEffect(() => {
    // @ts-ignore
    const sideBarElement = document
      .querySelector("body > main > div > ui5-flexible-column-layout")
      .shadowRoot.querySelector(
        "div > div.ui5-fcl-column.ui5-fcl-column-animation.ui5-fcl-column--start"
      );
    // @ts-ignore
    const slicer = document
      .querySelector("body > main > div > ui5-flexible-column-layout")
      .shadowRoot.querySelector(
        "div > div.ui5-fcl-arrow-container.ui5-fcl-arrow-container-start"
      );
    // @ts-ignore
    const middleColumnElement = document
      .querySelector("body > main > div > ui5-flexible-column-layout")
      .shadowRoot.querySelector(
        "div > div.ui5-fcl-column.ui5-fcl-column-animation.ui5-fcl-column--middle"
      );
    // @ts-ignore
    sideBarElement.style.minWidth = "fit-content";
    // @ts-ignore
    sideBarElement.style.maxWidth = "fit-content";
    // @ts-ignore
    middleColumnElement.style.minWidth = "100%";
    // @ts-ignore
    slicer.style.minWidth = "1%";
    // @ts-ignore
    slicer.style.maxWidth = "fit-content";
  }, []);
  return (
    <>
      <FlexBox className="h-full" direction="Row">
        <FlexibleColumnLayout
          className="w-full h-full"
          layout="TwoColumnsMidExpanded"
          hideArrows={true}
          onLayoutChange={function _a() {}}
          startColumn={
            <>
              <SideNavigation
                className="w-full p-3"
                fixedItems={
                  <>
                    <SideNavigationItem
                      href="https://www.sap.com/index.html"
                      icon="chain-link"
                      target="_blank"
                      text="External Link"
                    />
                    <SideNavigationItem icon="history" text="History" />
                  </>
                }
                onSelectionChange={function _a() {}}
              >
                <SideNavigationItem icon="home" text="Home" />
                <SideNavigationItem expanded icon="group" text="People">
                  <SideNavigationSubItem text="From My Team" />
                  <SideNavigationSubItem text="From Other Teams" />
                </SideNavigationItem>
                <SideNavigationItem
                  icon="locate-me"
                  selected
                  text="Locations"
                />
                <SideNavigationItem icon="calendar" text="Events">
                  <SideNavigationSubItem text="Local" />
                  <SideNavigationSubItem text="Others" />
                </SideNavigationItem>
              </SideNavigation>
            </>
          }
          midColumn={
            <>
              <FlexBox
                style={{
                  backgroundColor: "#ffffff",
                }}
                className="h-full p-4"
                direction="Column"
              >
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
                <FlexBox>
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
                </FlexBox>
              </FlexBox>
            </>
          }
        />
      </FlexBox>
    </>
  );
}
