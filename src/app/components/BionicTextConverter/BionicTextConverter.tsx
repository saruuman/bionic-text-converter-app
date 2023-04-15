"use client"

import React from "react"
import { Form, message } from "antd"
import * as Styled from "./BionicTextConverter.styled"

import { getBionicText } from "@/lib/getBionicText"
import { Layout } from "../Layout"
import { Header } from "./Header"
import { BionicTextResult } from "./BionicTextResult"
import { BionicTextInput } from "./BionicTextInput"
import { FileUploader } from "./FileUploader"

export type FormValues = {
  inputText?: string
  file?: File
}
export const BionicTextConverter: React.FC = () => {
  const [bionicText, setBionicText] = React.useState("")
  const [isResultPage, setIsResultPage] = React.useState<boolean>(false)
  const [inputMode, setInputMode] = React.useState<"text" | "scan">("text")
  const changeInputMode = (mode: "text" | "scan") => {
    clearInput()
    setInputMode(mode)
  }
  const [form] = Form.useForm<FormValues>()

  const generateBionicText = (value) => {
    const { inputText } = value
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
    clearInput()
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
      <Styled.Body align="start">
        {isResultPage ? (
          <BionicTextResult bionicText={bionicText} />
        ) : inputMode === "text" ? (
          <BionicTextInput onFormFinish={generateBionicText} form={form} />
        ) : (
          <FileUploader onFormFinish={generateBionicText} form={form} />
        )}
      </Styled.Body>
    </Layout>
  )
}
