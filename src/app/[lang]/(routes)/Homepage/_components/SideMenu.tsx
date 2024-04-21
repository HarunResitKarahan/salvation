"use client";
import React from "react";
import {
  SideNavigation,
  SideNavigationItem,
  SideNavigationSubItem,
} from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/database.js";

export default function SideMenu() {
  return (
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
        <SideNavigationItem icon="database" text="Dashboard" />
        <SideNavigationItem expanded icon="group" text="People">
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
