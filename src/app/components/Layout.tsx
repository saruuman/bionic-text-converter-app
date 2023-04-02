"use client"
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
      <Styled.Header>{title}</Styled.Header>
      <Styled.Layout.Content>{children}</Styled.Layout.Content>
    </Styled.Layout>
  )
}
