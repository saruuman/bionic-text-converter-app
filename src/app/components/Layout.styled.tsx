"use client"
import styled from "styled-components"
import { Layout as AntdLayout, Typography } from "antd"

const { Title: AntdTitle } = Typography
const { Header: AntdHeader, Content: AntdContent } = AntdLayout
export const Layout = styled(AntdLayout)`
  font-family: inherit;
  * {
    font-family: inherit;
  }
`

export const Header = styled(AntdHeader)`
  background-color: #fff;
  padding: 20px 80px;
  height: fit-content;
`
export const Title = styled(AntdTitle)`
  margin-bottom: 0px !important;
  font-weight: 400 !important;
`

export const Content = styled(AntdContent)`
  display: flex;
  justify-content: center;
  height: 100%;
  padding: 20px 80px;
`
