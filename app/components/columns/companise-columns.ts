import { GridColDef } from "@mui/x-data-grid";

export default function CompaniseColumns(): GridColDef[]{
    return [{
        field: 'company',
        headerName: 'Company',
        width: 150,
        editable: true,
      },
      {
        field: 'contact',
        headerName: 'Contact',
        type: 'number',
        width: 150,
        editable: true,
      },
      {
        field: 'country',
        headerName: 'Country',
        width: 150,
      },
    ];
}