import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

function App() {

  return (
    <> 
      <BrowserRouter>  {/*Define router for the app */}
        <Routes>
          <Route index element={<Home />} /> {/* Default route "/" → renders Home component */}
          <Route path="*" element={<NotFound/>} /> {/* Shows NotFound component when route does not exist */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
