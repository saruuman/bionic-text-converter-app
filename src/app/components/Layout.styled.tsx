"use client"
import styled from "styled-components"
import { Layout as AntdLayout } from "antd"

const { Header: AntdHeader, Content: AntdContent } = AntdLayout
export const Layout = styled(AntdLayout)`
  font-family: inherit;
  * {
    font-family: inherit;
  }
`

export const Header = styled(AntdHeader)`
  background-color: #fff !important;
  padding: 0 80px;
`

export const Content = styled(AntdContent)`
  padding: 80px 80px 0px;
`
