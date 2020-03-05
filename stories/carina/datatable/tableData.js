import React from "react";
import { Link } from "@material-ui/core";

export const columns = [
  { title: "Last Updated", field: "lastUpdated" },
  {
    title: "Family Child Care Provider",
    field: "provider",
    render: rowData => <Link>{rowData.provider}</Link>,
  },
  {
    title: "Substitute",
    field: "substitute",
    render: rowData => <Link>{rowData.substitute}</Link>,
  },
  { title: "Status", field: "status" },
];

export const data = [
  {
    id: 1,
    lastUpdated: "2020/1/10",
    provider: "Hernandez, Maria",
    substitute: "Gomez, Tina",
    status: "Initiated",
  },
  {
    id: 2,
    lastUpdated: "2020/1/10",
    provider: "Hernandez, Maria",
    substitute: "Ramirez, Penelope",
    status: "In Progress",
  },
  {
    id: 3,
    lastUpdated: "2020/1/10",
    provider: "Perez, Isabella",
    substitute: "Gomez, Tina",
    status: "In Progress",
  },
  {
    id: 4,
    lastUpdated: "2020/1/10",
    provider: "Hernandez, Maria",
    substitute: "Gomez, Tina",
    status: "Unresponsive",
  },
  {
    id: 5,
    lastUpdated: "2020/1/10",
    provider: "Hernandez, Maria",
    substitute: "Gomez, Tina",
    status: "Unresponsive",
  },
  {
    id: 6,
    lastUpdated: "2020/1/10",
    provider: "Hernandez, Maria",
    substitute: "Gomez, Tina",
    status: "Unresponsive",
  },
  {
    id: 7,
    lastUpdated: "2020/1/10",
    provider: "Hernandez, Maria",
    substitute: "Ramirez, Penelope",
    status: "Matched",
  },
  {
    id: 8,
    lastUpdated: "2020/1/10",
    provider: "Hernandez, Maria",
    substitute: "Ramirez, Penelope",
    status: "Matched",
  },
  {
    id: 9,
    lastUpdated: "2020/1/10",
    provider: "Perez, Isabella",
    substitute: "Gomez, Tina",
    status: "Not Matched",
  },
  {
    id: 10,
    lastUpdated: "2020/1/10",
    provider: "Perez, Isabella",
    substitute: "Gomez, Tina",
    status: "Not Matched",
  },
];
