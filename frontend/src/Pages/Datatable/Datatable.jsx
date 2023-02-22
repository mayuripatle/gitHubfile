import "./Datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import { useState } from "react";

const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'firstName', headerName: 'First name', width: 100 },
    { field: 'lastName', headerName: 'Last name', width: 100 },
    { field: 'phone', headerName: 'Mobile', width: 120 },
    { field: 'email', headerName: 'Email', width: 250 },
    { field: 'course', headerName: 'Course Opted', width: 130 },
    { field: 'fees', headerName: 'Fees', width: 130,
        renderCell:(param)=>{
            return <div className={`feeStatus ${param.row.fees}`}>{param.row.fees}</div>
        }
    },
];

export const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', email: 'snowjohn123@gmail.com', phone: '9500443328', course: 'FullStack', fees:'Unpaid' },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', email: 'lannisterserceei123@gmail.com', phone: '9500443328', course: 'Salesforce', fees:'Paid' },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', email: 'snowjohn123@gmail.com', phone: '9500443328', course: 'C Language', fees:'Unpaid' },
    { id: 4, lastName: 'Stark', firstName: 'Arya', email: 'aryasatark@gmail.com', phone: '9500443328', course: 'Java', fees:'Paid' },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', email: null, phone: '9500443328', course: 'FullStack', fees:'Paid' },
    { id: 6, lastName: 'Melisandre', firstName: null, email: 'mailsandre345@gmail.com', phone: '9500443328', course: 'Salesforce', fees:'Unpaid'},
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', email: 'climfiold123@gmail.com', phone: '9500443328',  course: 'C Language', fees:'Paid' },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', email: 'rossoni123@gmail.com', phone: '9500443328', course: 'Java', fees:'Unpaid' },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', email: 'harveyR@gmail.com', phone: '9500443328', course: 'FullStack', fees:'Paid' },
    { id: 10, lastName: 'Clifford', firstName: 'Ferrara', email: 'climfiold123@gmail.com', phone: '9500443328',  course: 'C Language', fees:'Unpaid' },
    { id: 11, lastName: 'Frances', firstName: 'Rossini', email: 'rossoni123@gmail.com', phone: '9500443328', course: 'Java', fees:'Paid' },
    { id: 12, lastName: 'Roxie', firstName: 'Harvey', email: 'harveyR@gmail.com', phone: '9500443328', course: 'FullStack', fees:'Paid' },
];
const Datatable = () => {
    const [data, setData] = useState(rows);

    const handleDelete = (id) => {
        // console.log("Inside function: delete");
        setData(data.filter(item => item.id !== id));
    }

    const actionColumn = [{
        field: 'action', headerName: 'Action', width: 150, renderCell: (param) => {
            return (
                <div className="cellAction">
                    <Link to="/students/:studentId" style={{ textDecoration: "none" }}>
                        <div className="editButton">Edit</div>
                    </Link>
                    <div className="deleteButton" onClick={()=>handleDelete(param.rows.id)}>Delete</div>
                </div>
            )
        }
    }]; 
    return (
        <div className="datatable">
            <DataGrid
                className="datagrid"
                rows={data}
                columns={columns.concat(actionColumn)}
                pageSize={8}
                rowsPerPageOptions={[8]}
                checkboxSelection
            />
        </div>
    );
}

export default Datatable;
