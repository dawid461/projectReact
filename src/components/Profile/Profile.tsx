import { FC } from 'react';
import styled from 'styled-components';
import { Colors } from '../../styledHelpers/Colors';
import { fontSize } from '../../styledHelpers/FontSizes';
import { imageSize } from '../../styledHelpers/ImageSize';

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

    return (
        <Wrapper>
            <h1>test</h1>

        </Wrapper>
    );

}
export default Profile;

