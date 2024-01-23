import clsx from 'clsx';
import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import { fetchLatestInvoices } from '@/app/lib/data';
import { Group, Paper, Stack } from '@mantine/core';

export default async function LatestInvoices() {
  // Make component async, remove the props
  const latestInvoices = await fetchLatestInvoices(); // Fetch data inside the component
  return (
    <Stack style={{ width: '90%' }}>
      {latestInvoices.map((invoice, i) => {
        return (
          <Group key={invoice.id} align="flex-start" justify="space-between">
            <Group>
              <Image
                src={invoice.image_url}
                alt={`${invoice.name}'s profile picture`}
                className="mr-1 rounded-full"
                width={32}
                height={32}
              />
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold md:text-base">
                  {invoice.name}
                </p>
                <p className="hidden text-sm text-gray-500 sm:block">
                  {invoice.email}
                </p>
              </div>
            </Group>
            <p
              className={`${lusitana.className} truncate text-sm font-medium md:text-base`}
            >
              {invoice.amount}
            </p>
          </Group>
        );
      })}
    </Stack>
  );
}
