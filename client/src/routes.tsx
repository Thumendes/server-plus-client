import { Layout } from "./components/Layout";
import { HomePage } from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import { ReactQueryDevtools } from "react-query/devtools";
import { TodosPage } from "./pages/todos";

const queryClient = new QueryClient();

export const AppRoutes = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/todos" element={<TodosPage />} />
          </Route>
        </Routes>
      </BrowserRouter>

      {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  );
};
