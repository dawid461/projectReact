import { FC, useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import { Colors } from '../../styledHelpers/Colors';
import { fontSize } from '../../styledHelpers/FontSizes';
import { imageSize } from '../../styledHelpers/ImageSize';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { IState } from '../../reducers'
import { useSelector } from 'react-redux';
import { IUsersReducer } from '../../reducers/usersReducers';
import { IPhotoReducer } from '../../reducers/photoReducers';
import { ICommentReducer } from '../../reducers/commentsReducers';
import { IPostReducer } from '../../reducers/postsReducers';

/*-------------style-for-all-elements------------*/
const Wrapper = styled.div`
display: flex;
flex-direction:column;
align-items:center;
width:90%;
height:100%;
margin-top:1.5em;
background-color:${Colors.white};
font-size: ${fontSize[14]};
box-shadow:2px 2px 10px ${Colors.lightgrey};
`;
const CustomLink = styled(Link)`
text-decoration:none;
`;
/*-------------Container-1--------------------*/
const Container1 = styled.div`
display:flex;
flex-direction:column;
width:90%;
height:40em;
margin-top:20px;
box-shadow: 5px 4px 10px 6px rgba(0,0,0,0.2);
`;
const BannerWorkspace = styled.div`
display:flex;
width:100%;
height:32em;
background-image:url("../media/banner/building.jpg");
background-repeat:no-repeat;
background-size:cover;
`;
const BannerContent = styled.div`
display:flex;
flex-direction:column;
`;
const BannnerTitleWithIcon = styled.div`
display:flex;
flex-direction:row;
`;
const BannerDivHelper1 = styled.div`
display:flex;
justify-content:flex-start;
width:24%;
`;
const TitleB = styled.span`
color:${Colors.namesurname};
font-weight:bold;
font-size:${fontSize[18]};
margin-left:4em;
margin-top:0.8em;
`;
const BannerDivHelper2 = styled.div`
display:flex;
justify-content:flex-end;
width:74%;
`;
const IconSettingsB = styled.img`
width:${imageSize[13]};
height:${imageSize[13]};
margin-top:0.8em;
cursor:pointer;
`;
const BannerIconWithDescription = styled.div`
display:flex;
flex-direction:row;
`;
const IconB = styled.img`
width:${imageSize[15]};
height:${imageSize[15]};
margin-left:10px;
`;
const DescriptionB = styled.p`
color:${Colors.lightgrey};
margin-top:20px;
margin-left:2em;
`;
/*-------------Container-2--------------------*/
const Container2 = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
width:90%;
height:25em;
background-color:${Colors.lightgrey};
margin-top:4em;
box-shadow: 5px 2px 10px 6px rgba(0,0,0,0.2);
`;
const SpanBox = styled.div`
width:100%;
display:flex;
flex-direction:row;
`;
const SpanDiv1 = styled.div`
width:20%;
display:flex;
justify-content:flex-start;
margin-left:5em;
`;
const SpanDiv2 = styled.div`
width:70%;
display:flex;
justify-content:flex-end
`;
const Span1 = styled.span`
color:#8c8f94;
font-weight:bold;
`;
const Span2 = styled.span`
color:#8c8f94;
font-weight:bold;
cursor:pointer;
`;
const BoxContainer = styled.div`
width:100%;
display:flex;
flex-direction:row;
justify-content:space-around;
`;
const Box = styled.div`
width:20em;
height:15em;
display:flex;
flex-direction:column;
justify-content:flex-start;
background-color:${Colors.white};
border-radius:10px;
margin-top:1.5em;
padding:1em;
`;
const BoxIcon = styled.img`
width:${imageSize[14]};
hegiht:${imageSize[14]};
margin-bottom:10px;
`;
const BoxTitle = styled.span`
font-size:${fontSize[18]};
font-weight:bold;
margin-bottom:10px;
color:${Colors.black};
`;
const BoxDescription = styled.p`
color:${Colors.leftmenufontcolor};
`;
/*-------------Container-3--------------------*/
const Container3 = styled.div`
display:flex;
flex-direction:column;
width:100%;
height:100%;
margin-top:3em;
.pagination{
    display:flex;
    flex-direction:row;
    justify-content:center;
    margin:20px;
    font-size:2em;
    color:#0381bd;
    font-weight:bold;
    cursor:pointer;
}
.paginationA{
    margin:10px;
}
`;
/*----------header-filter,title,-----------*/
const ResumeWorkHeaderContainer = styled.div`
width:100%;
height:3em;
display:flex;
flex-direction:row;
margin-bottom:2px;
`;
const ResumeWorkHeaderDiv1 = styled.div`
width:20%;
display:flex;
flex-direction:row;
justify-content:flex-start;
`;
const HeaderTitle = styled.span`
font-size:${fontSize[18]};
margin-left:15px;
margin-top:15px;
font-weight:bold;
`;
const ResumeWorkHeaderDiv2 = styled.div`
width:80%;
display:flex;
flex-direction:row;
justify-content:flex-end;
margin-top:15px;
`;
const InputDiv = styled.div`
display:flex;
border:1px solid ${Colors.lightgrey};
height:2.5em;
margin-right:8px;
`;
const InputFilter = styled.input`
border:none;
outline-style:none;
`;
const InputImg = styled.img`
width:${imageSize[14]};
height:${imageSize[14]};
background-color:${Colors.white};
margin-top:3px;
`;
const SelectFollowDiv = styled.div`
display:flex;
`;
const FollowImg = styled.img`
width:${imageSize[15]};
height:${imageSize[15]};
margin-right:8px;
`;
const FollowSpan = styled.span`
color:${Colors.namesurname};
font-size:${fontSize[14]};
font-weight:bold;
margin-right:9px;
margin-top:10px;
`;
const DropdownArrow = styled.img`
width:8px;
height:8px;
margin-top:12px;
margin-right:25px;
`;
/*--------------------Colors---Button---Container----*/
const ButtonsContainer = styled.div`
display:flex;
flex-direction:row;
justify-content:space-around;
width:100%;
height:2em;
margin-top:2em;
`;
/*----------------------*/
const ButtonDiv1 = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:row;
width:40px;
margin-left:10px;
background-color:#eaecf5;
box-shadow:2px 0px 3px 0px #a1a5b0;
cursor:pointer;
border-radius:4px;
`;
const Title1 = styled.span`
font-size:18px;
color:#2d429e;
font-weight:bold;
`;
/*----------------------*/
const ButtonDiv2 = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:row;
width:80px;
background-color:#cce5cc;
box-shadow:2px 0px 3px 0px #a1a5b0;
cursor:pointer;
border-radius:4px;
`;
const Icon2 = styled.img`
width:${imageSize[11]};
`;
const Title2 = styled.span`
font-size:18px;
color:#48a248;
font-weight:bold;
margin-left:5px;
`;
/*----------------------*/
const ButtonDiv3 = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:row;
width:90px;
background-color:#edf6fa;
box-shadow:2px 0px 3px 0px #a1a5b0;
cursor:pointer;
border-radius:4px;
`;
const Icon3 = styled.img`
width:${imageSize[11]};
`;
const Title3 = styled.span`
font-size:18px;
color:#2a95c8;
font-weight:bold;
margin-left:5px;
`;
/*----------------------*/
const ButtonDiv4 = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:row;
width:230px;
background-color:#f2e5c4;
box-shadow:2px 0px 3px 0px #a1a5b0;
cursor:pointer;
border-radius:4px;
`;
const Icon4 = styled.img`
width:${imageSize[11]};
`;
const Title4 = styled.span`
font-size:18px;
color:#dfbb66;
font-weight:bold;
margin-left:5px;
`;
/*----------------------*/
const ButtonDiv5 = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:row;
width:140px;
background-color:#cccccc;
box-shadow:2px 0px 3px 0px #a1a5b0;
cursor:pointer;
border-radius:4px;
`;
const Icon5 = styled.img`
width:${imageSize[11]};
`;
const Title5 = styled.span`
font-size:18px;
color:#6f7483;
font-weight:bold;
margin-left:5px;
`;
/*----------------------*/
const ButtonDiv6 = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:row;
width:80px;
background-color:#e8e8e8;
box-shadow:2px 0px 3px 0px #a1a5b0;
cursor:pointer;
border-radius:4px;
`;
const Icon6 = styled.img`
width:${imageSize[11]};
`;
const Title6 = styled.span`
font-size:18px;
color:#8d929f;
font-weight:bold;
margin-left:5px;
`;
/*----------------------*/
const ButtonDiv7 = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:row;
width:120px;
background-color:#ffffff;
box-shadow:2px 0px 3px 0px #a1a5b0;
cursor:pointer;
border-radius:4px;
`;
const Icon7 = styled.img`
width:${imageSize[11]};
`;
const Title7 = styled.span`
font-size:18px;
color:#8d929f;
font-weight:bold;
margin-left:5px;
`;
/*----------------------*/
const ButtonDiv8 = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:row;
width:35px;
background-color:#ffffff;
box-shadow:2px 0px 3px 0px #a1a5b0;
cursor:pointer;
border-radius:4px;
`;
const Title8 = styled.span`
font-size:18px;
color:#a1a5b0;
font-weight:bold;
`;
/*----------posts-with-pagination--------------------*/
const ResumeWorkMini = styled.h1`
    width: 100%;
    height:10em;
    background-color:white;
    border-radius:6px;
    box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.2);
    margin-top:20px;
