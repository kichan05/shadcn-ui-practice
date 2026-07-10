import styled, {css} from "styled-components";

type FlexProps = {
    $direction?: "row" | "column";
    $gap?: string;
    $alignItems?: "center" | "flex-start" | "flex-end" | "stretch" | "baseline";
    $justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
    $flexWrap?: "wrap" | "no-wrap"
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  ${(p: FlexProps) => {
    const {
      $direction = "row",
      $gap = "0px",
      $alignItems = "center",
      $justifyContent = "flex-start",
      $flexWrap = "no-wrap",
    } = p

    return (
            css`
              flex-direction: ${$direction};
              gap: ${$gap};
              align-items: ${$alignItems};
              justify-content: ${$justifyContent};
              flex-wrap: ${$flexWrap};
            `
    )
  }}
`