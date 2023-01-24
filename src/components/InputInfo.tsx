import styled from "styled-components";
import { useState, useCallback } from "react";
import Modal from "./Modal";

const InputInfo = () => {
    //입력을 어떻게 받을지 상의 필요
    const [isClicked, setIsClicked] = useState<boolean>(false);
    const onClickButton = useCallback((): void => {
        setIsClicked(!isClicked);
    }, [isClicked]);
    let result: string = "";

    return (
        <Container>
            <Contents>
                <Title>사건 정보 입력하기</Title>
                <Line></Line>
                <Inputs>
                    <Box>
                        <Text>사건 발생 일시</Text>
                        <Input></Input>
                    </Box>
                    <Box>
                        <Text>피고인과의 관계</Text>
                        <Input></Input>
                    </Box>
                    <Box>
                        <Text>지속성 유무</Text>
                        <Select>
                            <option>유</option>
                            <option>무</option>
                        </Select>
                    </Box>
                    <Box>
                        <Text>사건 발생 장소</Text>
                        <Input></Input>
                    </Box>
                    <Box>
                        <Text>피고인의 행위</Text>
                        <Input></Input>
                    </Box>
                </Inputs>
            </Contents>
            <ButtonBox>
                <Button onClick={onClickButton}>결과보기</Button>
            </ButtonBox>
            {isClicked && (
                <Modal onClickButton={onClickButton} result={result} />
            )}
        </Container>
    );
};

export default InputInfo;

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 80px 0;
    gap: 50px;
`;
const Contents = styled.div`
    width: 60vw;
`;
const Title = styled.text`
    font-size: 35px;
    font-weight: 700;
`;
const Text = styled.div`
    font-size: 18px;
    border-right: 2px solid #c3cce2;
    width: 200px;
    height: 80px;
    padding: 20px;
`;
const Line = styled.div`
    background-color: #222222;
    width: 100%;
    height: 3px;
    margin: 20px auto;
`;
const Inputs = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 20px;
`;
const Box = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
`;
const Input = styled.input`
    border-radius: 15px;
    height: 52px;
    width: 650px;
    border: 2px solid #d9d9d9;
    padding: 15px;
`;
const Select = styled.select`
    border-radius: 15px;
    height: 52px;
    width: 650px;
    border: 2px solid #d9d9d9;
    padding: 15px;
`;

/* button */
const ButtonBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 70vw;
`;
const Button = styled.button`
    border: none;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    background-color: #f1f3f5;
    font-size: 20px;
    padding: 12px 68px;
    cursor: pointer;
    &:hover {
        transform: translateY(-2px);
    }
`;
