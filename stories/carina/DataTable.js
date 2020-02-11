import React from "react";
import { radios } from "@storybook/addon-knobs";
import { DataTable as CarinaDataTable } from "../../src/core";
import { Colors } from "../../src/styles";
import { useStyles } from "./style";
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
  const classes = useStyles();
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
    <div className={classes.root}>
      <CarinaDataTable
        columns={columns}
        data={data}
        options={options}
      ></CarinaDataTable>
    </div>
  );
}
