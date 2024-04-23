"use client";
import {
  Bar,
  Breadcrumbs,
  BreadcrumbsItem,
  Button,
  FlexibleColumnLayout,
  GroupHeaderListItem,
  List,
  StandardListItem,
  Tab,
  TabContainer,
  TabSeparator,
  Title,
} from "@ui5/webcomponents-react";
import React from "react";
import SideMenu from "../../Homepage/_components/SideMenu";
import "@ui5/webcomponents-icons-business-suite/dist/sub-project.js";
import "@ui5/webcomponents-icons-tnt/dist/package-diagram.js";
import "@ui5/webcomponents-icons/dist/message-warning.js";
import "@ui5/webcomponents-icons/dist/it-system.js";

export default function Main() {
  return (
    <div className="w-full h-full mt-2">
      {/* <Breadcrumbs
        className="my-3"
        design="Standard"
        onItemClick={function _a() {}}
        separatorStyle="GreaterThan"
      >
        <BreadcrumbsItem>Homepage</BreadcrumbsItem>
        <BreadcrumbsItem>Configurations</BreadcrumbsItem>
      </Breadcrumbs> */}
      <TabContainer
        className="h-full"
        contentBackgroundDesign="Solid"
        headerBackgroundDesign="Solid"
        onTabSelect={function _a() {}}
        tabLayout="Inline"
      >
        <Tab
          selected
          text="Projects"
          icon="business-suite/sub-project"
          className="pb-2"
        >
          <FlexibleColumnLayout
            layout="TwoColumnsMidExpanded"
            midColumn={
              <List headerText="Mid Column List">
                <StandardListItem>List Item 1</StandardListItem>
                <StandardListItem>List Item 2</StandardListItem>
                <StandardListItem>List Item 3</StandardListItem>
              </List>
            }
            onLayoutChange={function _a() {}}
            startColumn={
              <List
                // className="w-48"
                growing="None"
                mode="None"
                onItemClick={function _a() {}}
                onItemClose={function _a() {}}
                onItemDelete={function _a() {}}
                onItemToggle={function _a() {}}
                onLoadMore={function _a() {}}
                onSelectionChange={function _a() {}}
                separators="All"
              >
                <GroupHeaderListItem>
                  General Configurations
                </GroupHeaderListItem>
                <StandardListItem>List Item</StandardListItem>
                <StandardListItem>List Item</StandardListItem>
                <GroupHeaderListItem>GroupHeaderListItem 2</GroupHeaderListItem>
                <StandardListItem>List Item</StandardListItem>
              </List>
            }
          />
        </Tab>
        <Tab text="Issues" icon="message-warning" />
        <Tab text="User Directory" icon="tnt/package-diagram" />
        <Tab text="System" icon="it-system" />
      </TabContainer>
    </div>
  );
}
