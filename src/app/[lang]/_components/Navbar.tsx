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
} from "@ui5/webcomponents-react";
import React, { useRef } from "react";
import "@ui5/webcomponents-icons/dist/log.js";
import "@ui5/webcomponents-icons/dist/action-settings.js";
import "@ui5/webcomponents-icons/dist/nav-back.js";
import "@ui5/webcomponents-icons/dist/grid.js";
import { Locale } from "@/app/[lang]/_i18n/i18n.config";
import SignOutButton from "./SignOutButton";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";

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
  const router = useRouter()
  // @ts-ignore
  const handleShellBarSettingsClick = (e) => {
    // @ts-ignore
    router.push('/Configurations')
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
        onLogoClick={function _a() {router.push('/')}}
        onMenuItemClick={function _a() {}}
        onNotificationsClick={function _a() {}}
        onProductSwitchClick={function _a() {}}
        onProfileClick={function _a(e) {
          // @ts-ignore
          popoverProfileRef.current.showAt(e.detail.targetRef);
        }}
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
        // secondaryTitle="Fiori 3 Shell Bar"
        showNotifications
        // showProductSwitch
      >
        {/* <ShellBarItem icon="log" text="Oturumu Kapat" /> */}
        <ShellBarItem
          onClick={handleShellBarSettingsClick}
          icon="action-settings"
          text="Ayarlar"
        />
        <ShellBarItem
          icon="grid"
          text="Uygulamalar"
        />
      </ShellBar>
      <Popover ref={popoverRef} placementType="Bottom">
        Hello there!
      </Popover>
      <Popover ref={popoverProfileRef} initialFocus="" placementType="Bottom">
        <SignOutButton></SignOutButton>
      </Popover>
    </>
  );
}
