import { object, withKnobs } from "@storybook/addon-knobs";
import Table from "../component/Table";

export default {
  title: "Table",
  component: Table,
  decorators: [withKnobs],
  tags: ["autodocs"],
};

const data = [
  {
    name: "Abdulazeez Abdulazeez",
    course: "Water Resources and Environmental Engineering",
  },
  { name: "Albert Einstein", course: "Physics" },
  { name: "John Doe", course: "Estate Managment" },
  { name: "Sigismund Freud", course: "Neurology" },
  { name: "Leonhard Euler", course: "Mathematics" },
  { name: "Ben Carson", course: "Neurosurgery" },
];

export function ShowStudentsData() {
  return <Table data={object("data", data)} />;
}
