import React from "react"
import styled from "styled-components"

type FlexProps = {
  direction?: "row" | "column"
  justify?: "start" | "end" | "center" | "space-between" | "space-around"
  align?: "start" | "end" | "center" | "stretch" | "baseline"
  wrap?: "nowrap" | "wrap" | "wrap-reverse"
  gap?: number
} & React.HTMLAttributes<HTMLDivElement>
export const Flex: React.FC<FlexProps> = (props) => {
  return <StyledFlex {...props} />
}

export const StyledFlex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "start"};
  align-items: ${(props) => props.align || "stretch"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  gap: ${(props) => props.gap || 0}px;
`
