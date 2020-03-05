import React from "react";
import { radios } from "@storybook/addon-knobs";
import { DataTable as CarinaDataTable } from "../../../dist/core";
import { Colors } from "../../../dist/styles";
import { columns, data } from "./tableData";

const DEFAULT_OPTIONS = {
  showTitle: false,
  searchFieldAlignment: "left",
  emptyRowsWhenPaging: false,
  columnsButton: true,
  sorting: true,
  exportButton: true,
  actionsColumnIndex: 100,
  rowStyle: rowData => ({
    backgroundColor:
      rowData.tableData.id % 2 === 0 ? Colors.GRAY30 : Colors.WHITE,
  }),
};

export default function DataTable() {
  const searchFieldAlignment = radios(
    "Search Field Alignement",
    ["left", "right"],
    "left"
  );

  const options = {
    ...DEFAULT_OPTIONS,
    searchFieldAlignment: searchFieldAlignment,
  };

  return (
    <CarinaDataTable
      columns={columns}
      data={data}
      options={options}
    ></CarinaDataTable>
  );
}
