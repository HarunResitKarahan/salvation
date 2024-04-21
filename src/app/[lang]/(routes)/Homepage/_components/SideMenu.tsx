"use client";
import React from "react";
import {
  SideNavigation,
  SideNavigationItem,
  SideNavigationSubItem,
} from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/database.js";
import "@ui5/webcomponents-icons/dist/group.js";
import "@ui5/webcomponents-icons/dist/locate-me.js";
import "@ui5/webcomponents-icons/dist/calendar.js";
import "@ui5/webcomponents-icons/dist/chain-link.js";
import "@ui5/webcomponents-icons/dist/history.js";

export default function SideMenu() {
  return (
    <>
      <SideNavigation
        className="p-3"
        collapsed={false}
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
        <SideNavigationItem icon="database" text="Dashboard" />
        <SideNavigationItem expanded  icon="group" text="People" wholeItemToggleable={true}>
          <SideNavigationSubItem text="From My Team" />
          <SideNavigationSubItem text="From Other Teams" />
        </SideNavigationItem>
        <SideNavigationItem icon="locate-me" selected text="Locations" />
        <SideNavigationItem icon="calendar" text="Events">
          <SideNavigationSubItem text="Local" />
          <SideNavigationSubItem text="Others" />
        </SideNavigationItem>
      </SideNavigation>
    </>
  );
}
