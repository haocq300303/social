import { Provider } from "react-redux";
import Navigators from "./src/navigators";
import store from "./src/redux/store";

export default function App() {
  return (
    <Provider store={store} className="">
      <Navigators />
    </Provider>
  );
}
