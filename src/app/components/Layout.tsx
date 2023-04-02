"use client"
import { Affix } from "antd"
import * as Styled from "./Layout.styled"
import React from "react"

// get header title from props
type Props = {
  title: string | React.ReactNode
  children: React.ReactNode
}
export const Layout: React.FC<Props> = ({ title, children }) => {
  return (
    <Styled.Layout>
      <Affix offsetTop={0}>
        <Styled.Header>
          <Styled.Title level={2}>{title}</Styled.Title>
        </Styled.Header>
      </Affix>

      <Styled.Content>{children}</Styled.Content>
    </Styled.Layout>
  )
}
