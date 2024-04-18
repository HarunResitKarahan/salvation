import 'server-only'
import type { Locale } from '@/app/[lang]/_i18n/i18n.config'

const dictionaries = {
  tr: () => import('@/app/[lang]/_i18n/dictionaries/tr.json').then(module => module.default),
  en: () => import('@/app/[lang]/_i18n/dictionaries/en.json').then(module => module.default)
}
export const getDictionary = async (locale: Locale) => dictionaries[locale]()