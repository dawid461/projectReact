import { FC } from 'react';
import styled from 'styled-components';
import useDropdown from 'react-dropdown-hook';
import { Colors } from '../../styledHelpers/Colors';
import { fontSize } from '../../styledHelpers/FontSizes';
import { imageSize } from '../../styledHelpers/ImageSize';
import ExtendendMenu from '../ExtendedMenu/ExtendendMenu';

/*-------------style-for-all-elements------------*/
const Wrapper = styled.div`
background-color:#ffffff;
display: flex;
width:100%;
height:40px;
font-size: ${fontSize[14]};
box-shadow:2px 2px 10px ${Colors.lightgrey};
`;
/*-------------Item1-------------------------*/
/*--main1-div--*/
const LogoWithExtendedMenu = styled.div`
display:flex;
flex-direction:row;
width:32%;
`;
const Logo = styled.img`
width:${imageSize[14]};
`;
const LogoA = styled.a`
text-decoration:none;
color:none;
`;
const ExtendedMenuLogo = styled.img`
width:${imageSize[13]};
`;
/*--container2-div--*/
const ExtendedMenu = styled.div`
margin:5px;
display:flex;
justify-content:flex-end;
width:49%;
`;
const ExtendedMenuDropDownContent = styled.div`
text-align:center;
margin:2px;
background-color:${Colors.white};
color:${Colors.white};
`;
const ExtendedMenuDropDownImg = styled.img`
margin-top:10px;
width:${imageSize[11]};
`;
/*--container1-div--*/
const LogoContainer = styled.div`
display:flex;
justify-content:flex-start;
width:40%;
`;
const LogoContainerMargin = styled.div`
display:flex;
align-items:center;
width:2.8em;
`;
/*-------------Item2-------------------------*/
const Search = styled.div`
display:flex;
flex-direction:row;
border:1px solid ${Colors.lightgrey};
width:40%;
height:25px;
margin-top:6px;
`;
const SearchInputDiv = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%
`;
const SearchInput = styled.input`
width:95%;
height:90%;
border:none;
outline-style:none;
text-align:center;
`;
const SearchLogoDiv = styled.div`
display:flex;
align-items:center;
width:2em;
margin:2px;
`;
const SearchLogo = styled.img`
width:${imageSize[13]};
`;
/*-------------Item3-------------------------*/
const ThreeIcons = styled.div`
display:flex;
flex-direction:row;
width:30%;
`;
const ThreeIconsDiv = styled.div`
display:flex;
justify-content:flex-end;
width:97%;
`;
const Icon1 = styled.img`
width:${imageSize[13]};
margin-right:1em;
`;
const Icons2 = styled.img`
width:${imageSize[13]};
`;
const BackgroundIcons = styled.div`
display:flex;
justify-content:center;
border:2px solid ${Colors.lightgrey};
border-radius:30em 30em;
background:${Colors.lightgrey};
margin:2px;
width:2em;
height:30px;
`;
/*-------------END-------------------------*/

const TopNav: FC = () => {
    const [wrapperRef, dropdownOpen, toggleDropdown, closeDropdown] = useDropdown();
    return (
        <Wrapper>


            <LogoWithExtendedMenu>

                <LogoContainer>

                    <LogoContainerMargin>
                        <LogoA href="#"><Logo src="./media/icons/logo.png" alt="logo-site" /></LogoA>
                    </LogoContainerMargin>

                    <LogoContainerMargin>
                        <ExtendedMenuLogo src="./media/icons/house2.svg" alt="house-menu-img" />
                    </LogoContainerMargin>

                    <LogoContainerMargin>
                        <span>Home</span>
                    </LogoContainerMargin>

                </LogoContainer>

                <ExtendedMenu>
                    <div>
                        <div ref={wrapperRef}>
                            <div onClick={toggleDropdown}>
                                <ExtendedMenuDropDownImg src="./media/icons/arrow-down.svg" />
                            </div>
                            {dropdownOpen &&
                                <>
                                    <ExtendedMenuDropDownContent>
                                        {/*Dropdown items */

                                            <ExtendendMenu />

                                        }

                                    </ExtendedMenuDropDownContent>
                                </>

                            }
                        </div>
                    </div></ExtendedMenu>
            </LogoWithExtendedMenu>


            <Search>
                <SearchInputDiv>
                    <SearchInput type="text" placeholder="Search Legalcluster" />
                </SearchInputDiv>
                <SearchLogoDiv>
                    <SearchLogo src="./media/icons/search.png" />
                </SearchLogoDiv>
            </Search>

            <ThreeIcons>
                <ThreeIconsDiv>
                    <Icon1 src="./media/icons/house.svg" />
                    <BackgroundIcons>
                        <Icons2 src="./media/icons/comments.svg" />
                    </BackgroundIcons>
                    <BackgroundIcons>
                        <Icons2 src="./media/icons/bell.svg" />
                    </BackgroundIcons>

                </ThreeIconsDiv>
            </ThreeIcons>
        </Wrapper>
    );

}
export default TopNav;

