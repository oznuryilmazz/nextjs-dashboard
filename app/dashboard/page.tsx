import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import CardWrapper from '@/app/ui/dashboard/cards';
import { Container, Divider, Paper, Stack, Text } from '@mantine/core';

export default async function Page() {
  return (
    <Container fluid>
      <Stack justify="space-between" align="stretch" gap="xl" mt={30}>
        <Text size="xl" fw={700}>
          Dashboard
        </Text>
        <CardWrapper />
        <Paper shadow="sm" p="lg">
          <Stack
            justify="flex-start"
            align="center"
            style={{
              display: 'grid',
              gridTemplateColumns: '50% 50%',
            }}
            gap="xl"
            mt={30}
          >
            <Text size="xl" fw={700}>
              Revenue Chart
            </Text>
            <Text size="xl" fw={700}>
              Latest Invoices
            </Text>
            <Divider />
            <Divider />
          </Stack>
          <Stack
            justify="space-between"
            align="center"
            style={{
              display: 'grid',
              gridTemplateColumns: '50% 50%',
            }}
            gap="xl"
            mt={30}
          >
            <RevenueChart />
            <LatestInvoices />
          </Stack>
        </Paper>
      </Stack>
    </Container>
  );
}
