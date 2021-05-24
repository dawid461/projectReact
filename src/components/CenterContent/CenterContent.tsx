
import { FC } from 'react';
import styled from 'styled-components';
import { Colors } from '../../styledHelpers/Colors';
import { fontSize } from '../../styledHelpers/FontSizes';
import { imageSize } from '../../styledHelpers/ImageSize';
import { Link } from 'react-router-dom';
/*----------Wrapper--------------------*/
const Wrapper = styled.div`
display:flex;
flex-direction:column;
width:90%;
height:100%;
Font-size:${fontSize[10]};
`;
/*-------------Container-1--------------*/
const Container1 = styled.div`
display:flex;
flex-direction:row;
width:100%;
height:18%;
margin-top:2em;
`;
/*-----------Img-with-title--------------------*/
const ImgWithTtile = styled.div`
display:flex;
width:30%;
flex-direction:column;
background-image: url("../media/banner/building.jpg");
background-size:cover;
background-repeat: none;
justify-content:flex-end;
`;
const TitleDiv = styled.div`
display:flex;
height:3em;
margin-left:15px;
`;
const Title = styled.p`
color:${Colors.white};
`;
const AuthorDiv = styled.div`
display:flex;
height:6em;
margin-left:15px;
`;
const AuthorDate = styled.p`
color:${Colors.white};
`;
const AuthorProfileImg = styled.img`
width:${imageSize[12]};
height:${imageSize[12]};
border:2px solid ${Colors.white};
border-radius:100%;
margin-left:10px;
`;
const AuthorName = styled.p`
color:${Colors.white};
margin-left:10px;
`;
/*----------Latest-publications------------------------*/
const LatestPublications = styled.div`
display:flex;
flex-direction:column;
width:70%;
background-color:${Colors.white};
`;
/*---------------------------------------*/
const HeaderArticleDiv = styled.div`
display:flex;
margin-left:15px;
margin-bottom:10px;
margin-top:10px;
`;
const HeaderArticle = styled.h3`
font-size:${fontSize[26]};
color:${Colors.grey};
`;
/*---------------------------------------*/
const ArticleDiv = styled.div`
display:flex;
margin-left:15px;
flex-direction:column;
`;
/*---------------------------------------*/
const ArticleBox = styled.div`
width:90%;
height:12em;
display:flex;
flex-direction:row;
`;
const ArticleBoxDivImg = styled.div`
display:flex;
`;
const ArticleBoxImg = styled.img`
width:${imageSize[21]};
height:${imageSize[20]};
`;
/*---------------------------------------*/
const ArticleBoxInformation = styled.div`
display:flex;
flex-direction:column;
margin-left:10px;
`;
const ArticleBoxDivText = styled.div`
display:flex;
margin-top:10px;
margin-bottom:10px;
`;
const ArticleBoxText = styled.p`
font-size:${fontSize[16]};
`;
const ArticleProfileDiv = styled.div`
display:flex;
flex-direction:row;
`;
const ArticleAuthorDate = styled.p`
color:${Colors.lightgrey};
font-size:${fontSize[14]};
`;
const ArticleAuthorProfileImg = styled.img`
width:${imageSize[12]};
height:${imageSize[12]};
border:2px solid ${Colors.leftmenufontcolor};
border-radius:100%;
margin-left:10px;
`;
const ArticleAuthorName = styled.p`
color:${Colors.leftmenufontcolor};
margin-left:10px;
font-size:${fontSize[14]};
`;
/*---------------------------------------*/
const ArticleHyperLinkDiv = styled.div`
display:flex;
margin-left:15px;
`;
const CustomLinkArticle = styled(Link)`
text-decoration:none;
color:#3399ff;
font-weight:bold;
font-size:${fontSize[16]};
`;
/*----Container2-----------------------*/
const Container2 = styled.div`
display:flex;
flex-direction:row;
width:100%;
height:10%;
margin-top:8em;
`;
const Blocks = styled.div`
width:25%;
height:100%;
display:flex;
background-color:green;
margin:1px;
`
/*-------------Container-3--------------*/

