
import { ChangeEvent, FC, useState } from 'react';
import styled from "styled-components";
import { Colors } from '../../styledHelpers/Colors';
import { fontSize } from '../../styledHelpers/FontSizes';
import { imageSize } from '../../styledHelpers/ImageSize';
import { Link } from 'react-router-dom';
/*----------Wrapper--------------------*/
const Wrapper = styled.div`
background-color:${Colors.white};
position: relative;
display: inline-block;
height:29.5em;
width:200px;
`;
/*------------extendedmenu--------------*/
const ListContainer = styled.div`
position: absolute;
height:28em;
width:100%;
box-shadow:0px 1px 20px ${Colors.lightgrey};
z-index: 1;
`;
const ListElement = styled.div`
widht:100%;
display:flex;
justify-content:flex-start;
align-items:center;
font-size:${fontSize[16]};
color:${Colors.leftmenufontcolor};
margin-left:6px;
margin-bottom:2px;
`;
const CustomLinkElement = styled(Link)`
text-decoration:none;
color:${Colors.leftmenufontcolor};
`;
const Filter = styled.input`

`;
const ListElementTitle = styled.div`
display:flex;
`;
const Title = styled.span`
font-size:${fontSize[14]};
color:${Colors.lightgrey};
text-align: left;
margin-left:6px;
margin-bottom:3px;
`;
const ListImg = styled.img`
width:${imageSize[12]};
`;
const ListSpan = styled.span`
margin-left:1em;
`;
const ProfileImg = styled.img`
width:${imageSize[14]};
height:${imageSize[13]};
border:2px solid ${Colors.white};
border-radius:100%;`;
const SeeProfile = styled(Link)`
text-align:left;
`;
const ProfileName = styled.div`

`;
const ProfileDiv = styled.div`
display:flex;
flex-direction:column;
justify-content:flex-start;
margin-left:1em;
c
`;
/*------------END----------------------*/


const ExtendedMenu: FC = () => {

    //searcher content
    const [inputText, setInputText] = useState<string>('');

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text);
    }

    return (
        <Wrapper>

            <Filter type="text" name="filter" placeholder="Filter..." value={inputText} onChange={inputHandler} />

            <ListContainer>


                {'Platform'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <ListElementTitle>
                        <Title> Platform</Title>
                    </ListElementTitle>
                }

                {'Home'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <ListElement>
                        <CustomLinkElement to="/">
                            <ListImg src="./media/icons/house2.svg" alt="home" />
                            <ListSpan>Home</ListSpan>
                        </CustomLinkElement>
                    </ListElement>
                }

                {'Publications'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <ListElement>
                        <CustomLinkElement to="/Publications">
                            <ListImg src="./media/icons/publications.svg" alt="home" />
                            <ListSpan>Publications</ListSpan>
                        </CustomLinkElement>
                    </ListElement>
                }

                {'People'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <ListElement>
                        <CustomLinkElement to="/People">
                            <ListImg src="./media/icons/people.svg" alt="people" />
                            <ListSpan>People</ListSpan>
                        </CustomLinkElement>
                    </ListElement>
                }

                {'Entities'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <ListElement>
                        <CustomLinkElement to="/Entities">
                            <ListImg src="./media/icons/entities2.svg" alt="entities" />
                            <ListSpan>Entities</ListSpan>
                        </CustomLinkElement>
                    </ListElement>
                }

                {'Administration'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <ListElement>
                        <CustomLinkElement to="/Administration">
                            <ListImg src="./media/icons/administration.svg" alt="administration" />
                            <ListSpan>Administration</ListSpan>
                        </CustomLinkElement>
                    </ListElement>
                }



                {'Workspaces'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <ListElementTitle>
                        <Title>Workspaces</Title>
                    </ListElementTitle>
                }
                {'Client Contracts'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <ListElement>
                        <CustomLinkElement to="/ClientContracts">
                            <ListImg src="./media/icons/publications.svg" alt="Client-contracts" />
                            <ListSpan>Client Contracts</ListSpan>
                        </CustomLinkElement>
                    </ListElement>
                }

                {'Supplier Contracts'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <ListElement>
                        <CustomLinkElement to="/SuppilierContracts">
                            <ListImg src="./media/icons/publications.svg" alt="Supplier-contract" />
                            <ListSpan>Supplier Contracts</ListSpan>
                        </CustomLinkElement>

                    </ListElement>
                }

                {'Corporate'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <ListElement>
                        <CustomLinkElement to="/Corporate">
                            <ListImg src="./media/icons/entities.svg" alt="corporate" />
                            <ListSpan>Corporate</ListSpan>
                        </CustomLinkElement>
                    </ListElement>
                }

                {'Group Norms'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <ListElement>
                        <CustomLinkElement to="/GroupNorms">
                            <ListImg src="./media/icons/people.svg" alt="Group-Norms" />
                            <ListSpan>Group Norms</ListSpan>
                        </CustomLinkElement>
                    </ListElement>
                }

                {'Real estate Contracts'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <ListElement>
                        <CustomLinkElement to="/ClientContracts">
                            <ListImg src="./media/icons/publications.svg" alt="Group-Norms" />
                            <ListSpan>Real estate Contracts</ListSpan>
                        </CustomLinkElement>
                    </ListElement>
                }



                {'Account'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <ListElementTitle>
                        <Title>Account</Title>
                    </ListElementTitle>
                }

                {'See Profile'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <ListElement>
                        <ProfileImg src="../media/profile/profile.jpg" alt="profile-img" />
                        <ProfileDiv>
                            <ProfileName>Dawid Czuba</ProfileName>
                            <SeeProfile to="/Profile">See Profile</SeeProfile>
                        </ProfileDiv>
                    </ListElement>
                }

                {'Privacy'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <ListElement>
                        <CustomLinkElement to="/Privacy">
                            <ListImg src="./media/icons/privacy.svg" alt="Privacy" />
                            <ListSpan>Privacy</ListSpan>
                        </CustomLinkElement>
                    </ListElement>
                }

                {'Settings'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <ListElement>
                        <CustomLinkElement to="/Settings">
                            <ListImg src="./media/icons/settings.svg" alt="Settings" />
                            <ListSpan>Settings</ListSpan>
                        </CustomLinkElement>
                    </ListElement>
                }
                {'Logout'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <ListElement>
                        <CustomLinkElement to="/Logout">
                            <ListImg src="#" alt="logout" />
                            <ListSpan>Logout</ListSpan>
                        </CustomLinkElement>
                    </ListElement>
                }


            </ListContainer>


        </Wrapper>
    );

}
export default ExtendedMenu;

