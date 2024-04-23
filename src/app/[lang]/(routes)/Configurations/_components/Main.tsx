"use client";
import {
  Bar,
  Breadcrumbs,
  BreadcrumbsItem,
  Button,
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
    <div className="w-full mt-2">
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
          <SideMenu></SideMenu>
        </Tab>
        <Tab text="Issues" icon="message-warning" />
        <Tab text="User Directory" icon="tnt/package-diagram" />
        <Tab text="System" icon="it-system" />
      </TabContainer>
    </div>
  );
}
