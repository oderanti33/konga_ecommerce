import React, { useState } from 'react';
import mobile from './Mobile';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CircleIcon from '@mui/icons-material/Circle';
import styled from 'styled-components';
import { biggestscreen } from './Mobile';


const data = [
    {
        label: 'image1',
        image: 'https://res.cloudinary.com/dcxe2qjbr/image/upload/v1697586275/Konga/caros1_bpl6rs.webp'
    },
    {
        label: 'image2',
        image: 'https://res.cloudinary.com/dcxe2qjbr/image/upload/v1697586274/Konga/caros2_zh3z5i.webp'
    },
    {
        label: 'image3',
        image: 'https://res.cloudinary.com/dcxe2qjbr/image/upload/v1697586274/Konga/caros3_cq5hsy.webp'
    },
    {
        label: 'image4',
        image: 'https://res.cloudinary.com/dcxe2qjbr/image/upload/v1697586275/Konga/caros7_cj1esz.webp'
    },
];


const Carousal1 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const goBack = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? data.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    };
    const goFront = () => {
        const isLastSlide = currentIndex === data.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    };

    const gotoSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }
    const [isHover, setIsHover] = useState(false);

    const HandleHover = () => {
        setIsHover(true)
    };

    const HandleHoveroff = () => {
        setIsHover(false)
    }

    return (
        <CarousalContainer onMouseEnter={HandleHover} onMouseLeave={HandleHoveroff}>
            {isHover && <ArrowBackward onClick={goBack}>
                <ArrowBackIosNewIcon />
            </ArrowBackward>}
            {isHover && <ArrowForward onClick={goFront}>
                <ArrowForwardIosIcon />
            </ArrowForward>}
            <ArrowBackwardMobile onClick={goBack}>
                <ArrowBackIosNewIcon />
            </ArrowBackwardMobile>
            <ArrowForwardMobile onClick={goFront}>
                <ArrowForwardIosIcon />
            </ArrowForwardMobile>
            <IndividualImage src={data[currentIndex].image} />
            <DotContainer>
                {
                    data.map((picture, slideIndex) => (
                        <EachDot key={slideIndex} onClick={() => gotoSlide(slideIndex)}><CircleIcon /></EachDot>
                    ))
                }
            </DotContainer>
        </CarousalContainer>
    )
}

export default Carousal1


const CarousalContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const IndividualImage = styled.img`
    width: 100%;
    height: 100%;
`

const ArrowBackward = styled.svg`
    width: 20px;
    height: 20px;
    position: absolute;
    background-color: white;
    left: 25px;
    top: 20;
    padding: 16px;
    border-radius: 50%;
    color: gray;
    opacity: 0.5;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`
const ArrowBackwardMobile = styled.svg`
    width: 20px;
    height: 20px;
    position: absolute;
    background-color: white;
    left: 25px;
    top: 20;
    padding: 16px;
    border-radius: 50%;
    color: gray;
    opacity: 0.5;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    ${biggestscreen({ display: 'none' })}
`

const ArrowForward = styled.svg`
    width: 20px;
    height: 20px;
    position: absolute;
    background-color: white;
    padding: 16px;
    color: gray;
    opacity: 0.5;
    border-radius: 50%;
    right: 25px;
    top: 20;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`
const ArrowForwardMobile = styled.svg`
    width: 20px;
    height: 20px;
    position: absolute;
    background-color: white;
    padding: 16px;
    color: gray;
    opacity: 0.5;
    border-radius: 50%;
    right: 25px;
    top: 20;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    ${biggestscreen({ display: 'none' })}
`

const DotContainer = styled.div`
    width: 100%;
    position: absolute;
    bottom: 10px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    ${mobile({ display: 'none', })}
`

const EachDot = styled.svg`
    width: 10px;
    height: 10px;
    margin-left: 20px;
    color: white;
    border: solid 2px gray;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`