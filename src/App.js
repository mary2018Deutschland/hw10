import s from "./App.module.css";
import { CatImage } from "./components/CatImage";

function App() {
  return (
    <div className={s.container}>
      <CatImage />
    </div>
  );
}

export default App;
