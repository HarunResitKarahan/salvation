import React from 'react'
import HomepageNavbar from './_components/HomepageNavbar'
import { Locale } from '@/app/[lang]/_i18n/i18n.config'
import { getDictionary } from '@/app/[lang]/_libs/dictionary'
import {Image} from "@nextui-org/react";
import LocaleSwitcher from '../../_components/locale-switcher';

export default async function Homepage({ lang, session }: { lang: Locale, session: any }) {
  const { navbar } = await getDictionary(lang)
  return (
    <>
      <HomepageNavbar dictionary={navbar} lang={lang} />
      <>{session?.user.name}</>
      <Image
        width={300}
        alt="NextUI hero Image"
        src={session?.user.image}
      />
      <LocaleSwitcher></LocaleSwitcher>
    </>
  )
}
