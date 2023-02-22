import "./TableData.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TableData = () => {
    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', email: 'snowjohn123@gmail.com', phone: '9500443328', course: 'FullStack', status: 'Approved' },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', email: 'lannisterserceei123@gmail.com', phone: '9500443328', course: 'Salesforce', status: 'Pending' },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', email: 'snowjohn123@gmail.com', phone: '9500443328', course: 'C Language', status: 'Pending' },
        { id: 4, lastName: 'Stark', firstName: 'Arya', email: 'aryasatark@gmail.com', phone: '9500443328', course: 'Java', status: 'Approved' },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', email: null, phone: '9500443328', course: 'FullStack', status: 'Approved' },
        { id: 6, lastName: 'Melisandre', firstName: null, email: 'mailsandre345@gmail.com', phone: '9500443328', course: 'Salesforce', status: 'Pending' },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', email: 'climfiold123@gmail.com', phone: '9500443328',  course: 'C Language', status: 'Approved' },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', email: 'rossoni123@gmail.com', phone: '9500443328', course: 'Java', status: 'Approved' },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', email: 'harveyR@gmail.com', phone: '9500443328', course: 'FullStack', status: 'Pending' },
    ];
    return (
        <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className="tablecells">Id</TableCell>
                        <TableCell className="tablecells">First Name</TableCell>
                        <TableCell className="tablecells">Last Name</TableCell>
                        <TableCell className="tablecells">Mobile</TableCell>
                        <TableCell className="tablecells">Email</TableCell>
                        <TableCell className="tablecells">Intrested Course</TableCell>
                        <TableCell className="tablecells">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell className="tablecells">{row.id}</TableCell>
                            <TableCell className="tablecells">{row.firstName}</TableCell>
                            <TableCell className="tablecells">{row.lastName}</TableCell>
                            <TableCell className="tablecells">{row.phone}</TableCell>
                            <TableCell className="tablecells">{row.email}</TableCell>
                            <TableCell className="tablecells">{row.course}</TableCell>
                            <TableCell className="tablecells">
                                <span className={`status ${row.status}`}>{row.status}</span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TableData;
