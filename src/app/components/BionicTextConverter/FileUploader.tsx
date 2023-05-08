import React, { useEffect } from "react"
import { Divider, FormInstance, message, Space } from "antd"
import { createWorker } from "tesseract.js"
import { InboxOutlined, LoadingOutlined } from "@ant-design/icons"
import * as Styled from "./BionicTextConverter.styled"
import { FormValues } from "./BionicTextConverter"
import { RcFile } from "antd/es/upload"
import { BionicTextInput } from "./BionicTextInput"

type Props = {
  form: FormInstance<FormValues>
  submitForm: () => void
}
export const FileUploader: React.FC<Props> = ({ form, submitForm }) => {
  const [isLoading, setIsLoading] = React.useState(false)

  const [rawText, setRawText] = React.useState("")
  // TODO: handle multiple files
  const extractTextFromImage = (file: RcFile) => {
    const reader = new FileReader()
    reader.onload = async (e) => {
      setIsLoading(true)
      const worker = await createWorker({})
      await worker.load()
      // TODO: add support for other languages for better results
      await worker.loadLanguage("eng")
      await worker.initialize("eng")
      if (!e?.target?.result) return
      const { data } = await worker.recognize(
        e?.target?.result as Tesseract.ImageLike,
      )
      setRawText(data.text)
      await worker.terminate()
      setIsLoading(false)
    }
    reader.onerror = () => {
      message.error("Failed to process file")
      setIsLoading(false)
    }
    reader.readAsDataURL(file)
  }

  const extractTextFromTextFile = (file: RcFile) => {
    setIsLoading(true)
    const reader = new FileReader()
    reader.onload = (e) => {
      if (!e?.target?.result) return
      setRawText(e?.target?.result as string)
    }
    reader.onerror = () => {
      message.error("Failed to process file")
      setIsLoading(false)
    }
    reader.readAsText(file)
    setIsLoading(false)
  }

  // ...

  // const extractTextFromPdf = async (file: RcFile) => {}

  // TODO: handle other file types
  const beforeUpload = (file) => {
    const { type } = file
    switch (type) {
      case "image/jpeg":
      case "image/png":
        extractTextFromImage(file)
        break
      case "text/plain":
      case "text/html":
        extractTextFromTextFile(file)
        break
      // case "application/pdf":
      //   extractTextFromPdf(file)
      //   break
      default:
        message.error("File type not supported")
        setRawText("")
        form.resetFields()
        break
    }

    return false
  }
  const onRemove = () => {
    setRawText("")
    form.setFieldValue("inputText", "")
  }

  useEffect(() => {
    form.setFieldsValue({ inputText: rawText })
  }, [rawText, form])

  const onValuesChange = (changedValues: unknown, allValues: unknown) => {
    const { inputText } = allValues as FormValues
    setRawText(inputText || "")
  }

  return (
    <Space
      direction="vertical"
      size={24}
      style={{
        width: "100%",
      }}
    >
      <Styled.Dragger
        beforeUpload={beforeUpload}
        showUploadList={false}
        multiple={false}
        maxCount={1}
        onRemove={onRemove}
        // accept="image/* application/pdf text/html text/plain"
        accept="image/* text/html text/plain"
        disabled={isLoading}
      >
        <p className="ant-upload-drag-icon">
          {isLoading ? (
            <LoadingOutlined style={{ color: "#d9d9d9" }} />
          ) : (
            <InboxOutlined style={{ color: "black" }} />
          )}
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
      </Styled.Dragger>
      {rawText && (
        <>
          <Divider
            style={{
              margin: "0",
            }}
          />
          <BionicTextInput
            formItemLabel={"Text extracted from file:"}
            form={form}
            submitForm={submitForm}
            onValuesChange={onValuesChange}
          />
        </>
      )}
    </Space>
  )
}
