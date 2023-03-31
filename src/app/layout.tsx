"use client";
import {  useState } from "react";
import { createCache, extractStyle, StyleProvider } from "@ant-design/cssinjs";
import { useServerInsertedHTML } from "next/navigation";
import "antd/dist/reset.css";
import React from "react";
import StyledComponentsRegistry from "./lib/registry";

export default function RootLayout({
	children
}: {
  children: React.ReactNode;
}) {
	return (
		<html lang="it">
			<head />
			<body>
					<StyledComponentsRegistry>{children}</StyledComponentsRegistry>
					
			</body>
		</html>
	);
}

