"use client";


import React, { useRef, useState } from "react";
import {  Button, Col, Input, message, Row } from "antd";
import * as Styled from "./Bionic.styled";

import { textVide } from "text-vide";


export const Bionic: React.FC =  () => {

	
	
	const [inputText, setInputText] = React.useState("");


	const [bionicText, setBionicText] = React.useState("");

	const handleInputChange = (e) => {
		setInputText(e.target.value);
	};
	

	
	
	// renderToStream(<MyDocument />);
	// const handleImportFile = (file) => {
	// 	const reader = new FileReader();
	// 	reader.onload = () => {
	// 		setInputText(reader.result);
	// 	};
	// 	reader.readAsText(file);
	// };


	const downloadPdf = () => {
		setIsDownloading(true);
		setIsDownloading(false);
	};
	

	const handleImportError = (error) => {
		message.error("Failed to import file");
	};

	const handleOCR = () => {
	// TODO: implement OCR processing
		message.info("OCR processing not implemented yet");
	};

	const handleGenerateBionic = () => {
		const bionicText= textVide(inputText).replace(/\n/g, "<br />");
		setBionicText(bionicText);

	};


	// const [pdfDoc, setPdfDoc] = React.useState<PDFDocument>();

	

	// create htmldiv ref

	const [isDownloading, setIsDownloading] = useState(false);



	return (
	// pass title and description to the layout
		
		<>
			<div >
				<div 
				>
					<Row gutter={16} style={{ marginBottom: "1rem" }}>
						<Col span={24}>
							<Input.TextArea
								value={inputText}
								onChange={handleInputChange}
								placeholder="Enter text or import a file"
								autoSize={{ minRows: 6, maxRows: 10 }}
							/>
						</Col>
					</Row>
					{/* <Row gutter={16} style={{ marginBottom: "1rem" }}>
				<Col span={12}>
					<Upload
						accept=".txt,.pdf,.jpg,.jpeg,.png"
						maxCount={1}
						beforeUpload={() => false}
						onChange={(info) => {
							const { file } = info;
							if (file.status === "done") {
								handleImportFile(file.originFileObj);
							} else if (file.status === "error") {
								handleImportError(file.error);
							}
						}}
					>
						<Button icon={<UploadOutlined />}>Import file</Button>
					</Upload>
				</Col>
				<Col span={12}>
					<Button onClick={handleOCR}>Process picture with OCR</Button>
				</Col>
			</Row> */}
					<Row gutter={16} style={{ marginBottom: "1rem" }} justify="end">
						<Col style={{
							width: "fit-content",
							maxWidth:200,
						}} span={24}>
							<Button onClick={handleGenerateBionic}>Generate bionic version</Button>
						</Col>
					</Row>
					{bionicText&&
					<>
						<Row gutter={16} style={{ marginBottom: "1rem" }}>
							<Col span={24}>
								<Styled.Text
									dangerouslySetInnerHTML={{ __html: bionicText } }
								/>
							</Col>
							
						</Row>
						<Row>
							<Col span={24}>
								<Button loading={isDownloading} onClick={downloadPdf}>Download PDF</Button>
							</Col>
						</Row>
						{/* <Row gutter={16} style={{ marginBottom: "1rem" }}>
							<Col span={24}>
								<MyDocument />
							</Col>
						</Row> */}

					</>
					
					}
				</div>
			</div>
		</>
	);
};