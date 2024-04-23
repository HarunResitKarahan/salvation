import React from "react";
import { Locale } from "@/app/[lang]/_i18n/i18n.config";
import { getDictionary } from "@/app/[lang]/_libs/dictionary";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import Navbar from "../../_components/Navbar";
import Main from "./_components/Main";

export default async function Configurations({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { navbar } = await getDictionary(lang);

  const session = await getServerSession(options);
  return (
    <>
      <Navbar lang={lang} session={session} />
      <Main></Main>
    </>
  );
}
