"use client";
import {  useState } from "react";
import { createCache, extractStyle, StyleProvider } from "@ant-design/cssinjs";
import { useServerInsertedHTML } from "next/navigation";
import "antd/dist/reset.css";
import React from "react";

export default function RootLayout({
	children
}: {
  children: React.ReactNode;
}) {
	return (
		<html lang="it">
			<head />
			<body>
				<StyleProviderLayout>{children}</StyleProviderLayout>
			</body>
		</html>
	);
}

function StyleProviderLayout({ children }: { children: React.ReactNode }) {
	const [cache] = useState(() => createCache());

	const render = <>{children}</>;

	useServerInsertedHTML(() => {
		return <script
			dangerouslySetInnerHTML={{
				__html: `</script>${extractStyle(cache)}<script>`,
			}}
		/>;
	});

	if (typeof window !== "undefined") {
		return render;
	}

	return <StyleProvider cache={cache}>{render}</StyleProvider>;
}