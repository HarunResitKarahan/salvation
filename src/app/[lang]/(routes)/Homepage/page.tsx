"use client";
import React, { useEffect } from "react";
import { Locale } from "@/app/[lang]/_i18n/i18n.config";
import { getDictionary } from "@/app/[lang]/_libs/dictionary";
import LocaleSwitcher from "../../_components/locale-switcher";
import "@ui5/webcomponents-icons/dist/product.js";
import { signOut } from "next-auth/react";
import SideMenu from "./_components/SideMenu";
import { FlexBox, Grid } from "@ui5/webcomponents-react";
import Dashboard from "./_components/Dashboard";
import { white } from "tailwindcss/colors";

export default function Homepage({
  lang,
  session,
}: {
  lang: Locale;
  session: any;
}) {
  return (
    <>
      <div className="flex w-full h-full pt-2 overflow-hidden">
        <div className="mr-2">
          <SideMenu></SideMenu>
        </div>
        <div
          className="sapBaseColor homepageContent w-full rounded overflow-scroll"
        >
          <div className="container md:mx-auto p-6">
            <Dashboard />
          </div>
        </div>
      </div>
    </>
  );
}
