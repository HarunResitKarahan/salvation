"use client";
import React, { useEffect } from "react";
import { Locale } from "@/app/[lang]/_i18n/i18n.config";
import { getDictionary } from "@/app/[lang]/_libs/dictionary";
import LocaleSwitcher from "../../_components/locale-switcher";
import "@ui5/webcomponents-icons/dist/product.js";
import { signOut } from "next-auth/react";
import SideMenu from "./_components/SideMenu";
import { Grid } from "@ui5/webcomponents-react";
import HomePageContext from "./_components/HomePageContext";

export default function Homepage({
  lang,
  session,
}: {
  lang: Locale;
  session: any;
}) {
  // const { navbar } = await getDictionary(lang)
  // useEffect(() => {
  //   // @ts-ignore
  //   const sideBarElement = document
  //     .querySelector("body > main > div > ui5-flexible-column-layout")
  //     .shadowRoot.querySelector(
  //       "div > div.ui5-fcl-column.ui5-fcl-column-animation.ui5-fcl-column--start"
  //     );
  //   // @ts-ignore
  //   const slicer = document
  //     .querySelector("body > main > div > ui5-flexible-column-layout")
  //     .shadowRoot.querySelector(
  //       "div > div.ui5-fcl-arrow-container.ui5-fcl-arrow-container-start"
  //     );
  //   // @ts-ignore
  //   const middleColumnElement = document
  //     .querySelector("body > main > div > ui5-flexible-column-layout")
  //     .shadowRoot.querySelector(
  //       "div > div.ui5-fcl-column.ui5-fcl-column-animation.ui5-fcl-column--middle"
  //     );
  //   // @ts-ignore
  //   sideBarElement.style.minWidth = "fit-content";
  //   // @ts-ignore
  //   sideBarElement.style.maxWidth = "fit-content";
  //   // @ts-ignore
  //   middleColumnElement.style.minWidth = "100%";
  //   // @ts-ignore
  //   slicer.style.minWidth = "1%";
  //   // @ts-ignore
  //   slicer.style.maxWidth = "fit-content";
  // }, []);
  return (
    <>
      <div className="flex w-full h-full pt-2">
        <div className="mr-2">
        <SideMenu></SideMenu>
        </div>
        <div
        className="w-full rounded"
          style={{
            backgroundColor: "#fff",
          }}
        >
          <div className="container md:mx-auto p-6 overflow-scroll">
            <HomePageContext></HomePageContext>
          </div>
        </div>
      </div>
    </>
  );
}
