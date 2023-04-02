"use client"

import React, { useState } from "react"
import { Button, Col, Form, Row } from "antd"
import * as Styled from "./Bionic.styled"

import { getBionicText } from "@/lib/getBionicText"

type FormValues = {
  inputText: string
}
export const Bionic: React.FC = () => {
  const [bionicText, setBionicText] = React.useState("")

  const [form] = Form.useForm<FormValues>()
  // renderToStream(<MyDocument />);
  // const handleImportFile = (file) => {
  // 	const reader = new FileReader();
  // 	reader.onload = () => {
  // 		setInputText(reader.result);
  // 	};
  // 	reader.readAsText(file);
  // };

  const downloadPdf = () => {
    setIsDownloading(true)
    setIsDownloading(false)
  }

  // const handleImportError = (error) => {
  // 	message.error("Failed to import file");
  // };

  // const handleOCR = () => {
  // // TODO: implement OCR processing
  // 	message.info("OCR processing not implemented yet");
  // };

  const handleGenerateBionic = (values) => {
    const inputText = values.inputText
    const bionicText = getBionicText(inputText)
    setBionicText(bionicText)
  }

  // const [pdfDoc, setPdfDoc] = React.useState<PDFDocument>();
  const [isDownloading, setIsDownloading] = useState(false)

  return (
    <div
      style={{
        maxWidth: "800px",
        width: "100%",
      }}
    >
      <Form form={form} layout="vertical" onFinish={handleGenerateBionic}>
        <Form.Item name="inputText" label="Your text">
          <Styled.TextArea
            placeholder="Enter text here"
            // not resizable
            autoSize={{ minRows: 10 }}
          />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Generate Bionic Text
        </Button>
      </Form>

      {bionicText && (
        <>
          <Row gutter={16} style={{ marginBottom: "1rem" }}>
            <Col span={24}>
              <Styled.Text dangerouslySetInnerHTML={{ __html: bionicText }} />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Button loading={isDownloading} onClick={downloadPdf}>
                Download PDF
              </Button>
            </Col>
          </Row>
          {/* <Row gutter={16} style={{ marginBottom: "1rem" }}>
							<Col span={24}>
								<MyDocument />
							</Col>
						</Row> */}
        </>
      )}
    </div>
  )
}
