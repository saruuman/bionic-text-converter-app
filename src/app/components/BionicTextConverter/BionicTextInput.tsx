import React from "react"
import { FormValues } from "./BionicTextConverter"

import * as Styled from "./BionicTextConverter.styled"
import { Form, FormInstance } from "antd"

type Props = {
  form: FormInstance<FormValues>
  onInputTextChange: (text: string) => void
}
export const BionicTextInput: React.FC<Props> = ({
  form,
  onInputTextChange,
}) => {
  const ref = React.useRef<HTMLTextAreaElement>(null)

  const onBlur = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (ref.current && !ref.current?.resizableTextArea?.textArea?.value) {
      ref.current.focus()
    }
  }

  const onValuesChange = (e) => {
    const { inputText } = e
    onInputTextChange(inputText)
  }

  return (
    <Styled.Form form={form} layout="vertical" onValuesChange={onValuesChange}>
      <Form.Item name="inputText">
        <Styled.TextArea
          ref={ref}
          autoFocus
          placeholder="Enter text here"
          autoSize={{ minRows: 17 }}
          onBlur={onBlur}
        />
      </Form.Item>
    </Styled.Form>
  )
}
