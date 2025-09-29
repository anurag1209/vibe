import { trpc, getQueryClient } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Client } from "./Client";

const Page = async () => {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.createAI.queryOptions({ text: 'Anurag PREFETCH!!!!' }));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div>
        <Client />
      </div>
    </HydrationBoundary>
  );
}

export default Page;
