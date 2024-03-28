import { GridCellParams, GridColDef } from "@mui/x-data-grid";


export default function CompanyColumns(props: ICompany): any[] {
  return [
    {
      field: 'company',
      headerName: 'Company',
      width: 150,
      editable: false,
      renderCell: (params: GridCellParams) =>
        params.value
    },
    {
      field: 'content',
      headerName: 'Content',
      width: 150,
      editable: false,
    },
    {
      field: 'country',
      headerName: 'Country',
      width: 110,
      editable: false,
    },

  ]
}