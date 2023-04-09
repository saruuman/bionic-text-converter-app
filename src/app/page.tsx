"use client"

import React from "react"

import { BionicTextConverter } from "./components/BionicTextConverter/BionicTextConverter"
import { AppContext } from "./context/app"

export default function Page() {
  return (
    <AppContext.Provider
      value={{ title: "Bionic Reading App", headerHeight: 104 }}
    >
      <BionicTextConverter />
    </AppContext.Provider>
  )
}
