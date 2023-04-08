import React from "react"
import { Form, FormInstance } from "antd"
import * as Styled from "./Bionic.styled"
import { FormValues } from "./Bionic"

type Props = {
  form: FormInstance<FormValues>
  onFormFinish: (values) => void
}
export const BionicTextInput: React.FC<Props> = ({ form, onFormFinish }) => {
  const ref = React.useRef<HTMLTextAreaElement>(null)

  const onBlur = () => {
    // @ts-ignore
    if (ref.current && !ref.current?.resizableTextArea?.textArea?.value) {
      ref.current.focus()
    }
  }
  return (
    <Styled.Form form={form} layout="vertical" onFinish={onFormFinish}>
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
