"use client"
import { Flex } from "@/ui"
import { Form as AntdForm, Button, Input, Upload } from "antd"
import styled from "styled-components"

const { Dragger: AntdDragger } = Upload
export const Text = styled.div`
  width: 100%;
  font-size: 18px;
  min-height: 100vh;
  /* scroll up */
  transition: transform 300ms cubic-bezier(0, 0, 0.2, 1) 0ms;
`
export const TextArea = styled(Input.TextArea)`
  background-color: inherit;
  border: none;
  box-shadow: none !important;
  padding: 0px;
  font-size: 18px;
`
export const Title = styled.div`
  margin-bottom: 0px !important;
  font-weight: 500 !important;
  position: absolute;
  font-size: 18px;
  top: 0;
  left: 15px;
`
export const Form = styled(AntdForm)`
  width: 100%;
`
export const Body = styled(Flex)`
  width: 100%;
  position: relative;
  max-width: 800px;
`
// Bionic.styled.js
// Bionic.styled.js
export const InputModeButton = styled(Button)``
export const HeaderInnerContainer = styled(Flex)`
  max-width: 800px;
  width: 100%;
`

export const Dragger = styled(AntdDragger)`
  width: 100%;
  .ant-upload-drag:hover {
    border-color: #5d5a5a !important;
  }
`
