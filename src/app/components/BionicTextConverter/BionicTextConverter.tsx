"use client"

import React from "react"
import { Form, message } from "antd"
import * as Styled from "./BionicTextConverter.styled"

import { getBionicText } from "@/lib/getBionicText"
import { Layout } from "../Layout"
import { Header } from "./Header"
import { BionicTextResult } from "./BionicTextResult"
import { BionicTextInput } from "./BionicTextInput"
import { FileScanner } from "./FileScanner"

export type FormValues = {
  inputText: string
}
export const BionicTextConverter: React.FC = () => {
  const [bionicText, setBionicText] = React.useState("")

  const [inputText, setInputText] = React.useState<string>("")

  const [isResultPage, setIsResultPage] = React.useState<boolean>(false)
  const [inputMode, setInputMode] = React.useState<"text" | "scan">("text")
  const changeInputMode = (mode: "text" | "scan") => {
    setInputMode(mode)
  }
  const [form] = Form.useForm<FormValues>()

  const generateBionicText = () => {
    if (!inputText) {
      switch (inputMode) {
        case "text":
          message.error("Please enter some text")
          break
        case "scan":
          message.error("Please scan a document or a picture")
          break
        default:
          break
      }
      return
    }
    const bionicText = getBionicText(inputText)
    setBionicText(bionicText)
    setIsResultPage(true)
    setInputText("")
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

  const onInputTextChange = (text: string) => {
    setInputText(text)
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
          onGenerateBionicText={generateBionicText}
          onClear={clearInput}
        />
      }
    >
      <Styled.Body align="center">
        {isResultPage ? (
          <BionicTextResult bionicText={bionicText} />
        ) : inputMode === "text" ? (
          <BionicTextInput onInputTextChange={onInputTextChange} form={form} />
        ) : (
          <FileScanner onInputTextChange={onInputTextChange} />
        )}
      </Styled.Body>
    </Layout>
  )
}
