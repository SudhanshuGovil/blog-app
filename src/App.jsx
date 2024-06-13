import { RouterProvider } from "react-router-dom";
import { router } from "./router";

function App() {
  return (
    <div className="h-screen bg-slate-100">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
