'use client';
import { Group, Code, ScrollArea, rem } from '@mantine/core';
import {
  IconNotes,
  IconCalendarStats,
  IconGauge,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconLock,
} from '@tabler/icons-react';
import LinksGroup from './NavbarLinksGroup';
import UserButton from './UserButton';
import classes from './NavbarNested.module.css';
import Logo from '../logo';

const mockdata = [
  { label: 'Dashboard', icon: IconGauge, link: '../dashboard' },
  {
    label: 'Customers',
    icon: IconNotes,
    initiallyOpened: true,
    link: '../dashboard/customers',
    links: [
      { label: 'Overview', link: '../dashboard/customers' },
      { label: 'Forecasts', link: '/' },
      { label: 'Outlook', link: '/' },
      { label: 'Real time', link: '/' },
    ],
  },
  {
    label: 'Invoices',
    icon: IconCalendarStats,
    link: '../dashboard/invoices',
    links: [
      { label: 'Overview', link: '../dashboard/invoices' },
      { label: 'Previous releases', link: '/' },
      { label: 'Releases schedule', link: '/' },
    ],
  },
  {
    label: 'Support',
    icon: IconPresentationAnalytics,
    link: '../dashboard/support',
  },
  { label: 'Contracts', icon: IconFileAnalytics },
  { label: 'Settings', icon: IconAdjustments },
  {
    label: 'Security',
    icon: IconLock,
    links: [
      { label: 'Enable 2FA', link: '/' },
      { label: 'Change password', link: '/' },
      { label: 'Recovery codes', link: '/' },
    ],
  },
];

export default function SideNav() {
  const links = mockdata.map((item) => (
    <LinksGroup {...item} key={item.label} />
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.header}>
        <Group justify="space-between">
          <Logo />
          <Code fw={700}>v3.1.2</Code>
        </Group>
      </div>

      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>{links}</div>
      </ScrollArea>

      <div className={classes.footer}>
        <UserButton />
      </div>
    </nav>
  );
}
