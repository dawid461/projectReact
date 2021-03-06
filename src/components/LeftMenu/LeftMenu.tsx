
import { FC } from 'react';
import styled from "styled-components";
import { Colors } from '../../styledHelpers/Colors';
import { fontSize } from '../../styledHelpers/FontSizes';
import { imageSize } from '../../styledHelpers/ImageSize';
import { Link } from 'react-router-dom';
/*----API----------------------------*/
import { IState } from '../../reducers'
import { useSelector } from 'react-redux';
import { IUsersReducer } from '../../reducers/usersReducers';
import { IPhotoReducer } from '../../reducers/photoReducers';
/*----------Wrapper--------------------*/
const Wrapper = styled.div`
display:flex;
flex-direction:column;
width: 80%;
height:100%;
Font-size:${fontSize[10]};
`;
/*----------Container-1----------------*/
const Container1 = styled.div`
width:85%;
height:25em;
display:flex;
justify-content:center;
flex-direction:column;
background-color:${Colors.white};
margin-top:1.5em;
border:1px solid ${Colors.border};
border-radius:10px;
box-shadow:0px 5px 20px ${Colors.lightgrey};
`;
const Profile = styled.div`
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
const ButtonsContainer1 = styled.div`
width:100%;
display:flex;
justify-content:space-between;
align-items:center;
flex-direction:row;
margin-top:1em;
`;
const ButtonsContainerDiv1 = styled.div`
display:flex;
`;
const LeftImg = styled.img`
width:${imageSize[14]};
margin-left:10px;
`;
const CenterTitle = styled.p`
font-size:${fontSize[14]};
color:${Colors.leftmenufontcolor};
font-weight:bold;
text-align:left;
`;
const CustomLinkButtons = styled(Link)`
width:25px;
height:18px;
padding:1px;
margin-right:1.5em;
border:2px solid ${Colors.leftmenufontcolor};
border-radius:5px;
`;
const ButtonImg = styled.img`
width:${imageSize[13]};
margin-left:4px;
`;
/*----------Container-2----------------*/
const Container2 = styled.div`
width:100%;
display:flex;
flex-direction:column;
margin-top:2em;
`;
const ButtonsContainer2 = styled.div`
display:flex;
justify-content:space-between;
margin-bottom:1em;
`;
const CustomLink = styled(Link)`
font-size:${fontSize[14]};
color:${Colors.leftmenufontcolor};
font-weight:bold;
text-decoration:none;
`;
const ButtonsAimg = styled.img`
width:${imageSize[14]};
margin-right:1em;
margin-left:10px;
`;
/*------------END----------------------*/


const LeftMenu: FC = () => {
    const { usersList } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }));
    const { photoList } = useSelector<IState, IPhotoReducer>(state => ({
        ...state.photo
    }));

    if (usersList?.length > 0) {
        return (
            <Wrapper>

                <Container1>
                    <Profile>
                        <ProfileCenter>
                            <Link to="/Profile"><ProfileImg src={photoList[2]?.url} alt="Profile-img" /></Link>
                        </ProfileCenter>
                        <ProfileCenter>
                            <CustomLink to='/Profile'><NameSurname>{usersList[2]?.name}</NameSurname></CustomLink>
                        </ProfileCenter>
                        <ProfileCenter>
                            <ProfileTitle>{usersList[2]?.company?.name}</ProfileTitle>
                        </ProfileCenter>

                    </Profile>



                    <ButtonsContainer1>
                        <ButtonsContainerDiv1>
                            <LeftImg src="../media/icons/network.png" alt="network" />
                        </ButtonsContainerDiv1>
                        <ButtonsContainerDiv1>
                            <CenterTitle>Your Network</CenterTitle>
                        </ButtonsContainerDiv1>
                        <ButtonsContainerDiv1>
                            <CustomLinkButtons to='/YourNetwork' ><ButtonImg src="../media/icons/network.svg" alt="network-button" /></CustomLinkButtons>
                        </ButtonsContainerDiv1>
                    </ButtonsContainer1>

                    <ButtonsContainer1>
                        <ButtonsContainerDiv1>
                            <LeftImg src="../media/icons/publications.svg" alt="publications" />
                        </ButtonsContainerDiv1>
                        <ButtonsContainerDiv1>
                            <CenterTitle>Your Publications</CenterTitle>
                        </ButtonsContainerDiv1>
                        <ButtonsContainerDiv1>
                            <CustomLinkButtons to='/YourPublications'><ButtonImg src="../media/icons/plus.svg" alt="plus" /></CustomLinkButtons>
                        </ButtonsContainerDiv1>
                    </ButtonsContainer1>
                </Container1>

                <Container2>
                    <ButtonsContainer2>
                        <CustomLink to='/Publications'><ButtonsAimg src="../media/icons/publications.svg" alt="publications2" />Publications</CustomLink>
                    </ButtonsContainer2>
                    <ButtonsContainer2>
                        <CustomLink to='/Ecosystem'><ButtonsAimg src="../media/icons/ecosystem.svg" alt="ecosystem" />Ecosystem</CustomLink>
                    </ButtonsContainer2>
                    <ButtonsContainer2>
                        <CustomLink to='/Entities'><ButtonsAimg src="../media/icons/entities2.svg" alt="enitites" />Entites</CustomLink>
                    </ButtonsContainer2>
                </Container2>

            </Wrapper>
        )
    }
    else {
        return (<Wrapper />)
    }


};
export default LeftMenu;

