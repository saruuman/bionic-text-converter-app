"use client"
import { Form as AntdForm, Input, Space, Typography } from "antd"
import styled from "styled-components"

const { Title: AntdTitle } = Typography

export const Text = styled.div`
  width: 100%;
  font-size: 18px;
  min-height: 100vh;
  /* scroll up */
  transition: height 0.25s linear;
`
export const TextArea = styled(Input.TextArea)`
  background-color: inherit;
  border: none;
  box-shadow: none !important;
  padding: 0px;
  font-size: 18px;
`
export const Title = styled(AntdTitle)`
  margin-bottom: 0px !important;
  font-weight: 400 !important;
`

export const Form = styled(AntdForm)`
  width: 100%;
`
export const Body = styled(Space)`
  width: 100%;
  position: relative;
  align-items: center;
  .ant-space-item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 800px;
  }
`
// Bionic.styled.js
// Bionic.styled.js
