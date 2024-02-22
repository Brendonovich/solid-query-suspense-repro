import { trpc } from "~/lib/api";

export default function Home() {
  const me = trpc.me.useQuery();

  return (
    <main class="p-2 border border-gray-300 animate-in fade-in duration-500 slide-in-from-bottom-4 mx-auto">
      <pre>
        <code>{JSON.stringify(me.data, null, 2)}</code>
      </pre>
    </main>
  );
}
