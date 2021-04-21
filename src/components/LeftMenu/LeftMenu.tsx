
import { FC } from 'react';
import styled from "styled-components";
import { Colors } from '../../styledHelpers/Colors';
import { fontSize } from '../../styledHelpers/FontSizes';
import { imageSize } from '../../styledHelpers/ImageSize';
/*----------Wrapper--------------------*/
const Wrapper = styled.div`
display:flex;
justify-content:center;
width: 100%;
height:100%;
border:2px solid black;
Font-size:${fontSize[10]};
`;
/*----------Container-1----------------*/
const Container1 = styled.div`
width:85%;
height:20em;
display:flex;
justify-content:center;
flex-direction:column;
background-color:${Colors.white};
margin-top:1.5em;
border:1px solid ${Colors.border};
box-shadow:0px 5px 20px ${Colors.lightgrey};
`;
const Profile = styled.div`
width:100%;
display:flex;
flex-direction:column;
margin-bottom:1em;
`;
const ProfileCenter = styled.div`
display: flex;
justify-content:center;
`;
const ProfileImg = styled.img`
 width:${imageSize[18]};
 height:${imageSize[17]};
 border:2px solid ${Colors.white};
border-radius:100%;
`;
const NameSurname = styled.h4`
color:${Colors.namesurname};
font-weight:bold;
 font-size:${fontSize[16]};
`;
const ProfileTitle = styled.span`
color:${Colors.lightgrey};
font-size:${fontSize[12]};
margin-top:1em;
`;
/*-------Button-container--------------*/
const ButtonsContainer = styled.div`
width:100%;
display:flex;
justify-content:space-between;
flex-direction:row;
margin-top:1em;
    
`;
const ButtonsContainerDiv = styled.div`
    display:flex;
`;
const LeftImg = styled.img`
width:${imageSize[13]};
margin-left:10px;
`;
const CenterTitle = styled.p`
font-size:${fontSize[14]};
font-color:${Colors.leftmenufontcolor};
font-weight:bold;
text-align:left;

`;
const ButtonA = styled.a`
width:20px;
margin-right:1.5em;
border:2px solid ${Colors.leftmenufontcolor};
border-radius:2px;
`;
const ButtonImg = styled.img`
width:${imageSize[13]};
`;
/*----------Container-2----------------*/
const Container2 = styled.div`
display:flex;
`;

/*------------END----------------------*/


const LeftMenu: FC = () => {

    return (
        <Wrapper>

            <Container1>
                <Profile>
                    <ProfileCenter>
                        <ProfileImg src="../media/profile/profile.jpg" alt="Profile-img" />
                    </ProfileCenter>
                    <ProfileCenter>
                        <NameSurname>Dawid Czuba</NameSurname>
                    </ProfileCenter>
                    <ProfileCenter>
                        <ProfileTitle>Wsei - Kraków</ProfileTitle>
                    </ProfileCenter>

                </Profile>



                <ButtonsContainer>
                    <ButtonsContainerDiv>
                        <LeftImg src="../media/icons/network.png" alt="network" />
                    </ButtonsContainerDiv>
                    <ButtonsContainerDiv>
                        <CenterTitle>Your Network</CenterTitle>
                    </ButtonsContainerDiv>
                    <ButtonsContainerDiv>
                        <ButtonA href="#" ><ButtonImg src="../media/icons/network.svg" alt="network-button" /></ButtonA>
                    </ButtonsContainerDiv>
                </ButtonsContainer>

                <ButtonsContainer>
                    <LeftImg src="../media/icons/publications.svg" alt="publications" />
                    <CenterTitle>Your Publications</CenterTitle>
                    <ButtonA href="#"><ButtonImg src="../media/icons/plus.svg" alt="plus" /></ButtonA>
                </ButtonsContainer>
            </Container1>

            <Container2></Container2>

        </Wrapper>
    );

}
export default LeftMenu;

