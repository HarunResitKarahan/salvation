"use client";
import {
  Bar,
  Breadcrumbs,
  BreadcrumbsItem,
  Button,
  FlexBox,
  FlexibleColumnLayout,
  GroupHeaderListItem,
  List,
  ObjectStatus,
  StandardListItem,
  Tab,
  TabContainer,
  TabSeparator,
  Title,
} from "@ui5/webcomponents-react";
import React from "react";
import SideMenu from "../../Homepage/_components/SideMenu";

import "@ui5/webcomponents-icons-business-suite/dist/sub-project.js";
import "@ui5/webcomponents-icons-business-suite/dist/input.js";
import "@ui5/webcomponents-icons-business-suite/dist/operator.js";
import "@ui5/webcomponents-icons-tnt/dist/package-diagram.js";

import "@ui5/webcomponents-icons/dist/message-warning.js";
import "@ui5/webcomponents-icons/dist/it-system.js";
import "@ui5/webcomponents-icons/dist/settings.js";
import "@ui5/webcomponents-icons/dist/display-more.js";
import "@ui5/webcomponents-icons/dist/information.js";
import "@ui5/webcomponents-icons/dist/role.js";
import "@ui5/webcomponents-icons/dist/permission.js";
import "@ui5/webcomponents-icons/dist/key.js";

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
          <FlexBox className="h-full rounded">
            <List
              className="w-fit h-full min-w-fit mr-2 shadow bg-white rounded"
              growing="None"
              mode="None"
              // headerText=" "
              onItemClick={function _a() {}}
              onItemClose={function _a() {}}
              onItemDelete={function _a() {}}
              onItemToggle={function _a() {}}
              onLoadMore={function _a() {}}
              onSelectionChange={function _a() {}}
              separators="All"
            >
              <GroupHeaderListItem>General Configurations</GroupHeaderListItem>
              <StandardListItem navigated selected icon="display-more">
                Find more admin tools
              </StandardListItem>
              <GroupHeaderListItem>System Support</GroupHeaderListItem>

              <StandardListItem icon="information">
                System Info
              </StandardListItem>
              <StandardListItem icon="business-suite/input">
                Instrumentation
              </StandardListItem>

              <GroupHeaderListItem>Security</GroupHeaderListItem>
              <StandardListItem icon="role">Project Roles</StandardListItem>
              <StandardListItem icon="permission">
                Global Permission
              </StandardListItem>
              <StandardListItem icon="key">Password Policy</StandardListItem>
            </List>
            <FlexBox className="w-full shadow bg-white rounded">
              <FlexBox className="container md:mx-auto p-6">
                <Breadcrumbs
                  className="my-3"
                  design="NoCurrentPage"
                  onItemClick={function _a() {}}
                  separatorStyle="BackSlash"
                >
                  <BreadcrumbsItem>General Configurations</BreadcrumbsItem>
                  <BreadcrumbsItem>Find more admin tools</BreadcrumbsItem>
                </Breadcrumbs>
              </FlexBox>
            </FlexBox>
          </FlexBox>
        </Tab>
        <Tab text="Issues" icon="message-warning">
          <p>asd</p>
        </Tab>
        <Tab text="User Directory" icon="tnt/package-diagram" />
        <Tab text="System" icon="it-system" />
      </TabContainer>
    </div>
  );
}
