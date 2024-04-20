import Homepage from "./Homepage/page";
import { Locale, i18n } from '@/app/[lang]/_i18n/i18n.config'
import { options } from "../../api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale },
}) {
  const session = await getServerSession(options);
  // const dbUser = db.user.current();
  // console.log("page.tsx", session)
  // console.log("page.tsx- dbUser", dbUser)
  return (
    <>
      <Homepage lang={lang} session={session}/>
    </>
  );
}
