import styled from "styled-components";
import googleIcon from "../assets/imgs/google.png";
import kakaoIcon from "../assets/imgs/kakao.png";
import naverIcon from "../assets/imgs/naver.png";

const Login = () => {
    return (
        <Component>
            <Title>로그인</Title>
            <Logins>
                <Button color="#ffffff">
                    <img src={googleIcon}></img>구글로 계속하기
                </Button>
                <Button color="#FEE500">
                    <img src={kakaoIcon}></img>카카오톡으로 계속하기
                </Button>
                <Button color="#03C75A">
                    <img src={naverIcon}></img>네이버로 계속하기
                </Button>
            </Logins>
        </Component>
    );
};

export default Login;

const Component = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 80px auto;
    gap: 70px;
`;
const Title = styled.text`
    font-size: 34px;
`;
const Logins = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
`;
const Button = styled.button`
    border-radius: 4px;
    height: 50px;
    width: 500px;
    background-color: ${(props) => props.color};
    border: 1px solid rgba(15, 15, 15, 0.15);
    font-size: 18px;
    gap: 12px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
