import {
  Table,
  Checkbox,
  ScrollArea,
  Group,
  Avatar,
  Text,
  rem,
  Card,
} from '@mantine/core';
import { lusitana } from '@/app/ui/fonts';
import { fetchSupports } from '@/app/lib/data';

export default async function SupportTable() {
  const data = await fetchSupports();

  const rows = data.map((item) => {
    return (
      <Table.Tr key={item.id}>
        <Table.Td>
          <Checkbox />
        </Table.Td>
        <Table.Td>
          <Group gap="sm">
            <Avatar size={26} src={item.image_url} radius={26} />
            <Text size="sm" fw={500}>
              {item.name}
            </Text>
            <Text size="xs" fw={400}>
              {item.email}
            </Text>
          </Group>
        </Table.Td>
        <Table.Td>{item.title}</Table.Td>
        <Table.Td>{item.description}</Table.Td>
        <Table.Td>{item.status}</Table.Td>
      </Table.Tr>
    );
  });
  return (
    <ScrollArea>
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Support</h1>
      </div>
      <Card key="sds" shadow="sm" padding="lg" radius="md" withBorder mt={20}>
        <Table miw={800} verticalSpacing="md">
          <Table.Thead>
            <Table.Tr>
              <Table.Th style={{ width: rem(40) }}>
                <Checkbox />
              </Table.Th>
              <Table.Th>User</Table.Th>
              <Table.Th>Title</Table.Th>
              <Table.Th>Description</Table.Th>
              <Table.Th>Status</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Card>
    </ScrollArea>
  );
}
