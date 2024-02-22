import { createTRPCRouter, publicProcedure } from "./utils";

export const appRouter = createTRPCRouter({
  me: publicProcedure.query(async () => {
    await new Promise((res) => setTimeout(res, 500));
    return {
      name: "Brendan",
      id: 1,
    };
  }),
});

export type AppRouter = typeof appRouter;
