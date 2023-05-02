"use client"
import React from "react"
import { Layout } from "./components/Layout"
import { Button, Empty } from "antd"
import { FrownOutlined } from "@ant-design/icons"

export default function NotFound() {
  return (
    <Layout header="">
      <Empty
        image={
          <FrownOutlined
            style={{
              fontSize: 60,
            }}
          />
        }
        imageStyle={{ height: 60, marginBottom: 25 }}
        description="404 Not Found"
      >
        <Button type="primary" href="/">
          Go Home
        </Button>
      </Empty>
    </Layout>
  )
}
