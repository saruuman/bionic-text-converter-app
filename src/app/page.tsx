"use client";
// import "@styles/ui.less";


import React from "react";





import { Bionic } from "./components/Bionic";
import { Layout } from "./components/Layout";




// make props available to parent component

export default function Page() {
	return (
		<Layout title="Bionic Reading App">
			<Bionic />
		</Layout>
	);
}

