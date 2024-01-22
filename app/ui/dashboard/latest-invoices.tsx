import clsx from 'clsx';
import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import { fetchLatestInvoices } from '@/app/lib/data';
import { Paper } from '@mantine/core';

export default async function LatestInvoices() {
  // Make component async, remove the props
  const latestInvoices = await fetchLatestInvoices(); // Fetch data inside the component
  return (
    <Paper shadow="xs" p="xl">
      {latestInvoices.map((invoice, i) => {
        return (
          <div
            key={invoice.id}
            className={clsx('flex flex-row items-center justify-between py-4', {
              'border-t': i !== 0,
            })}
          >
            <div className="flex items-center">
              <Image
                src={invoice.image_url}
                alt={`${invoice.name}'s profile picture`}
                className="mr-4 rounded-full"
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
            </div>
            <p
              className={`${lusitana.className} truncate text-sm font-medium md:text-base`}
            >
              {invoice.amount}
            </p>
          </div>
        );
      })}
    </Paper>
  );
}
