import React, { useContext } from "react"
import { Button, Space, Tooltip } from "antd"
import * as Styled from "./BionicTextConverter.styled"
import { AppContext } from "../../context/app"

import { getBionicText } from "@/lib"
import { CopyOutlined, Flex } from "@/ui"
import {
  ClearOutlined,
  CloseOutlined,
  FileTextOutlined,
  ScanOutlined,
} from "@ant-design/icons"

type InputModeTab = {
  key: "text" | "scan"
  tooltipTitle: string
  icon: React.ReactNode
  disabled?: boolean
}
type Props = {
  isResultPage: boolean
  inputMode: "text" | "scan"
  onInputModeChange: (mode: "text" | "scan") => void
  onCopyText: () => void
  onCloseResult: () => void
  onGenerateBionicText: () => void
  onClear: () => void
}
export const Header: React.FC<Props> = ({
  isResultPage,
  onGenerateBionicText,
  onCopyText,
  onCloseResult,
  onClear,
  inputMode,
  onInputModeChange,
}) => {
  const appContext = useContext(AppContext) as { title: string }
  const title = getBionicText(appContext.title)

  const inputTabs: InputModeTab[] = [
    {
      key: "text",
      tooltipTitle: "Write some text",
      icon: <FileTextOutlined />,
    },
    {
      key: "scan",
      tooltipTitle: "Scan a document or a picture (coming soon)",
      icon: <ScanOutlined />,
      disabled: true,
    },
  ]

  const InputModeTabs = () => (
    <Space size={16}>
      {inputTabs.map(({ key, tooltipTitle, icon, disabled }) => (
        <Tooltip title={tooltipTitle} placement="top" key={key}>
          <Styled.InputModeButton
            key={key}
            icon={icon}
            disabled={disabled}
            onClick={() => onInputModeChange(key)}
            type={inputMode === key ? "primary" : "default"}
          />
        </Tooltip>
      ))}
    </Space>
  )

  return (
    <>
      <Styled.Title>
        <div dangerouslySetInnerHTML={{ __html: title }} />
      </Styled.Title>
      <Flex align="center" justify="center">
        <Styled.HeaderInnerContainer
          justify={isResultPage ? "end" : "space-between"}
        >
          {!isResultPage && <InputModeTabs />}
          <Space size={16}>
            {isResultPage ? (
              <>
                <Tooltip title="Copy text as html" placement="top">
                  <Button onClick={onCopyText} icon={<CopyOutlined />} />
                </Tooltip>
                <Tooltip title="Go back to input" placement="top">
                  <Button onClick={onCloseResult} icon={<CloseOutlined />} />
                </Tooltip>
              </>
            ) : (
              <>
                <Tooltip title="Clear" placement="top">
                  <Button onClick={onClear} icon={<ClearOutlined />} />
                </Tooltip>
                <Button type="primary" onClick={onGenerateBionicText}>
                  Generate Bionic Text
                </Button>
              </>
            )}
          </Space>
        </Styled.HeaderInnerContainer>
      </Flex>
    </>
  )
}
