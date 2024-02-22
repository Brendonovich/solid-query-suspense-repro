// @refresh reload
import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start";
import { Suspense } from "solid-js";
import "./app.css";
import { trpc } from "./lib/api";
import {
  QueryClient,
  QueryClientProvider,
  keepPreviousData,
} from "@tanstack/solid-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      placeholderData: keepPreviousData,
    },
  },
});

export default function App() {
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          {/* removing this suspense stops the animation from replaying */}
          <Suspense>
            <QueryClientProvider client={queryClient}>
              <trpc.Provider queryClient={queryClient}>
                {props.children}
              </trpc.Provider>
            </QueryClientProvider>
          </Suspense>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
