import { GridCellParams, GridColDef } from "@mui/x-data-grid";


export default function ArticleColumns(props: IArticle): any[] {
    return [
        {
            field: 'title',
            headerName: 'Title',
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
            field: 'writer',
            headerName: 'Writer',
            width: 110,
            editable: false,
        },
        {
            field: 'registerdate',
            headerName: 'Registerdate',
            width: 110,
            editable: false,
        },

    ]
}