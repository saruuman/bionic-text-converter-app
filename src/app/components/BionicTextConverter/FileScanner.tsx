import React from "react"
import { Form, FormInstance, message } from "antd"
import { createWorker } from "tesseract.js"
import { InboxOutlined, LoadingOutlined } from "@ant-design/icons"
import * as Styled from "./BionicTextConverter.styled"
import { FormValues } from "./BionicTextConverter"

type Props = {
  form: FormInstance<FormValues>
  onFormFinish: (values: unknown) => void
}
export const FileScanner: React.FC<Props> = ({ form, onFormFinish }) => {
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
      form.setFieldsValue({ inputText: data.text })
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
    form.setFieldsValue({ inputText: "" })
    const { type } = file
    switch (type) {
      case "image/jpeg":
      case "image/png":
        extractTextFromImage(file)
        break
      default:
        message.error("File type not supported")
        form.resetFields()
        break
    }
    return true
  }

  const onRemove = () => {
    form.setFieldsValue({ inputText: "" })
  }
  return (
    <Styled.Form form={form} layout="vertical" onFinish={onFormFinish}>
      <Form.Item name="file">
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
      </Form.Item>
      <Form.Item name="inputText" hidden required />
    </Styled.Form>
  )
}
