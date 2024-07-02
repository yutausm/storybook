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
  initialShowCount: 3,
  buttonTextAccordion: 'Show More',
  buttonTextAccordionActive: 'Show Less',
  children: (
    <>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div>
      <div>Item 5</div>
    </>
  ),
};
