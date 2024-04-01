'use client'

import CompaniseColumns from "@/app/components/columns/companise-columns";
import CompaniseRows from "@/app/components/rows/companise-rows";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { NextPage } from "next";
import { useRouter } from "next/navigation";

const CompanisePage : NextPage = () => {
    const router = useRouter(); 

    return (
        <Box sx={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={CompaniseRows()}
            columns={CompaniseColumns()}
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

export default CompanisePage