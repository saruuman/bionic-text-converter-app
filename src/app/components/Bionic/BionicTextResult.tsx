"use client"

import React from "react"
import * as Styled from "./Bionic.styled"

type Props = {
  bionicText: string
}
export const BionicTextResult: React.FC<Props> = ({ bionicText }) => {
  return (
    <Styled.Text id="result" dangerouslySetInnerHTML={{ __html: bionicText }} />
  )
}
