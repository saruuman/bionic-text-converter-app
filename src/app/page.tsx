"use client"

import React from "react"

import { Bionic } from "./components/Bionic/Bionic"
import { AppContext } from "./context/app"

export default function Page() {
  return (
    <AppContext.Provider
      value={{ title: "Bionic Reading App", headerHeight: 104 }}
    >
      <Bionic />
    </AppContext.Provider>
  )
}
