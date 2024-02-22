import { httpBatchLink } from "@trpc/client";
import { createTRPCSolidStart } from "@solid-mediakit/trpc";
import type { AppRouter } from "../server/api/root"; // wherever your trpc router is located

const getBaseUrl = () => {
  if (typeof window !== "undefined") return "";
  // replace example.com with your actual production url
  if (process.env.NODE_ENV === "production") return "https://example.com";
  return `http://localhost:${process.env.PORT ?? 3000}`;
};

export const trpc = createTRPCSolidStart<AppRouter>({
  config(event) {
    return {
      links: [
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
        }),
      ],
    };
  },
});
