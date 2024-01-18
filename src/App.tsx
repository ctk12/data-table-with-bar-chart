import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import routeConfig from "./config/RouteConfig";

function App() {
  return (
    <Layout>
        <Routes>
          {routeConfig.map(route => (
            <Route key={route.path} index={route.path === "/"} path={route.path} element={route.component} />
          ))}
        </Routes>
    </Layout>
  )
}

export default App;
