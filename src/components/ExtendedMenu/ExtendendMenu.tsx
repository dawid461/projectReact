
import { ChangeEvent, FC, useState } from 'react';
import styled from "styled-components";
import { Colors } from '../../styledHelpers/Colors';
import { fontSize } from '../../styledHelpers/FontSizes';
import { imageSize } from '../../styledHelpers/ImageSize';
/*----------Wrapper--------------------*/
const Wrapper = styled.div`
background-color:${Colors.white};
position: relative;
display: inline-block;
height:27.6em;
width:200px;
`;
/*------------extendedmenu--------------*/
const ListContainer = styled.div`
position: absolute;
height:100%;
width:100%;
box-shadow:0px 5px 30px ${Colors.lightgrey};
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
const ListElementA = styled.a`
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
const SeeProfile = styled.a`
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
                        <ListElementA href="#">
                            <ListImg src="./media/icons/house2.svg" alt="home" />
                            <ListSpan>Home</ListSpan>
                        </ListElementA>
                    </ListElement>
                }

                {'Publications'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <ListElement>
                        <ListElementA href="#">
                            <ListImg src="./media/icons/publications.svg" alt="home" />
                            <ListSpan>Publications</ListSpan>
                        </ListElementA>
                    </ListElement>
                }

                {'People'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <ListElement>
                        <ListElementA href="#">
                            <ListImg src="./media/icons/people.svg" alt="people" />
                            <ListSpan>People</ListSpan>
                        </ListElementA>
                    </ListElement>
                }

                {'Entities'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <ListElement>
                        <ListElementA href="#">
                            <ListImg src="./media/icons/entities2.svg" alt="entities" />
                            <ListSpan>Entities</ListSpan>
                        </ListElementA>
                    </ListElement>
                }

                {'Administration'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <ListElement>
                        <ListElementA href="#">
                            <ListImg src="./media/icons/administration.svg" alt="administration" />
                            <ListSpan>Administration</ListSpan>
                        </ListElementA>
                    </ListElement>
                }



                {'Workspaces'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <ListElementTitle>
                        <Title>Workspaces</Title>
                    </ListElementTitle>
                }
                {'Client Contracts'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <ListElement>
                        <ListElementA href="#">
                            <ListImg src="./media/icons/publications.svg" alt="Client-contracts" />
                            <ListSpan>Client Contracts</ListSpan>
                        </ListElementA>
                    </ListElement>
                }

                {'Supplier Contracts'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <ListElement>
                        <ListElementA href="#">
                            <ListImg src="./media/icons/publications.svg" alt="Supplier-contract" />
                            <ListSpan>Supplier Contracts</ListSpan>
                        </ListElementA>

                    </ListElement>
                }

                {'Corporate'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <ListElement>
                        <ListElementA href="#">
                            <ListImg src="./media/icons/entities.svg" alt="corporate" />
                            <ListSpan>Corporate</ListSpan>
                        </ListElementA>
                    </ListElement>
                }

                {'Group Norms'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <ListElement>
                        <ListElementA href="#">
                            <ListImg src="./media/icons/people.svg" alt="Group-Norms" />
                            <ListSpan>Group Norms</ListSpan>
                        </ListElementA>
                    </ListElement>
                }

                {'Real estate Contracts'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <ListElement>
                        <ListElementA href="#">
                            <ListImg src="./media/icons/publications.svg" alt="Group-Norms" />
                            <ListSpan>Real estate Contracts</ListSpan>
                        </ListElementA>
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
                            <SeeProfile href="#">See Profile</SeeProfile>
                        </ProfileDiv>
                    </ListElement>
                }

                {'Privacy'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <ListElement>
                        <ListElementA href="#">
                            <ListImg src="./media/icons/privacy.svg" alt="Privacy" />
                            <ListSpan>Privacy</ListSpan>
                        </ListElementA>
                    </ListElement>
                }

                {'Settings'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <ListElement>
                        <ListElementA href="#">
                            <ListImg src="./media/icons/settings.svg" alt="Settings" />
                            <ListSpan>Settings</ListSpan>
                        </ListElementA>
                    </ListElement>
                }


            </ListContainer>


        </Wrapper>
    );

}
export default ExtendedMenu;

