import CrudApi from "./components/CrudApi";
import { CrudProvider } from "./context/CrudContext";

function App() {
  return (
    <>
      <h1>CRUD con Context API</h1>
      <CrudProvider>
        <CrudApi />
      </CrudProvider>
    </>
  );
}

export default App;
