import {FC, useState} from "react";
import styled from "styled-components";
import {MobileLayout} from "../layout/MobileLayout";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export type MainPageProps = {}

const MainPageStyle = styled.div`
`

export const MainPage: FC<MainPageProps> = () => {
    const [name, setName] = useState("")
    return (
        <MobileLayout>
            <div className={"flex w-full max-w-sm flex-col gap-8 py-12"}>
                <Carousel>
                    <CarouselContent>
                        <CarouselItem className={"basis-1/3 bg-amber-600"}>1111</CarouselItem>
                        <CarouselItem className={"basis-1/3 bg-amber-600"}>2222</CarouselItem>
                        <CarouselItem className={"basis-1/3 bg-amber-600"}>3333</CarouselItem>
                        <CarouselItem className={"basis-1/3 bg-amber-600"}>4444</CarouselItem>
                        <CarouselItem className={"basis-1/3 bg-amber-600"}>5555</CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </MobileLayout>
    );
};