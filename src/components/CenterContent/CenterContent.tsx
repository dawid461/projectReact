
import { FC } from 'react';
import styled from "styled-components";
import { Colors } from '../../styledHelpers/Colors';
import { fontSize } from '../../styledHelpers/FontSizes';
import { imageSize } from '../../styledHelpers/ImageSize';
/*----------Wrapper--------------------*/
const Wrapper = styled.div`
display:flex;
flex-direction:column;
width:90%;
height:100%;
Font-size:${fontSize[10]};
`;
const Container1 = styled.div`
display:flex;
flex-direction:row;
width:100%;
height:12%;
margin-top:2em;
`;
const ImgWithTtile = styled.div`
display:flex;
width:30%;
background-color:lightblue;
`;
const LatestPublications = styled.div`
display:flex;
width:70%;
background-color:yellow;
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
`;

/*-------------Containe-3--------------*/

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
                <ImgWithTtile></ImgWithTtile>
                <LatestPublications></LatestPublications>
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

