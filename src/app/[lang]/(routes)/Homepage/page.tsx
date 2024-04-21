"use client";
import React, { useEffect } from "react";
import { Locale } from "@/app/[lang]/_i18n/i18n.config";
import { getDictionary } from "@/app/[lang]/_libs/dictionary";
import { Image } from "@nextui-org/react";
import LocaleSwitcher from "../../_components/locale-switcher";
import {
  Avatar,
  Button,
  FlexBox,
  FlexibleColumnLayout,
  Icon,
  Input,
  ShellBar,
  ShellBarItem,
  StandardListItem,
} from "@ui5/webcomponents-react";
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
    const sideBarElement = document.querySelector("body > main > div > ui5-flexible-column-layout").shadowRoot.querySelector("div > div.ui5-fcl-column.ui5-fcl-column-animation.ui5-fcl-column--start");
    // @ts-ignore
    sideBarElement.style.maxWidth = 'fit-content'
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
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
              >
                Sign Out
              </Button>
            </>
          }
        />
      </FlexBox>
    </>
  );
}
