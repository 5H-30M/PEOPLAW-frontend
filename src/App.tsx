import InputInfoPage from "pages/InputInfoPage";
import LoginPage from "pages/LoginPage";
import MainPage from "pages/MainPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

function App() {
    return (
        <Router>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<MainPage />}></Route>
                <Route path="/login" element={<LoginPage />}></Route>
                <Route path="/inputinfo" element={<InputInfoPage />}></Route>
            </Routes>
        </Router>
    );
}

export default App;

const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing: border-box;
    }
`;
