"use client"
import React from 'react'
import HomepageNavbar from './_components/HomepageNavbar'
import { Locale } from '@/app/[lang]/_i18n/i18n.config'
import { getDictionary } from '@/app/[lang]/_libs/dictionary'
import { Image } from "@nextui-org/react";
import LocaleSwitcher from '../../_components/locale-switcher';
import { Badge, Breadcrumbs, BreadcrumbsItem, Button, DynamicPage, DynamicPageHeader, DynamicPageTitle, FlexBox, Icon, Label, MessageStrip, ObjectStatus, Title, Wizard, WizardStep } from '@ui5/webcomponents-react';
import "@ui5/webcomponents-icons/dist/product.js";
import { signOut } from 'next-auth/react'

export default async function Homepage({ lang, session }: { lang: Locale, session: any }) {

  // const { navbar } = await getDictionary(lang)
  return (
    <>
      {/* <HomepageNavbar dictionary={navbar} lang={lang} /> */}
      <>{session?.user.name}</>
      <Image
        width={300}
        alt="NextUI hero Image"
        src={session?.user.image}
      />
      <LocaleSwitcher></LocaleSwitcher>
      <Button>Hello world!</Button>
      <Wizard>
        <WizardStep icon="product" titleText='Product Type' selected={false}>
          <Title>1.Product Type</Title>
          <MessageStrip>
            The Wizard control is supposed to break down large tasks, into smaller steps, easier for the user to
            work with.
          </MessageStrip>
          <Label wrappingType='Normal'>
            Sed fermentum, mi et tristique ullamcorper, sapien sapien faucibus
            sem, quis pretium nibh lorem malesuada diam. Nulla quis arcu aliquet, feugiat massa semper, volutpat
            diam. Nam vitae ante posuere, molestie neque sit amet, dapibus velit. Maecenas eleifend tempor
            lorem. Mauris vitae elementum mi, sed eleifend ligula. Nulla tempor vulputate dolor, nec dignissim
            quam convallis ut. Praesent vitae commodo felis, ut iaculis felis. Fusce quis eleifend sapien, eget
            facilisis nibh. Suspendisse est velit, scelerisque ut commodo eget, dignissim quis metus. Cras
            faucibus consequat gravida. Curabitur vitae quam felis. Phasellus ac leo eleifend, commodo tortor
            et, varius quam. Aliquam erat volutpat.
          </Label>
        </WizardStep>
      </Wizard>
      <Button onClick={(e) => {
        e.preventDefault();
        signOut()
      }}>Sign Out</Button>
    </>
  )
}
