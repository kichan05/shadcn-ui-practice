import {faker} from "@faker-js/faker";
import {motion} from "motion/react";
import {useRef, useState} from "react";
import type {FC, PointerEvent} from "react";
import styled from "styled-components";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export type MainPageProps = Record<string, never>

type Production = {
    title: string;
    filmTitle: string;
    image: string;
};

const playIcon = "https://www.figma.com/api/mcp/asset/36f8c91b-4963-43fb-9dc3-c6a1c52f6b85.svg";
const instagramIcon = "https://www.figma.com/api/mcp/asset/7a564d5d-2b08-4426-9765-10e881c9f9f4.svg";
const productionImages : Production[] = Array.from({length: 8}, () => ({
    title: faker.lorem.words(2),
    filmTitle: faker.lorem.words(3),
    image: faker.image.url({width: 800, height: 1060})
}));
const intermediateImages : Production[] = Array.from({length: 8}, () => ({
    title: faker.lorem.words(2),
    filmTitle: faker.lorem.words(3),
    image: faker.image.url({width: 1200, height: 675})
}));

const Page = styled.main`
    min-height: 100vh;
    overflow: hidden;
    background: #fcf9f4;
    color: #727272;
`;

const Header = styled.header`
    height: 95px;
    padding: 0 7.7%;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    background: #fff;
    position: relative;
    z-index: 1;
`;

const Navigation = styled.nav`
    display: flex;
    gap: clamp(20px, 3.5vw, 52px);
    align-items: center;

    a {
        color: #8e8e93;
        font-size: 14px;
        font-weight: 600;
        text-decoration: none;
    }
`;

const Brand = styled.a`
    color: #727272;
    font-size: 22px;
    font-weight: 700;
    text-decoration: none;
`;

const InstagramLink = styled.a`
    justify-self: end;
    width: 28px;
    height: 28px;
    display: grid;
    place-items: center;

    img {
        width: 24px;
        height: 24px;
    }
`;

const HeaderInstagramLink = styled(InstagramLink)`
    width: 39px;
    height: 39px;

    img {
        width: 39px;
        height: 39px;
    }
`;

const Hero = styled.section`
    height: min(56.1vw, 808px);
    min-height: 360px;
    display: grid;
    place-items: center;
    background: #ededed;
`;

const PlayButton = styled.button`
    width: 96px;
    height: 96px;
    padding: 0;
    border: 0;
    background: transparent;
    opacity: 0.68;
    cursor: pointer;

    img {
        width: 100%;
        height: 100%;
    }
`;

const Section = styled.section`
    padding: 74px 0 76px;
`;

const SectionTitle = styled.h2`
    margin: 0 0 58px;
    color: #727272;
    font-size: clamp(20px, 2.2vw, 32px);
    font-weight: 700;
    line-height: 1.2;
    text-align: center;
`;

const ProductionCarousel = styled(Carousel)`
    width: 100%;
`;

const ProductionContent = styled(CarouselContent)`
    margin-left: -9px;
`;

const ProductionItem = styled(CarouselItem)`
    flex-basis: 25%;
    padding-left: 9px;

    @media (max-width: 900px) {
        flex-basis: 33.333%;
    }

    @media (max-width: 640px) {
        flex-basis: 76vw;
    }
`;

const IntermediateCarousel = styled(Carousel)`
    width: 100%;
`;

const IntermediateContent = styled(CarouselContent)`
    margin-left: -9px;
`;

const IntermediateItem = styled(CarouselItem)`
    flex-basis: 50%;
    padding-left: 9px;

    @media (max-width: 640px) {
        flex-basis: 86vw;
    }
`;

const Card = styled.article`
    min-width: 0;

    @media (max-width: 640px) {
        flex: 0 0 76vw;
        scroll-snap-align: start;
    }
`;

const CardMedia = styled.div`
    aspect-ratio: 355 / 470;
    position: relative;
    overflow: hidden;
    background: #ededed;
`;

const CardImage = styled(motion.img)`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const ProductionCardInfo = styled.div`
    position: absolute;
    right: 16px;
    bottom: 24px;
    left: 16px;
    color: #727272;
    opacity: 0;
    transform: translateY(8px);
    transition: opacity 0.3s ease, transform 0.3s ease;

    ${CardMedia}:hover & {
        opacity: 1;
        transform: translateY(0);
    }
`;

const CardTitle = styled.h3`
    margin: 0;
    color: #727272;
    font-size: clamp(16px, 1.8vw, 26px);
    font-weight: 700;
    line-height: 1.15;
`;

const CardSubtitle = styled.p`
    margin: 7px 0 0;
    color: #727272;
    font-size: clamp(11px, 1.1vw, 16px);
    font-weight: 500;
`;

const MoreLink = styled.a`
    width: max-content;
    margin: 36px auto 0;
    display: flex;
    align-items: center;
    gap: 18px;
    color: #727272;
    font-size: clamp(20px, 2.8vw, 40px);
    font-weight: 500;
    text-decoration: none;

    span {
        font-size: 1.25em;
        line-height: 0.8;
    }
