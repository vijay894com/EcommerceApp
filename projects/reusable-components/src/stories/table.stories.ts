import type { Meta, StoryObj } from '@storybook/angular';
import { tableComponent } from '../lib/table/table.component';

const meta: Meta<tableComponent> = {
  title: 'Example/Table',
  component: tableComponent,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<tableComponent>;

export const LoggedOut: Story = {};

