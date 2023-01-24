import { PropsWithChildren } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import open from "../assets/imgs/openquote.png";
import close from "../assets/imgs/closequote.png";

interface Props {
    onClickButton: () => void;
    result: string;
}

const Modal = ({ onClickButton, result }: PropsWithChildren<Props>) => {
    const navigate = useNavigate();
    return (
        <Container>
            <ModalBox>
                <QuoteBox>
                    <Quote
                        style={{
                            width: "22px",
                        }}
                    >
                        <img src={open}></img>
                    </Quote>
                    <Content>{result}</Content>
                    <Quote>
                        <img
                            src={close}
                            style={{
                                width: "22px",
                            }}
                        ></img>
                    </Quote>
                </QuoteBox>
                <Text>
                    입력하신 정보는 다음과 같은 문장으로 변환되어 처리됩니다.
                </Text>
                <Text>확인 후 [결과보기] 버튼을 눌러 결과를 확인하세요.</Text>
                <Buttons>
                    <Button
                        onClick={(e) => {
                            e.preventDefault();
                            onClickButton();
                        }}
                    >
                        다시 입력
                    </Button>
                    <Button onClick={() => navigate("/report")}>
                        결과 보기
                    </Button>
                </Buttons>
            </ModalBox>
        </Container>
    );
};

export default Modal;

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.2);
`;
const ModalBox = styled.div`
    width: 800px;
    height: 468px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border-radius: 3px;
    border-radius: 5px;
    box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);
    box-sizing: border-box;
    background-color: #ffffff;
    z-index: 10000;
    padding: 40px;
`;
const QuoteBox = styled.div`
    max-width: 600px;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 18px;
    margin-bottom: 15px;
    gap: 5px;
`;
const Text = styled.text`
    font-size: 17px;
    font-weight: bold;
`;
const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin-top: 15px;
`;
const Button = styled.button`
    border: none;
    cursor: pointer;
    border-radius: 5px;
    background-color: #f1f3f5;
    font-size: 18px;
    padding: 10px 57px;
    &:hover {
        transform: translateY(-2px);
    }
`;
const Quote = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;
const Content = styled.div`
    display: flex;
    flex-direction: row;
    white-space: pre-wrap;
    word-break: break-all;
    overflow-y: auto;
`;