`;

const IntermediateMedia = styled(CardMedia)`
    aspect-ratio: 832 / 468;
`;

const Footer = styled.footer`
    min-height: 200px;
    padding: 56px 20%;
    display: grid;
    grid-template-columns: 1fr 2fr auto;
    gap: 40px;
    align-items: start;
    background: #ededed;
    color: #727272;

    @media (max-width: 640px) {
        padding: 40px 24px;
        grid-template-columns: 1fr auto;
        gap: 24px;
    }
`;

const FooterBrand = styled.strong`
    font-size: 18px;
`;

const Contact = styled.address`
    font-size: 11px;
    font-style: normal;
    line-height: 1.7;
`;

const Copyright = styled.small`
    grid-column: 2;
    font-size: 8px;
`;

const ProductionCard: FC<{production: Production; intermediate?: boolean}> = ({production, intermediate = false}) => {
    const [isDragging, setIsDragging] = useState(false);
    const startX = useRef<number | null>(null);

    const handlePointerDown = (event: PointerEvent<HTMLElement>) => {
        startX.current = event.clientX;
        setIsDragging(false);
    };

    const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
        if (startX.current !== null && Math.abs(event.clientX - startX.current) > 6) {
            setIsDragging(true);
        }
    };

    const handlePointerEnd = () => {
        startX.current = null;
        setIsDragging(false);
    };

    return (
        <Card
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerEnd}
            onPointerCancel={handlePointerEnd}
        >
            {intermediate ? <IntermediateMedia>
                <CardImage
                    src={production.image}
                    alt=""
                    draggable={false}
                    whileHover={isDragging ? undefined : {scale: 1.05}}
                    transition={{duration: 0.3, ease: "easeOut"}}
                />
                <ProductionCardInfo>
                    <CardTitle>{production.title}</CardTitle>
                    <CardSubtitle>{production.filmTitle}</CardSubtitle>
                </ProductionCardInfo>
            </IntermediateMedia> : <CardMedia>
                <CardImage
                    src={production.image}
                    alt=""
                    draggable={false}
                    whileHover={isDragging ? undefined : {scale: 1.05}}
                    transition={{duration: 0.3, ease: "easeOut"}}
                />
                <ProductionCardInfo>
                    <CardTitle>{production.title}</CardTitle>
                    <CardSubtitle>{production.filmTitle}</CardSubtitle>
                </ProductionCardInfo>
            </CardMedia>}
        </Card>
    );
};

export const MainPage: FC<MainPageProps> = () => (
    <Page>
        <Header>
            <Navigation aria-label="주요 메뉴">
                <a href="#about">About</a>
                <a href="#work">Work</a>
                <a href="#showreels">Showreels</a>
                <a href="#contact">Contact</a>
            </Navigation>
            <Brand href="#top">Room.403</Brand>
            <HeaderInstagramLink href="https://www.instagram.com/" aria-label="Instagram">
                <img src={instagramIcon} alt="" />
            </HeaderInstagramLink>
        </Header>

        <Hero id="top" aria-label="Room.403 소개 영상">
            <PlayButton type="button" aria-label="영상 재생">
                <img src={playIcon} alt="" />
            </PlayButton>
        </Hero>

        <Section id="work">
            <SectionTitle>Production Design</SectionTitle>
            <ProductionCarousel opts={{align: "start", dragFree: true, loop: true}}>
                <ProductionContent>
                    {productionImages.map((production) => (
                        <ProductionItem key={production.image}>
                            <ProductionCard production={production} />
                        </ProductionItem>
                    ))}
                </ProductionContent>
                <CarouselPrevious aria-label="이전 Production Design 아이템" />
                <CarouselNext aria-label="다음 Production Design 아이템" />
            </ProductionCarousel>
            <MoreLink href="#production-design"><span aria-hidden="true">→</span>More</MoreLink>
        </Section>

        <Section id="showreels">
            <SectionTitle>Digital Intermediate</SectionTitle>
            <IntermediateCarousel opts={{align: "start", dragFree: true, loop: true}}>
                <IntermediateContent>
                    {intermediateImages.map((production) => (
                        <IntermediateItem key={production.image}>
                            <ProductionCard production={production} intermediate />
                        </IntermediateItem>
                    ))}
                </IntermediateContent>
                <CarouselPrevious aria-label="이전 Digital Intermediate 아이템" />
                <CarouselNext aria-label="다음 Digital Intermediate 아이템" />
            </IntermediateCarousel>
            <MoreLink href="#digital-intermediate"><span aria-hidden="true">→</span>More</MoreLink>
        </Section>

        <Footer id="contact">
            <FooterBrand>Room.403</FooterBrand>
            <Contact>
                Room.403. 403, 66, Dongil-ro 198-gil, Nowon-gu, Seoul, Republic of Korea<br />
                +82 8666 7415 I room.403.kr@gmail.com
            </Contact>
            <InstagramLink href="https://www.instagram.com/" aria-label="Instagram">
                <img src={instagramIcon} alt="" />
            </InstagramLink>
            <Copyright>ⓒ Room.403. All Rights Reserved.</Copyright>
        </Footer>
    </Page>
);