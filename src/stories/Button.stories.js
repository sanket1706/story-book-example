import { userEvent, within } from "@storybook/testing-library";
import Button from "../component/Button";

export default {
  title: "Design System/atom/Button",
  component: Button,
  //   parameters: {
  //     docs: {
  //       description: {
  //         component: "API documentation for button component",
  //       },
  //     },
  //   },

  argTypes: { handleClick: { action: "clicked" } },
  tags: ["autodocs"],
  //   decorators: [
  //     (Story) => (
  //       <div style={{ margin: "3em" }}>
  //         {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
  //         <Story />
  //       </div>
  //     ),
  //   ],
};

const Template = (args) => <Button {...args} />;

export const Red = Template.bind({});
Red.args = {
  label: "Red Button",
  backgroundColor: "red",
  size: "sm",
};
Red.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole("button"));
};
Red.parameters = {
  docs: {
    description: {
      component: "API documentation for button component",
    },
  },
  design: {
    type: "figma",
    url: "https://www.figma.com/file/eeVNAPzBT6BoFoxqiywlYx/D-Quotation-Generator?node-id=4581%3A102301&mode=dev",
  },
};

export const Blue = Template.bind({});
Blue.args = {
  label: "Blue Button",
  backgroundColor: "blue",
  size: "lg",
};
