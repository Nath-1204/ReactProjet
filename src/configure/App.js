
import { Provider } from "react-redux";
import Container from "../counter/container";
import store from "./store";

const App = () => (
    <Provider store={store}>
        <Container />
    </Provider>
);

export default App;
