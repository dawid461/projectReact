
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
import { UserInstance } from '../../interfaces/ISingleUser';
//import Index from './components/index';

/*-------------style-for-all-elements------------*/
const Wrapper = styled.div`
background-color:#ffffff;
display: flex;
width:100%;
height:40px;
font-size: ${fontSize[14]};
box-shadow:2px 2px 10px ${Colors.lightgrey};
`;

/*-------------END-------------------------*/

const Profile: FC = () => {
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

    if (usersList?.length > 0) {
        return (
            <Wrapper>
                <h1>test</h1>

            </Wrapper>
        )
    }
    else {
        return (<Wrapper />)
    }
};
export default Profile;

