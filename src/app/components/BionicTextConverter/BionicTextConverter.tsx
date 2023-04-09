"use client"

import React from "react"
import { Form, message } from "antd"
import * as Styled from "./BionicTextConverter.styled"

import { getBionicText } from "@/lib/getBionicText"
import { Layout } from "../Layout"
import { Header } from "./Header"
import { BionicTextResult } from "./BionicTextResult"
import { BionicTextInput } from "./BionicTextInput"

export type FormValues = {
  inputText: string
}
export const BionicTextConverter: React.FC = () => {
  const [bionicText, setBionicText] = React.useState("")

  const [isResultPage, setIsResultPage] = React.useState<boolean>(false)
  const [inputMode, setInputMode] = React.useState<"text" | "scan">("text")
  const changeInputMode = (mode: "text" | "scan") => {
    setInputMode(mode)
  }
  const [form] = Form.useForm<FormValues>()

  const handleGenerateBionic = (values) => {
    const inputText = values.inputText
    if (!inputText) {
      message.warning("Please enter some text")
      return
    }
    const bionicText = getBionicText(inputText)
    setBionicText(bionicText)
    setIsResultPage(true)
  }
  const copyText = () => {
    navigator.clipboard.writeText(bionicText)
  }

  const closeResult = () => {
    clearInput()
    setIsResultPage(false)
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
          inputMode={inputMode}
          onInputModeChange={changeInputMode}
          isResultPage={isResultPage}
          onCloseResult={closeResult}
          onCopyText={copyText}
          onGenerateBionicText={form.submit}
          onClear={clearInput}
        />
      }
    >
      <Styled.Body direction="vertical" size={40}>
        {isResultPage ? (
          <BionicTextResult bionicText={bionicText} />
        ) : (
          <BionicTextInput form={form} onFormFinish={handleGenerateBionic} />
        )}
      </Styled.Body>
    </Layout>
  )
}
