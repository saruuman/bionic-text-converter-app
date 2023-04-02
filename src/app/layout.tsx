"use client"
import "antd/dist/reset.css"

import React from "react"
import StyledComponentsRegistry from "@lib/registry"
import "@styles/ui.less"
// import font
import { Open_Sans } from "next/font/google"

const openSans = Open_Sans({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <head />

      <body className={openSans.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
