import styled from "styled-components";
import menuIcon from "../assets/imgs/menu.png";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <Container>
            <Contents>
                <Link
                    to={"/"}
                    style={{ color: "black", textDecoration: "none" }}
                >
                    <Logo>PEOPLAW</Logo>
                </Link>
                <Right>
                    <Link
                        to={"/login"}
                        style={{ color: "black", textDecoration: "none" }}
                    >
                        <Text>로그인</Text>
                    </Link>
                    <img src={menuIcon}></img>
                </Right>
            </Contents>
        </Container>
    );
};

export default Header;

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #162447;
`;
const Contents = styled.div`
    width: 86vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 20px auto;
`;
const Logo = styled.text`
    font-size: 25px;
    color: #ffffff;
`;
const Text = styled.text`
    font-size: 18px;
    color: #ffffff;
`;
const Right = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    gap: 102px;
`;
