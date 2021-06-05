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
width:90%;
height:40em;
margin-top:15px;
box-shadow: 5px 4px 10px 6px rgba(0,0,0,0.2);
`;

/*-------------Container-3--------------------*/
const Container3 = styled.div`
display:flex;
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
                    <h1>siema</h1>
                </Container2>


            </Wrapper>
        );

    }
    else {
        return (<Wrapper />)
    }
};
export default Workspace;

