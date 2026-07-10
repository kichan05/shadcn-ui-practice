import {ComponentProps, FC, useState} from "react";
import styled from "styled-components";
import {MobileLayout} from "../layout/MobileLayout";

export type MainPageProps = {}

const MainPageStyle = styled.div`
`

export const MainPage: FC<MainPageProps> = () => {
    const [name, setName] = useState("")
    return (
        <MobileLayout>
            <MainPageStyle>
                메인페이지
            </MainPageStyle>
        </MobileLayout>
    );
};