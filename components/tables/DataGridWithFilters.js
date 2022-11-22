import React from "react";
import { DataGrid } from '@mui/x-data-grid';

const DataGridWithFilters = ({ title, rows, columns, pageSize = 5, rowsPerPageOptions=[5] }) => {

  return (
    <div style={{ height: 400, width: '100%' }}>
       {title != null ?? <h3>{title}</h3>}
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        rowsPerPageOptions={rowsPerPageOptions}
        sx={{
          fontSize: 15,
          boxShadow: 2,
          border: 2,
          borderColor: 'primary.light',
   
        }}
      />
    </div>
  );
}

export default DataGridWithFilters;