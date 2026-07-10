import {FC, ReactNode} from "react";
import styled from "styled-components";

export type BaseAppBarProps = {
    left?: ReactNode;
    center?: ReactNode;
    right?: ReactNode;
}
const BaseAppBarStyle = styled.div`
  padding: 16px;
  
  display: flex;
  align-items: center;
`
const LeftWrap = styled.div`
`
const CenterWrap = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`
const RightWrap = styled.div`
`
export const BaseAppBar: FC<BaseAppBarProps> = ({left, center, right}) => {
    return (
        <BaseAppBarStyle>
            <LeftWrap>{left}</LeftWrap>
            <CenterWrap>{center}</CenterWrap>
            <RightWrap>{right}</RightWrap>
        </BaseAppBarStyle>
    );
};