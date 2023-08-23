import { GridColDef } from "@mui/x-data-grid";
import { products } from "../../../public/data";
import TableData from "../../components/tableData/TableData";
import "./products.scss";
import Add from "../../components/add/Add";
import { useState } from "react";

const Products = () => {
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
      field: "title",
      headerName: "Title",
      width: 300,
      editable: true,
    },
    {
      field: "producer",
      headerName: "Producer",
      width: 150,
      editable: true,
    },
    {
      field: "price",
      headerName: "Price",
      width: 200,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 200,
    },
    {
      field: "inStock",
      headerName: "In Stock",
      type: "number",
      width: 200,
      editable: true,
    },
  ];

  return (
    <div className="productLists">
      <div className="headingInfo">
        <h1> All Users </h1>
        <button onClick={() => setOpen(true)}>Add New Products</button>
      </div>
      <TableData slug="products" columns={columns} rows={products} />
      {open && <Add columns={columns} slug="product" setOpen={setOpen} />}
    </div>
  );
};

export default Products;
