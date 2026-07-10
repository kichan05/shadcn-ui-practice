import {FC, ReactNode} from "react";
import styled from "styled-components";
import {useElementSize} from "../hooks/UseElementSize";

export type MobileLayoutProps = {
    top: ReactNode;
    bottom: ReactNode;
    children: ReactNode;
    isBottomPadding?: boolean;
}

const MobileLayoutStyle = styled.div`
  max-width: 600px;
  margin: 0 auto;
  min-height: calc(var(--100vh));
`

const TopWrapper = styled.div`
  width: 100%;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
`

const TopContent = styled.div`
  width: 100%;
  max-width: ${p => p.theme.size.mobileMaxWidth};
  margin: 0 auto;

  background-color: #fff;
`

const BodyWrapper = styled.div<{ $topPadding: number; $bottomPadding: number }>`
  padding: ${p => `${p.$topPadding}px 0px ${p.$bottomPadding}px 0px`};
`

const BottomWrapper = styled.div`
  width: 100%;

  position: fixed;
  bottom: 0;
  left: 0;
`

const BottomContent = styled.div<{ isBottomPadding?: boolean }>`
  width: 100%;
  max-width: ${p => p.theme.size.mobileMaxWidth};
  margin: 0 auto;
  padding: ${p => p.isBottomPadding ? '0 16px 52px 16px' : '0px'};
`

export const MobileLayout: FC<MobileLayoutProps> = ({top, bottom, children, isBottomPadding}) => {
    const [topRef, , topHeight] = useElementSize()
    const [bottomRef, , bottomHeight] = useElementSize()

    return (
        <MobileLayoutStyle>
            <TopWrapper ref={topRef}>
                <TopContent>
                    {top}
                </TopContent>
            </TopWrapper>

            <BodyWrapper $topPadding={topHeight} $bottomPadding={bottomHeight}>
                {children}
            </BodyWrapper>

            <BottomWrapper
                ref={bottomRef}
            >
                <BottomContent
                    isBottomPadding={isBottomPadding}
                >
                    {bottom}
                </BottomContent>
            </BottomWrapper>
        </MobileLayoutStyle>
    );
};