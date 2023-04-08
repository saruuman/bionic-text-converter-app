import React, { useContext } from "react"
import { Button, Space, Tooltip } from "antd"
import * as Styled from "./Bionic.styled"
import { AppContext } from "../../context/app"

import { getBionicText } from "@/lib/getBionicText"
import { CopyOutlined, Flex } from "@/ui"
import { ClearOutlined, CloseOutlined } from "@ant-design/icons"

type Props = {
  mode: "input" | "result"
  onCopyText: () => void
  onCloseResult: () => void
  onGenerateBionicText: () => void
  onClear: () => void
}
export const Header: React.FC<Props> = ({
  mode,
  onGenerateBionicText,
  onCopyText,
  onCloseResult,
  onClear,
}) => {
  const appContext = useContext(AppContext) as { title: string }
  const title = getBionicText(appContext.title)
  return (
    <Flex align="center" justify="space-between">
      <Styled.Title level={2}>
        <div dangerouslySetInnerHTML={{ __html: title }} />
      </Styled.Title>
      <Space size={16}>
        {mode === "result" && (
          <>
            <Tooltip title="Copy text as html" placement="top">
              <Button onClick={onCopyText} icon={<CopyOutlined />} />
            </Tooltip>
            <Tooltip title="Go back to input" placement="top">
              <Button onClick={onCloseResult} icon={<CloseOutlined />} />
            </Tooltip>
          </>
        )}
        {mode === "input" && (
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
    </Flex>
  )
}
