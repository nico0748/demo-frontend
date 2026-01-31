import type { Meta, StoryObj } from '@storybook/react';
import { DashboardContainer } from './DashboardContainer';

const meta = {
  title: 'Demos/ProjectDashboard',
  component: DashboardContainer,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof DashboardContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
