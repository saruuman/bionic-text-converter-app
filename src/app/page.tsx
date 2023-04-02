"use client"

import React from "react"

import { Bionic } from "./components/Bionic"
import { Layout } from "./components/Layout"
import { getBionicText } from "@/lib/getBionicText"

// make props available to parent component

export default function Page() {
  const title = getBionicText("Bionic Reading App")
  return (
    <Layout title={<div dangerouslySetInnerHTML={{ __html: title }} />}>
      <Bionic />
    </Layout>
  )
}
