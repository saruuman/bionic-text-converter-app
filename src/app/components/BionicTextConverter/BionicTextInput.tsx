import React from "react"
import { FormValues } from "./BionicTextConverter"

import * as Styled from "./BionicTextConverter.styled"
import { FormInstance } from "antd"

type Props = {
  form: FormInstance<FormValues>
  formItemLabel?: string
  onValuesChange?: (changedValues: unknown, values: unknown) => void
}
export const BionicTextInput: React.FC<Props> = ({
  form,
  formItemLabel,
  onValuesChange,
}) => {
  const ref = React.useRef<HTMLTextAreaElement>(null)

  const onBlur = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (ref.current && !ref.current?.resizableTextArea?.textArea?.value) {
      ref.current.focus()
    }
  }
  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      if (!e.shiftKey) {
        e.preventDefault()
        form.submit()
      }
    }
  }
  return (
    <Styled.Form
      form={form}
      layout="vertical"
      requiredMark="optional"
      autoFocus
      onValuesChange={onValuesChange}
    >
      <Styled.FormItem name="inputText" required label={formItemLabel}>
        <Styled.TextArea
          ref={ref}
          autoFocus
          placeholder="Enter text here"
          autoSize={{ minRows: 17 }}
          onBlur={onBlur}
          onKeyDown={onKeyDown}
        />
      </Styled.FormItem>
    </Styled.Form>
  )
}
