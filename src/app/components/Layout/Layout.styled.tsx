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
  background-color: #fff;
  /* for screen width>1200 */
  padding: 40px 40px 10px;
  @media (min-width: 1200px) {
    padding: 40px 120px 10px;
  }
  height: fit-content;
`
export const Content = styled(AntdContent)`
  display: flex;
  justify-content: center;
  height: 100%;
  padding: 20px 40px;
  min-height: 70vh;
  @media (min-width: 1200px) {
    padding: 20px 120px;
  }
`
