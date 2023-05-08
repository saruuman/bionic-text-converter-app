"use client"

import React, { useCallback } from "react"
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
}
export const BionicTextConverter: React.FC = () => {
  const [bionicText, setBionicText] = React.useState("")
  const [isResultPage, setIsResultPage] = React.useState<boolean>(false)

  const [inputMode, setInputMode] = React.useState<"text" | "scan">("text")
  const [form] = Form.useForm<FormValues>()

  const clearInput = useCallback(() => {
    form.resetFields()
  }, [form])

  const changeInputMode = useCallback(
    (mode: "text" | "scan") => {
      clearInput()
      setInputMode(mode)
    },
    [clearInput],
  )
  const showEmptyInputErrorMessage = useCallback(() => {
    switch (inputMode) {
      case "text":
        message.error("Please enter some text")
        break
      case "scan":
        message.error("Please scan a document or a picture")
        break
    }
  }, [inputMode])

  const generateBionicText = useCallback(
    (value) => {
      const { inputText } = value
      const trimmedInputText = (inputText || "").trim()
      if (!trimmedInputText) {
        showEmptyInputErrorMessage()
        return
      }
      const bionicText = getBionicText(trimmedInputText)
      setBionicText(bionicText)
      setIsResultPage(true)
      clearInput()
    },
    [clearInput, showEmptyInputErrorMessage],
  )

  const copyText = () => {
    navigator.clipboard.writeText(bionicText)
  }

  const closeResult = useCallback(() => {
    clearInput()
    setIsResultPage(false)
  }, [clearInput])

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

  const submitForm = () => {
    form.validateFields().then((values) => {
      generateBionicText(values)
    })
  }

  return (
    <Layout
      header={
        <Header
          inputMode={inputMode}
          onInputModeChange={changeInputMode}
          isResultPage={isResultPage}
          onCloseResult={closeResult}
          onCopyText={copyText}
          onGenerateBionicText={submitForm}
          onClear={clearInput}
        />
      }
    >
      <Styled.Body align="start" key={inputMode}>
        {isResultPage ? (
          <BionicTextResult bionicText={bionicText} />
        ) : inputMode === "text" ? (
          <BionicTextInput form={form} />
        ) : (
          <FileUploader form={form} />
        )}
      </Styled.Body>
    </Layout>
  )
}