`;
const ResumeWorkTitle = styled.div`
    font-size:20px;
    padding-top:10px;
    padding-left:10px;
    color:rgb(67,85,168);
    font-weight:bold;    
`;
const ResumeWorkText = styled.p`
    font-size:15px;
    color:rgb(148,151,174);
    padding-top:10px;
    padding-left:10px;
    padding-right:10px;
    padding-bottom: 10px;
    text-align:justify;
`;
const ResumeWorkBottom = styled.span`
    font-size:12px;
    color:rgb(148,151,174);
    padding-top:10px;
    padding-bottom:10px;
    padding-left:10px;
    padding-right:10px;
    img{
        width:12px;
        height:12px;
        margin-right:3px;
    }
`;
const LittleSpan = styled.span`
color:green;
font-weight:bold;
`;

/*-------------END-------------------------*/

const Workspace: FC = () => {
    const { usersList } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }));
    const { commentList } = useSelector<IState, ICommentReducer>(state => ({
        ...state.comment
    }));
    const { postList } = useSelector<IState, IPostReducer>(state => ({
        ...state.posts
    }));
    const { photoList } = useSelector<IState, IPhotoReducer>(state => ({
        ...state.photo
    }));
    const [currentPage, setCurrentPage] = useState<number>(0);
    const handlePageClick = (data: any) => {
        const selected = data.selected;
        setCurrentPage(selected);
    }
    //searcher content
    const [inputText, setInputText] = useState<string>('');

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text);
    }

    if (usersList?.length > 0) {
        return (
            <Wrapper>

                <Container1>
                    <BannerWorkspace />

                    <BannerContent>
                        <BannnerTitleWithIcon>
                            <BannerDivHelper1>
                                <TitleB>Corporate holdings</TitleB>
                            </BannerDivHelper1>
                            <BannerDivHelper2>
                                <IconSettingsB src="./media/icons/settings.png" alt="settings-icon" />
                            </BannerDivHelper2>
                        </BannnerTitleWithIcon>

                        <BannerIconWithDescription>
                            <IconB src="./media/icons/entities.png" alt="banner-icon" />
                            <DescriptionB>{postList[1]?.body}</DescriptionB>
                        </BannerIconWithDescription>
                    </BannerContent>
                </Container1>


                <Container2>
                    <SpanBox>
                        <SpanDiv1>
                            <Span1>Start working on corporate matters</Span1>
                        </SpanDiv1>
                        <SpanDiv2>
                            <Span2>Hide</Span2>
                        </SpanDiv2>
                    </SpanBox>


                    <BoxContainer>
                        <CustomLink to="/Entities">
                            <Box>
                                <BoxIcon src="./media/icons/entities.png" alt="entities-img" />
                                <BoxTitle>Explore your Entities</BoxTitle>
                                <BoxDescription>{postList[1]?.body}</BoxDescription>
                            </Box>
                        </CustomLink>

                        <CustomLink to="/Test">
                            <Box>
                                <BoxIcon src="./media/icons/house2.png" alt="entities-img" />
                                <BoxTitle>Structure the ownership</BoxTitle>
                                <BoxDescription>{postList[3]?.body}</BoxDescription>
                            </Box>
                        </CustomLink>

                        <CustomLink to="/Test">
                            <Box>
                                <BoxIcon src="./media/icons/ecosystem.png" alt="entities-img" />
                                <BoxTitle>Define the calendar</BoxTitle>
                                <BoxDescription>{postList[1]?.body}</BoxDescription>
                            </Box>
                        </CustomLink>
                    </BoxContainer>
                </Container2>


                <Container3>

                    <ResumeWorkHeaderContainer>
                        <ResumeWorkHeaderDiv1>
                            <HeaderTitle>Latest Updates</HeaderTitle>
                        </ResumeWorkHeaderDiv1>
                        <ResumeWorkHeaderDiv2>
                            <InputDiv>
                                <InputFilter placeholder="Filter by title..." value={inputText} onChange={inputHandler} ></InputFilter>
                                <InputImg src="./media/icons/search.png" alt="input-img"></InputImg>
                            </InputDiv>
                            <SelectFollowDiv>
                                <FollowImg src="./media/icons/followed.png" alt="follow-img"></FollowImg>
                                <FollowSpan>Followed</FollowSpan>
                                <DropdownArrow src="./media/icons/arrow-down.png" alt="arrow-img"></DropdownArrow>
                            </SelectFollowDiv>
                        </ResumeWorkHeaderDiv2>
                    </ResumeWorkHeaderContainer>


                    <ButtonsContainer>
                        <ButtonDiv1>
                            <Title1>All</Title1>
                        </ButtonDiv1>

                        <ButtonDiv2>
                            <Icon2 src="./media/icons/workspace/button2.svg" alt="button2" />
                            <Title2>SAS</Title2>
                        </ButtonDiv2>

                        <ButtonDiv3>
                            <Icon3 src="./media/icons/workspace/button3.svg" alt="button3" />
                            <Title3>SARL</Title3>
                        </ButtonDiv3>

                        <ButtonDiv4>
                            <Icon4 src="./media/icons/workspace/button4.svg" alt="button4" />
                            <Title4>Secondary buisness</Title4>
                        </ButtonDiv4>

                        <ButtonDiv5>
                            <Icon5 src="./media/icons/workspace/button5.svg" alt="button5" />
                            <Title5>Comunities</Title5>
                        </ButtonDiv5>

                        <ButtonDiv6>
                            <Icon6 src="./media/icons/workspace/button6.svg" alt="button6" />
                            <Title6>POA</Title6>
                        </ButtonDiv6>

                        <ButtonDiv7>
                            <Icon7 src="./media/icons/workspace/button7.svg" alt="button7" />
                            <Title7>Survey</Title7>
                        </ButtonDiv7>

                        <ButtonDiv8>
                            <Title8>...</Title8>
                        </ButtonDiv8>
                    </ButtonsContainer>


                    {"$post.title".toLowerCase().includes(inputText.toLowerCase()) &&
                        //musisz ogarnac jak zrobic wyszukiwanie pod pokazujace sie posty z api


                        postList.slice(currentPage, currentPage + 10).map((post) => (
                            <ResumeWorkMini key={post.id}>
                                <ResumeWorkTitle>{post.title}</ResumeWorkTitle>
                                <ResumeWorkText>{post.body}</ResumeWorkText>
                                <ResumeWorkBottom>
                                    <img src="../../media/icons/workspace/button2.svg" alt="entities-svg" /><LittleSpan>SAS</LittleSpan> . Updated 3 Days ago by John Doe
                                </ResumeWorkBottom>
                            </ResumeWorkMini>

                        ))
                    }
                    <ReactPaginate
                        previousLabel={'PREVIOUS'}
                        nextLabel={'NEXT'}
                        breakLabel={'...'}
                        breakClassName={'break-me'}
                        pageCount={postList.length}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageClick}
                        containerClassName={'pagination'}
                        pageLinkClassName={'paginationA'}
                        activeClassName={'active'}
                        pageClassName={'page'}
                        previousClassName={'previous'}
                        nextClassName={'next'}
                    />
                </Container3>



            </Wrapper>
        );

    }
    else {
        return (<Wrapper />)
    }
};
export default Workspace;

