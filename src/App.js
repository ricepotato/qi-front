import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./Components/Router";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router></Router>
      </QueryClientProvider>
    </>
  );
}

export default App;
