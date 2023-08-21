import router from "./routers/Routers";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
