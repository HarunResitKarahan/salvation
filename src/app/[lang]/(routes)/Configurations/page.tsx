import React from 'react'
import HomepageNavbar from "../Homepage/_components/HomepageNavbar";
import { Locale } from '@/app/[lang]/_i18n/i18n.config'
import { getDictionary } from '@/app/[lang]/_libs/dictionary'

export default async function Configurations({
    params: { lang },
  }: {
    params: { lang: Locale },
  }) {
    const { navbar } = await getDictionary(lang)
  return (
    <>
      <p>Configuration- deneme git</p>
    </>
  );
}
