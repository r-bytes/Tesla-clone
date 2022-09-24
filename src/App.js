import { Header, Home } from "./components"
import { useStateContext } from "./context/StateContext"
import styled from "styled-components"

function App() {
    const {showBurger} = useStateContext()
    console.log(showBurger)

    return (
        <div>
            <Header />
            <Wrapper show={showBurger}>
                <Home />
            </Wrapper>
        </div>
    );
}

export default App;

const Wrapper = styled.div`
    filter: ${props => props.show ? "blur(8px)" : ""};
    -webkit-filter: ${props => props.show ? "blur(8px)" : ""};
`