import styled from "styled-components";

const Report = () => {
    return (
        <Container>
            <Contents>
                <Left>
                    <Title>유사 판례</Title>
                    <SimilCases>
                        <Case> 대법원 2020.02.15.</Case>
                    </SimilCases>
                </Left>
                <Right>
                    <Title>판례 핵심 정보 요약</Title>
                    <KeyInfoBox></KeyInfoBox>
                </Right>
            </Contents>
            <Buttons>
                <Button>판례 전문 보기</Button>
                <Button>메일로 전송하기</Button>
            </Buttons>
        </Container>
    );
};

export default Report;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 80px 0;
`;
const Contents = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 40px;
`;
const Left = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
`;
const Title = styled.div`
    text-align: center;
    width: 100%;
    font-size: 35px;
    border-bottom: 3px solid #162447;
    padding: 20px;
`;

const SimilCases = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
`;
const Case = styled.button`
    border: none;
    cursor: pointer;
    font-size: 18px;
    color: #857f7f;
    text-align: start;
    background-color: transparent;
    border-left: 18px solid #d9d9d9;
    padding: 0 10px;
    &:hover {
        transform: translateY(-2px);
    }
    &:focus {
        color: #000000;
        border-left: 18px solid #162447;
    }
`;
const Right = styled.div`
    display: flex;
    flex-direction: column;
    width: 700px;
`;
const KeyInfoBox = styled.div`
    width: 100%;
    min-height: 400px;
    background-color: #f1f3f5;
    margin-top: 20px;
`;

/* button */
const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 20px;
    padding: 40px 200px;
`;
const Button = styled.button`
    border: none;
    cursor: pointer;
    border-radius: 5px;
    background-color: #f1f3f5;
    font-size: 18px;
    padding: 12px 68px;
    &:hover {
        transform: translateY(-2px);
    }
`;
