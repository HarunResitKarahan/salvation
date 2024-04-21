"use client";
import {
  Avatar,
  Icon,
  Input,
  ShellBar,
  ShellBarItem,
  StandardListItem,
} from "@ui5/webcomponents-react";
import React from "react";
import "@ui5/webcomponents-icons/dist/log.js";
import { Locale } from "@/app/[lang]/_i18n/i18n.config";

export default function Navbar({
  lang,
  session,
}: {
  lang: Locale;
  session: any;
}) {
  console.log("Navbar.tsx", session)
  return (
    <ShellBar
      className="mb-2"
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
      secondaryTitle="Fiori 3 Shell Bar"
      showCoPilot
      showNotifications
      showProductSwitch
    >
      <ShellBarItem icon="log" text="Oturumu Kapat" />
    </ShellBar>
  );
}
