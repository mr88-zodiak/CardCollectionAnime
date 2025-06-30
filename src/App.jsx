import Composition from "./component/Composition";
import Footer from "./component/Footer";
import Input from "./component/Input";
export default function App() {
  return (
    <div>
      <Composition>
        <h1>hello</h1>
        <Input />
        <Footer />
      </Composition>
    </div>
  );
}
