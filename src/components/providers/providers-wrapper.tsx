import { ReactNode } from "react"
import { UserProvider } from "@auth0/nextjs-auth0/client"
import { AbstractIntlMessages, NextIntlClientProvider } from "next-intl"
import { ThemeProvider } from "@/components/providers/theme-provider"

interface ProvidersWrapperProps {
  children: ReactNode
  locale: string
  messages: AbstractIntlMessages
}

export function ProvidersWrapper({
  children,
  locale,
  messages,
}: ProvidersWrapperProps) {
  return (
    <UserProvider>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </NextIntlClientProvider>
    </UserProvider>
  )
}