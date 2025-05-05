import type { Meta, StoryObj } from '@storybook/angular';
import { expect, userEvent, within } from '@storybook/test';
import { PaginationComponent } from '../lib/pagination.component';


const meta: Meta<PaginationComponent> = {
  title: 'Example/Pagination',
  component: PaginationComponent,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<PaginationComponent>;

export const paginationDefault: Story = {};

