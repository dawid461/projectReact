
import { FC } from 'react';
import styled from "styled-components";
import { Colors } from '../../styledHelpers/Colors';
import { fontSize } from '../../styledHelpers/FontSizes';
import { imageSize } from '../../styledHelpers/ImageSize';
/*----------Wrapper--------------------*/
const Wrapper = styled.div`
width: 100%;
height:100%;
border:2px solid black;
`;
/*----------Container-1----------------*/
const Container1 = styled.div`
display:flex;
background-color:${Colors.white};
width:50%;
height:50px;
`;
const Profile = styled.div`

`;
const ProfileImg = styled.img`

`;
/*----------Container-2----------------*/
const Container2 = styled.div`
display:flex;
`;
const ButtonsContainer = styled.div`

`;
const LeftImg = styled.img`

`;
const CenterTitle = styled.p`
`;
const ButtonA = styled.a`

`;
const ButtonImg = styled.img`

`;
/*------------END----------------------*/


const LeftMenu: FC = () => {

    return (
        <Wrapper>

            <Container1>
                <Profile>
                    <ProfileImg />
                </Profile>
            </Container1>

            <Container2>
                <ButtonsContainer>
                    <LeftImg />
                    <CenterTitle></CenterTitle>
                    <ButtonA><ButtonImg /></ButtonA>
                </ButtonsContainer>

                <ButtonsContainer>
                    <LeftImg />
                    <CenterTitle></CenterTitle>
                    <ButtonA><ButtonImg /></ButtonA>
                </ButtonsContainer>
            </Container2>

        </Wrapper>
    );

}
export default LeftMenu;

