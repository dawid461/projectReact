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
flex-direction:row;
align-items:center;
justify-content:center;
width:90%;
height:25em;
background-color:${Colors.lightgrey};
margin-top:4em;
box-shadow: 5px 2px 10px 6px rgba(0,0,0,0.2);
`;
const Box = styled.div`
width:20em;
height:15em;
display:flex;
flex-direction:column;
justify-content:flex-start;
background-color:${Colors.white};
border-radius:10px;
margin-left:2em;
margin-top:4em;
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
    color:#76b5c5;
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
margin-bottom:12px;
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
                    <Box>
                        <BoxIcon src="./media/icons/entities.png" alt="entities-img" />
                        <BoxTitle>{postList[1]?.title}</BoxTitle>
                        <BoxDescription>{postList[1]?.body}</BoxDescription>
                    </Box>

                    <Box>
                        <BoxIcon src="./media/icons/house2.png" alt="entities-img" />
                        <BoxTitle>{postList[3]?.title}</BoxTitle>
                        <BoxDescription>{postList[2]?.body}</BoxDescription>
                    </Box>

                    <Box>
                        <BoxIcon src="./media/icons/ecosystem.png" alt="entities-img" />
                        <BoxTitle>{postList[6]?.title}</BoxTitle>
                        <BoxDescription>{postList[3]?.body}</BoxDescription>
                    </Box>
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


                    {"$post.title".toLowerCase().includes(inputText.toLowerCase()) &&
                        //musisz ogarnac jak zrobic wyszukiwanie pod pokazujace sie posty z api


                        postList.slice(currentPage, currentPage + 10).map((post) => (
                            <ResumeWorkMini key={post.id}>
                                <ResumeWorkTitle>{post.title}</ResumeWorkTitle>
                                <ResumeWorkText>{post.body}</ResumeWorkText>
                                <ResumeWorkBottom>
                                    <img src="../../media/icons/entities.svg" alt="entities-svg" /><LittleSpan>SAS</LittleSpan> . Updated 3 Days ago by John Doe
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

