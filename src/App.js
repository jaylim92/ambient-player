import BackGroundImg from "./Components/BackGroundImg";
import styled from "styled-components";
import GlobalStyles from "./styles/global-styles";

import { RecoilRoot } from "recoil";
import { weatherInfo } from "./atom";

function App() {
  return (
    <>
      <RecoilRoot>
        <GlobalStyles />
        <BackGroundImg></BackGroundImg>
      </RecoilRoot>
    </>
  );
}

export default App;
