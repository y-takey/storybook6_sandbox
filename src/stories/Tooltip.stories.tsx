import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Tooltip, { Props } from "./Tooltip";

export default {
  title: "Example/Tooltip",
  component: Tooltip,
} as Meta;

const Template: Story<Props> = (args) => <Tooltip {...args} />;

export const Base = Template.bind({});