const Container3 = styled.div`
display:flex;
flex-direction:column;
width:100%;
height:100%;
margin-top:8em;
`;
const Posts = styled.div`
width:100%;
height:100%;
display:flex;
background-color:pink;
margin:2px;
`;
/*------------END----------------------*/
const LeftMenu: FC = () => {

    return (
        <Wrapper>

            <Container1>

                <ImgWithTtile>
                    <TitleDiv>
                        <Title>Lorem ipsum dolor sit amet consectetur adipiscing elit.. and one more
                        line for the demo
                        </Title>
                    </TitleDiv>

                    <AuthorDiv>
                        <AuthorDate> 7, jan 2020</AuthorDate>
                        <AuthorProfileImg src="../media/profile/profile.jpg" alt="Profile-img" />
                        <AuthorName>Dawid Czuba</AuthorName>
                    </AuthorDiv>
                </ImgWithTtile>


                <LatestPublications>
                    <HeaderArticleDiv>
                        <HeaderArticle>Latest publications</HeaderArticle>
                    </HeaderArticleDiv>

                    <ArticleDiv>

                        <ArticleBox>
                            <ArticleBoxDivImg>
                                <ArticleBoxImg src="../media/banner/write.jpg" alt="write-img" />
                            </ArticleBoxDivImg>

                            <ArticleBoxInformation>
                                <ArticleBoxDivText>
                                    <ArticleBoxText>
                                        Lorem ipsum dolor sit amet consectetur adipiscing elit.. and one more
                                        line for the demo
                                    </ArticleBoxText>
                                </ArticleBoxDivText>
                                <ArticleProfileDiv>
                                    <ArticleAuthorDate>7 jan 2020</ArticleAuthorDate>
                                    <ArticleAuthorProfileImg src="../media/profile/profile.jpg" alt="Profile-img" />
                                    <ArticleAuthorName>Dawid Czuba</ArticleAuthorName>
                                </ArticleProfileDiv>
                            </ArticleBoxInformation>
                        </ArticleBox>

                        <ArticleBox>
                            <ArticleBoxDivImg>
                                <ArticleBoxImg src="../media/banner/write.jpg" alt="write-img" />
                            </ArticleBoxDivImg>

                            <ArticleBoxInformation>
                                <ArticleBoxDivText>
                                    <ArticleBoxText>
                                        Lorem ipsum dolor sit amet consectetur adipiscing elit.. and one more
                                        line for the demo
                                    </ArticleBoxText>
                                </ArticleBoxDivText>
                                <ArticleProfileDiv>
                                    <ArticleAuthorDate>7 jan 2020</ArticleAuthorDate>
                                    <ArticleAuthorProfileImg src="../media/profile/profile.jpg" alt="Profile-img" />
                                    <ArticleAuthorName>Dawid Czuba</ArticleAuthorName>
                                </ArticleProfileDiv>
                            </ArticleBoxInformation>
                        </ArticleBox>


                        <ArticleBox>
                            <ArticleBoxDivImg>
                                <ArticleBoxImg src="../media/banner/write.jpg" alt="write-img" />
                            </ArticleBoxDivImg>

                            <ArticleBoxInformation>
                                <ArticleBoxDivText>
                                    <ArticleBoxText>
                                        Lorem ipsum dolor sit amet consectetur adipiscing elit.. and one more
                                        line for the demo
                                    </ArticleBoxText>
                                </ArticleBoxDivText>
                                <ArticleProfileDiv>
                                    <ArticleAuthorDate>7 jan 2020</ArticleAuthorDate>
                                    <ArticleAuthorProfileImg src="../media/profile/profile.jpg" alt="Profile-img" />
                                    <ArticleAuthorName>Dawid Czuba</ArticleAuthorName>
                                </ArticleProfileDiv>
                            </ArticleBoxInformation>
                        </ArticleBox>


                    </ArticleDiv>

                    <ArticleHyperLinkDiv>
                        <CustomLinkArticle to="./Publications">See more publications</CustomLinkArticle>
                    </ArticleHyperLinkDiv>
                </LatestPublications>

            </Container1>


            <Container2>

                <Blocks></Blocks>
                <Blocks></Blocks>
                <Blocks></Blocks>
                <Blocks></Blocks>



            </Container2>


            <Container3>
                <Posts></Posts>
                <Posts></Posts>
                <Posts></Posts>
                <Posts></Posts>
                <Posts></Posts>
                <Posts></Posts>
                <Posts></Posts>
                <Posts></Posts>
                <Posts></Posts>
                <Posts></Posts>

            </Container3>

        </Wrapper >
    );

}
export default LeftMenu;

