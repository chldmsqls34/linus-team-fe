// "use client";

// import ArticleColumns from "@/app/organisms/columns/article-columns";
// import ArticleRows from "@/app/organisms/rows/article-rows";
// import { Box } from "@mui/material";
// import { DataGrid } from "@mui/x-data-grid";
// import React from "react";


// export default function Articles(){
//     const rows = ArticleRows()
//     const columns = ArticleColumns({} as IArticle)
//     return  (
//         <Box sx={{ height: 400, width: '100%' }}>
//         <DataGrid 
//           rows={rows}
//           columns={columns}
//           initialState={{
//             pagination: {
//               paginationModel: {
//                 pageSize: 5,
//               },
//             },
//           }}
//           pageSizeOptions={[5]}
//           checkboxSelection
//           disableRowSelectionOnClick
//         />
//         </Box>
//       );
// }