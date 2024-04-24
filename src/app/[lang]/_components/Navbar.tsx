"use client";
import {
  Avatar,
  Button,
  Icon,
  Input,
  List,
  Popover,
  ShellBar,
  ShellBarItem,
  StandardListItem,
  Switch,
} from "@ui5/webcomponents-react";
import React, { useEffect, useRef, useState } from "react";
import "@ui5/webcomponents-icons/dist/log.js";
import "@ui5/webcomponents-icons/dist/action-settings.js";
import "@ui5/webcomponents-icons/dist/nav-back.js";
import "@ui5/webcomponents-icons/dist/grid.js";
import { Locale } from "@/app/[lang]/_i18n/i18n.config";
import SignOutButton from "./SignOutButton";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";
import NotificationPopover from "./NotificationPopover";
import "@ui5/webcomponents/dist/Assets.js";
import "@ui5/webcomponents-fiori/dist/Assets.js";
import {
  getTheme,
  setTheme,
} from "@ui5/webcomponents-base/dist/config/Theme.js";

setTheme("sap_horizon");

export default function Navbar({
  lang,
  session,
}: {
  lang: Locale;
  session: any;
}) {
  console.log("Navbar.tsx", session);
  const popoverRef = useRef(null);
  const popoverProfileRef = useRef(null);
  const popoverPaletteRef = useRef(null);
  const popoverNotificationRef = useRef(null);
  const [ispopoverNotification, setIspopoverNotification] = useState(false);
  const router = useRouter();

  const themes = [
    { key: "sap_horizon", value: "Morning Horizon" },
    { key: "sap_horizon_dark", value: "Evening Horizon" },
    { key: "sap_fiori_3", value: "Quartz Light" },
    { key: "sap_fiori_3_dark", value: "Quartz Dark" },
  ];

  // @ts-ignore
  const handleShellBarSettingsClick = (e) => {
    // @ts-ignore
    router.push("/Configurations");
  };
  // @ts-ignore
  const handleShellBarPaletteClick = (e) => {
    // @ts-ignore
    const popoverElement = popoverPaletteRef.current;
    // @ts-ignore
    if (popoverElement.isOpen()) {
      // @ts-ignore
      popoverElement.close();
    } else {
      // @ts-ignore
      popoverElement.showAt(e.detail.targetRef);
    }
  };

  return (
    <>
      <ShellBar
        logo={
          <img
          // src="https://e7.pngegg.com/pngimages/36/323/png-clipart-business-triangle-company-logo-icon-express.png"
          />
        }
        menuItems={
          <>
            {/* <StandardListItem data-key="1">Menu Item 1</StandardListItem>
          <StandardListItem data-key="2">Menu Item 2</StandardListItem>
          <StandardListItem data-key="3">Menu Item 3</StandardListItem> */}
          </>
        }
        notificationsCount="2"
        onCoPilotClick={function _a() {}}
        onLogoClick={function _a() {
          router.push("/");
        }}
        onMenuItemClick={function _a() {}}
        onNotificationsClick={function _a(e) {
          const popoverElement = popoverNotificationRef.current;
          // @ts-ignore
          if (popoverElement.isOpen()) {
            // @ts-ignore
            popoverElement.close();
          } else {
            // @ts-ignore
            popoverElement.showAt(e.detail.targetRef);
          }
        }}
        onProductSwitchClick={function _a() {}}
        onProfileClick={function _a(e) {
          // @ts-ignore
          const popoverElement = popoverProfileRef.current;
          // @ts-ignore
          if (popoverElement.isOpen()) {
            // @ts-ignore
            popoverElement.close();
          } else {
            // @ts-ignore
            popoverElement.showAt(e.detail.targetRef);
          }
        }}
        onSearchButtonClick={function _a() {}}
        primaryTitle="Project Salvation"
        profile={<Avatar>{/* <img src={session.user.image} /> */}</Avatar>}
        searchField={
          <Input icon={<Icon interactive name="search" />} showClearIcon />
        }
        // startButton={
        //   <Button icon="nav-back"></Button>
        // }
        // secondaryTitle="Fiori 3 Shell Bar"
        showNotifications
        // showProductSwitch
      >
        {/* <ShellBarItem icon="log" text="Oturumu Kapat" /> */}
        <ShellBarItem
          onClick={handleShellBarPaletteClick}
          icon="palette"
          text="Tema"
        />
        <ShellBarItem
          onClick={handleShellBarSettingsClick}
          icon="action-settings"
          text="Ayarlar"
        />
        <ShellBarItem icon="grid" text="Uygulamalar" />
      </ShellBar>
      <Popover
        className="noPadding"
        ref={popoverPaletteRef}
        placementType="Left"
      >
        <List
          className="noPadding"
          growing="None"
          mode="SingleSelect"
          onItemClick={function _a() {}}
          onItemClose={function _a() {}}
          onItemDelete={function _a() {}}
          onItemToggle={function _a() {}}
          onLoadMore={function _a() {}}
          onSelectionChange={function _a(e) {
            const { targetItem } = e.detail,
              selectedTheme = targetItem.dataset.key;
            // @ts-ignore
            setTheme(selectedTheme);
          }}
          separators="All"
        >
          {themes.map((element) => (
            <StandardListItem key={element.key} data-key={element.key}>
              {element.value}
            </StandardListItem>
          ))}
        </List>
      </Popover>
      <NotificationPopover
        popoverRef={popoverNotificationRef}
      ></NotificationPopover>
      <Popover ref={popoverProfileRef} placementType="Bottom">
        <SignOutButton></SignOutButton>
      </Popover>
    </>
  );
}
