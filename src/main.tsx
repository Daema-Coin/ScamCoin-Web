import * as ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { GlobalStyle } from "@/themes/globalStyle.ts";
import "@/themes/fonts.css";
import { Modal } from "@/components";
import { BrowserRouter } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      refetchOnMount: true,
      staleTime: 60_000,
      retry: 2,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
      <Modal />
      <Toaster />
      <GlobalStyle />
      <ReactQueryDevtools />
    </BrowserRouter>
  </QueryClientProvider>
);
