import { DataGrid, GridToolbar, GridColDef } from "@mui/x-data-grid";
import "./tableData.scss";
import { Link } from "react-router-dom";

type Props = {
  rows: object[];
  columns: GridColDef[];
  slug: string;
};

const TableData = (props: Props) => {
  const deleteHendel = (id: number) => {
    // Delete Item
    // axios.delete(`api/${slug}/id`)

    console.log(id + " has been Successfully Deleted");
  };

  const actionColum: GridColDef = {
    field: "actions",
    headerName: "Actions",
    width: 150,
    renderCell: params => {
      return (
        <div className="actions">
          <Link to={`/${props.slug}/${params.row.id}`}>
            {" "}
            <img src="../../../public/view.svg" alt="icon" />{" "}
          </Link>
          <span onClick={() => deleteHendel(params.row.id)}>
            <img src="../../../public/delete.svg" alt="icon" />
          </span>
        </div>
      );
    },
  };

  return (
    <div className="tableData">
      <DataGrid
        className="dataGrid"
        rows={props.rows}
        columns={[...props.columns, actionColum]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
      />
    </div>
  );
};

export default TableData;
