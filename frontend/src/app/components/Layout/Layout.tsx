"use client"
import { Affix } from "antd"
import * as Styled from "./Layout.styled"
import React from "react"

type Props = {
  header: string | React.ReactNode
  children: React.ReactNode
}
export const Layout: React.FC<Props> = ({ header, children }) => {
  return (
    <Styled.Layout>
      <Affix offsetTop={0}>
        <Styled.Header>{header}</Styled.Header>
      </Affix>

      <Styled.Content>{children}</Styled.Content>
    </Styled.Layout>
  )
}
