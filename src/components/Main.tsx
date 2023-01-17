import styled from "styled-components";
import scaleIcon from "../assets/imgs/scale.png";
import { useNavigate } from "react-router-dom";

const Main = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <Div color="#ffffff">
                <img src={scaleIcon} width="300px" height="235.5px"></img>
                <Right>
                    <Text fontSize={"40px"} fontWeight="700">
                        사건 정보를 입력하고
                    </Text>
                    <Text fontSize={"40px"} fontWeight="700">
                        나와 유사한 판례를 알아보세요
                    </Text>
                    <Button onClick={() => navigate("/inputinfo")}>
                        알아보러 가기
                    </Button>
                </Right>
            </Div>
            <Div2 color="#162447">
                <Peoplaw>
                    <Text fontSize={"84px"} color="#ffffff">
                        PEOPL
                    </Text>
                    <Text fontSize={"84px"} color="#857F7F">
                        E
                    </Text>
                    <Text fontSize={"84px"} color="#ffffff">
                        &nbsp;+&nbsp;
                    </Text>
                    <Text fontSize={"84px"} color="#857F7F">
                        L
                    </Text>
                    <Text fontSize={"84px"} color="#ffffff">
                        AW
                    </Text>
                </Peoplaw>
                <Text fontSize={"24px"} color="#ffffff">
                    성범죄 피해자가 사람답게 살아갈 수 있는 사회를 꿈꿉니다.
                </Text>
                <Text fontSize={"24px"} color="#ffffff">
                    피해자는 일상으로, 가해자는 감옥으로
                </Text>
            </Div2>
        </Container>
    );
};

export default Main;

const Container = styled.div``;
const Div = styled.div`
    width: 100%;
    height: 720px;
    background-color: ${(props) => props.color};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 200px;
`;
const Div2 = styled(Div)`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
`;
const Right = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;
const Peoplaw = styled.div`
    display: flex;
    flex-direction: row;
`;
const Text = styled.text`
    font-size: ${(props) => props.fontSize};
    font-weight: ${(proprs) => proprs.fontWeight};
    color: ${(props) => props.color};
`;
const Button = styled.button`
    border: none;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #f1f3f5;
    font-size: 20px;
    padding: 12px 68px;
    margin-top: 40px;
    cursor: pointer;
`;
