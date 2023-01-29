import { Button } from "../src/components/Button/Button";
import { ButtonProps } from "../src/components/Button/types";
import { CloseIcon } from "../src/components/Popup/CloseIcon";

import { Story } from "@storybook/react";


export default {
  title: "Button",
  component: Button,
};

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const BlackButton = Template.bind({});
BlackButton.args = {
  children: "BlackButton",
  variant: "black",
};

export const BlueButton = Template.bind({});
BlueButton.args = {
  children: "BlueButton",
  variant: "blue",

};

export const GreenButton = Template.bind({});
GreenButton.args = {
  children: ["Button with icon", <CloseIcon className="ml-4" key={1} />],
  variant: "green",
};