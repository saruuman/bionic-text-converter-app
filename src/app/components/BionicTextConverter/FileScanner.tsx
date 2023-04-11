import React from "react"
import { message } from "antd"
import { createWorker } from "tesseract.js"
import { InboxOutlined, LoadingOutlined } from "@ant-design/icons"
import * as Styled from "./BionicTextConverter.styled"

type Props = {
  onInputTextChange: (text: string) => void
}
export const FileScanner: React.FC<Props> = ({ onInputTextChange }) => {
  const [isLoading, setIsLoading] = React.useState(false)

  // TODO: handle multiple files
  const extractTextFromImage = (file) => {
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
      onInputTextChange(data.text)
      await worker.terminate()
      setIsLoading(false)
    }
    reader.onerror = () => {
      message.error("Failed to process file")
    }
    reader.readAsDataURL(file)
  }

  // TODO: handle other file types
  const beforeUpload = (file) => {
    onInputTextChange("")
    const { type } = file
    switch (type) {
      case "image/jpeg":
      case "image/png":
        extractTextFromImage(file)
        break
      default:
        message.error("File type not supported")
        break
    }
    return true
  }

  const onRemove = () => {
    onInputTextChange("")
  }

  return (
    <Styled.Dragger
      beforeUpload={beforeUpload}
      showUploadList={true}
      multiple={false}
      maxCount={1}
      onRemove={onRemove}
      accept="image/* application/pdf text/html text/plain"
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
  )
}
