"use client";
import {
  Avatar,
  Button,
  Icon,
  Input,
  Popover,
  ShellBar,
  ShellBarItem,
  StandardListItem,
} from "@ui5/webcomponents-react";
import React, { useRef } from "react";
import "@ui5/webcomponents-icons/dist/log.js";
import "@ui5/webcomponents-icons/dist/action-settings.js";
import "@ui5/webcomponents-icons/dist/nav-back.js";
import "@ui5/webcomponents-icons/dist/grid.js";
import { Locale } from "@/app/[lang]/_i18n/i18n.config";

export default function Navbar({
  lang,
  session,
}: {
  lang: Locale;
  session: any;
}) {
  console.log("Navbar.tsx", session);
  const popoverRef = useRef(null);
  // @ts-ignore
  const handleShellBarItemClick = (e) => {
    // @ts-ignore
    popoverRef.current.showAt(e.detail.targetRef);
  };
  return (
    <>
      <ShellBar
        logo={
          <img
            alt="SAP Logo"
            src="https://e7.pngegg.com/pngimages/36/323/png-clipart-business-triangle-company-logo-icon-express.png"
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
        onLogoClick={function _a() {}}
        onMenuItemClick={function _a() {}}
        onNotificationsClick={function _a() {}}
        onProductSwitchClick={function _a() {}}
        onProfileClick={function _a() {}}
        onSearchButtonClick={function _a() {}}
        primaryTitle="Project Salvation"
        profile={
          <Avatar>
            <img src={session.user.image} />
          </Avatar>
        }
        searchField={
          <Input icon={<Icon interactive name="search" />} showClearIcon />
        }
        // startButton={
        //   <Button icon="nav-back"></Button>
        // }
        secondaryTitle="Fiori 3 Shell Bar"
        showNotifications
        // showProductSwitch
      >
        {/* <ShellBarItem icon="log" text="Oturumu Kapat" /> */}
        <ShellBarItem onClick={handleShellBarItemClick} icon="action-settings" text="Ayarlar" />
        <ShellBarItem onClick={handleShellBarItemClick} icon="grid" text="Uygulamalar" />
      </ShellBar>
      <Popover ref={popoverRef} placementType="Bottom">Hello there!</Popover>
    </>
  );
}
