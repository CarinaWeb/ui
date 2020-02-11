import React from "react";
import MaterialTable, { MaterialTableProps } from "material-table";
import { Paper } from "@material-ui/core";

interface Props extends MaterialTableProps<any> {}

export default (props: Props) => {
  const { ...other } = props;

  return (
    <MaterialTable
      components={{
        Container: props => <Paper {...props} elevation={0} />,
      }}
      {...other}
    />
  );
};
