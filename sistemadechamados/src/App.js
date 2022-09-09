import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./contexts/auth";
import Router from "./routes";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
