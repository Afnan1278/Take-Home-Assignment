import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "./app-routes";
import Template from "./components/theme/Template";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Template>
          <AppRoutes />
        </Template>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
