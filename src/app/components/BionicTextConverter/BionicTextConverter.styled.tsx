"use client"
import { Flex } from "@/ui"
import { Form as AntdForm, Button, Input, Space } from "antd"
import styled from "styled-components"

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
export const InputModeButton = styled(Button)``
export const HeaderInnerContainer = styled(Flex)`
  max-width: 800px;
  width: 100%;
`
