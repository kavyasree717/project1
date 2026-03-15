// src/hooks/useSavingsData.ts
import { useQuery } from '@tanstack/react-query';

type SavingsItem = {
  title: string;
  amount: number;
};

type SavingsData = {
  total: number;
  items: SavingsItem[];
};

export function useSavingsData() {
  return useQuery<SavingsData>({
    queryKey: ['savings'],

    queryFn: async () => {
      // Fetch from a public dummy API (products as fake recommendations)
      const res = await fetch('https://dummyjson.com/products?limit=4');
      if (!res.ok) throw new Error('Failed to fetch');

      const data = await res.json();

      // Map dummy products to our savings format
      const mappedItems = data.products.map((p: any, index: number) => ({
        title: [
          'Right-size your cluster nodes',
          'Right-size your container requests',
          'Remedy abandoned workloads',
          'Reserve instances',
        ][index],

        amount: [
          2204.35,
          1704.84,
          1122.42,
          982.15,
        ][index] + (Math.random() * 200 - 100), // small variation to look dynamic
      }));

      return {
        total: 6013.76, // we keep total fixed for now (can make dynamic later)
        items: mappedItems,
      };
    },

    staleTime: 5 * 60 * 1000, // 5 minutes → strong caching
    gcTime: 10 * 60 * 1000,   // garbage collect after 10 min
    retry: 2,                 // retry failed requests twice
  });
}