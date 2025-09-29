'use client';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useTRPC } from '@/trpc/client';

// This client component is used for pre-fetching trpc data
export function Client() {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.createAI.queryOptions({ text: 'ANURAG PREFRECHING FROM CLIENT!!!!!!'}));
  return <div>{JSON.stringify(data, null, 2)}</div>;
}
