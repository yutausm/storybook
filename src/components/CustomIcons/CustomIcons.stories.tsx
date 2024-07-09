import { Meta, StoryFn } from '@storybook/react';
import CustomIcons from './CustomIcons';

export default {
  title: 'Components/CustomIcons',
  component: CustomIcons,
  argTypes: {
    icon: {
      control: {
        type: 'select',
      },
      options: [
        'paper-clip', 
        'info', 
        'user', 
        'send-email', 
        'cart', 
        'arrows-expand', 
        'qr-code-scan', 
        'repair', 
        'g', 
        'arrow-up-right-from-square', 
        'car-list',
      ],
    },
    size: {
      control: 'object',
      defaultValue: { width: '100px', height: '100px'},
    },
    viewBox: {
      control: 'object',
      defaultValue: { minX: 0, minY: 0, width: 100, height: 100 },
    },
    unit: { control: 'text' },
    fill: { control: 'color' },
  },
} as Meta<typeof CustomIcons>;

const Template: StoryFn<typeof CustomIcons> = (args) => <CustomIcons {...args} />;

export const PaperClipIcon = Template.bind({});
PaperClipIcon.args = {
  icon: 'paper-clip',
  size: {width: '100px', height: '100px'},
  viewBox: { minX: 0, minY: 0, width: 100, height: 100 },
  unit: 'px',
  fill: '#000',
};

export const InfoIcon = Template.bind({});
InfoIcon.args = {
  icon: 'info',
  size: {width: '100px', height: '100px'},
  viewBox: { minX: 0, minY: 0, width: 100, height: 100 },
  unit: 'px',
  fill: '#000',
};  

export const UserIcon = Template.bind({});
UserIcon.args = {
  icon: 'user',
  size: {width: '100px', height: '100px'},
  viewBox: { minX: 0, minY: 0, width: 100, height: 100 },
  unit: 'px',
  fill: '#000',
};

export const SendEmailIcon = Template.bind({});
SendEmailIcon.args = {
  icon: 'send-email',
  size: {width: '100px', height: '100px'},
  viewBox: { minX: 0, minY: 0, width: 100, height: 100 },
  unit: 'px',
  fill: '#000',
};

export const CartIcon = Template.bind({});
CartIcon.args = {
  icon: 'cart',
  size: {width: '100px', height: '100px'},
  viewBox: { minX: 0, minY: 0, width: 100, height: 100 },
  unit: 'px',
  fill: '#000',
};

export const ArrowsExpandIcon = Template.bind({});
ArrowsExpandIcon.args = {
  icon: 'arrows-expand',
  size: {width: '100px', height: '100px'},
  viewBox: { minX: 0, minY: 0, width: 100, height: 100 },
  unit: 'px',
  fill: '#000',
};

export const QrCodeScanIcon = Template.bind({});
QrCodeScanIcon.args = {
  icon: 'qr-code-scan',
  size: {width: '100px', height: '100px'},
  viewBox: { minX: 0, minY: 0, width: 100, height: 100 },
  unit: 'px',
  fill: '#000',
};

export const RepairIcon = Template.bind({});
RepairIcon.args = {
  icon: 'repair',
  size: {width: '100px', height: '100px'},
  viewBox: { minX: 0, minY: 0, width: 500, height: 500 },
  unit: 'px',
  fill: '#000',
};

export const GIcon = Template.bind({});
GIcon.args = {
  icon: 'g',
  size: {width: '100px', height: '100px'},
  viewBox: { minX: 0, minY: 0, width: 100, height: 100 },
  unit: 'px',
  fill: '#000',
};

export const ArrowUpRightFromSquareIcon = Template.bind({});
ArrowUpRightFromSquareIcon.args = {
  icon: 'arrow-up-right-from-square',
  size: {width: '100px', height: '100px'},
  viewBox: { minX: 0, minY: 0, width: 1000, height: 1000 },
  unit: 'px',
  fill: '#000',
};

export const CarListIcon = Template.bind({});
CarListIcon.args = {
  icon: 'car-list',
  size: {width: '100px', height: '100px'},
  viewBox: { minX: 0, minY: 0, width: 500, height: 500 },
  unit: 'px',
  fill: '#000',
};
