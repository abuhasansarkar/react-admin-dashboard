import "./users.scss";
import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import TableData from "../../components/tableData/TableData";
import { userRows } from "../../../public/data";
import { useState } from "react";
import Add from "../../components/add/Add";

const Users = () => {
  const [open, setOpen] = useState(false);

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "avatar",
      headerName: "Avatar",
      width: 150,
      renderCell: params => {
        return <img src={params.row.img || "noavatar.png"} alt="avatar" />;
      },
    },

    {
      field: "firstName",
      headerName: "First name",
      width: 150,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
      editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 150,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 100,
      editable: true,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },

    {
      field: "verified",
      headerName: "Verified",
      width: 150,
      type: "boolean",
    },
  ];
  return (
    <div className="userLists">
      <div className="headingInfo">
        <h1> All Users </h1>
        <button onClick={() => setOpen(true)}>Add New User</button>
      </div>
      <TableData slug="users" columns={columns} rows={userRows} />
      {open && <Add columns={columns} slug="user" setOpen={setOpen} />}
    </div>
  );
};

export default Users;
