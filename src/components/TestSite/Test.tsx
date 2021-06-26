import { FC } from 'react';
import styled from 'styled-components';
import { Colors } from '../../styledHelpers/Colors';
import { fontSize } from '../../styledHelpers/FontSizes';
/*-------------style-for-all-elements------------*/
const Wrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;
background-color:#ffffff;
margin-top:3em;
width:80%;
height:100vh;
font-size: ${fontSize[14]};
box-shadow:2px 2px 10px ${Colors.lightgrey};
h1{
    font-size:10em;
}
`;

/*-------------END-------------------------*/

const Test: FC = () => {

    return (
        <Wrapper>
            <div>
                <h1>404 Not Found</h1>
            </div>
        </Wrapper>
    );

}
export default Test;

