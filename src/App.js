import { lazy, Suspense } from "react";
import Loder from "./components/Loader/Loder";
import { Context } from "./Context/Context";

const Heder = lazy(() => import("./components/Heder/Heder"));
const MinImg = lazy(() => import("./components/Main-img/MinImg"));
const Recomended = lazy(() =>
  import("./components/RecomendedProducts/Recomended")
);

function App() {
  return (
    <>
      <Context>
        <Suspense fallback={<Loder />}>
          <Heder />
          <MinImg />
          <Recomended />
        </Suspense>
      </Context>
    </>
  );
}

export default App;
