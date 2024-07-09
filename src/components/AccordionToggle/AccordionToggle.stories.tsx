import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import AccordionToggle from './AccordionToggle';

export default {
  title: 'Components/AccordionToggle',
  component: AccordionToggle,
} as Meta<typeof AccordionToggle>;

const Template: StoryFn<typeof AccordionToggle> = (args) => <AccordionToggle {...args} />;

export const Default = Template.bind({});
Default.args = {
  initialShowCount: 1,
  buttonTextAccordion: 'More',
  buttonTextAccordionActive: 'Close',
  children: [
    <div key="1">Item 1</div>,
    <div key="2">Item 2</div>,
    <div key="3">Item 3</div>,
    <div key="4">Item 4</div>,
    <div key="5">Item 5</div>,
  ],
};
