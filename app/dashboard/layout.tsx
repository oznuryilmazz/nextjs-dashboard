'use client';
import SideNav from '@/app/ui/dashboard/sidenav';
import { Container, Grid } from '@mantine/core';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container fluid>
      <Grid>
        <Grid.Col span={2}>
          <SideNav />
        </Grid.Col>
        <Grid.Col span={10} style={{ padding: 30, marginTop: 20 }}>
          {children}
        </Grid.Col>
      </Grid>
    </Container>
  );
}
