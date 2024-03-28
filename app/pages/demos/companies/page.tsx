"use client";
import CompanyColumns from "@/app/organisms/columns/company-columns";
import CompanyRows from "@/app/organisms/rows/company-rows";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";


export default function Companies(){
    const rows = CompanyRows()
    const columns = CompanyColumns({} as ICompany)
    
    return  (
        <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid 
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
        </Box>
      );
}