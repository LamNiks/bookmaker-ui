import { Popup } from "../src/components/Popup/Popup";
import { PopupProps } from "../src/components/Popup/types";

import { Story } from "@storybook/react";


export default {
  title: "Popup",
  component: Popup,
  args: {
    show: true,
  },
};

const Template: Story<PopupProps> = args => <Popup {...args} />;

export const PopupTemplate = Template.bind({});
PopupTemplate.args = {
  title: "Заголовок",
  description: "Описание",
};
