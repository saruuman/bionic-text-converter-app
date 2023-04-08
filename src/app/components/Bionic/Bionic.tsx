"use client"

import React from "react"
import { Form } from "antd"
import * as Styled from "./Bionic.styled"

import { getBionicText } from "@/lib/getBionicText"
import { Layout } from "../Layout"
import { Header } from "./Header"
import { BionicTextResult } from "./BionicTextResult"
import { BionicTextInput } from "./BionicTextInput"

export type FormValues = {
  inputText: string
}
export const Bionic: React.FC = () => {
  const [bionicText, setBionicText] = React.useState("")

  const [mode, setMode] = React.useState<"input" | "result">("input")

  const [form] = Form.useForm<FormValues>()
  const handleGenerateBionic = (values) => {
    const inputText = values.inputText
    const bionicText = getBionicText(inputText)
    setBionicText(bionicText)
    setMode("result")
  }
  const copyText = () => {
    navigator.clipboard.writeText(bionicText)
  }

  const closeResult = () => {
    clearInput()
    setMode("input")
  }

  const clearInput = () => {
    form.resetFields()
  }
  // useEffect(() => {
  //   if (bionicText) {
  //     const result = document.getElementById("result")
  //     // scroll leaving 104 px from top
  //     if (result) {
  //       const marginTop = 104 // margin top in pixels
  //       const topOffset = result.offsetTop - marginTop
  //       window.scrollTo({ top: topOffset, behavior: "smooth" })
  //     }
  //   }
  // }, [bionicText])

  return (
    <Layout
      header={
        <Header
          mode={mode}
          onCloseResult={closeResult}
          onCopyText={copyText}
          onGenerateBionicText={form.submit}
          onClear={clearInput}
        />
      }
    >
      <Styled.Body direction="vertical" size={40}>
        {mode === "input" && (
          <BionicTextInput form={form} onFormFinish={handleGenerateBionic} />
        )}
        {mode === "result" && <BionicTextResult bionicText={bionicText} />}
      </Styled.Body>
    </Layout>
  )
}
