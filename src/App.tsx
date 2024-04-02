import { useRoutes } from "react-router-dom";
import routes from "../src/Routes/Index";

const App = () => {
  const element = useRoutes(routes);

  return <>{element}</>;
};

export default App;
