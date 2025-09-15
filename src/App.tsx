import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";

function App() {
  return (
    <div className="App">
      <Routes>
        {routes.map((item) => {
          const Component = item.component;
          return (
            <Route key={item.path} path={item.path} element={<Component />} />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
