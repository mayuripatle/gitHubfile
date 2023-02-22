import "./Recents.scss"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TableData from "../../Pages/Tables/TableData";

const Recents = () => {
    return (
        <div className="recent">
            <div className="top">
                <h1 className="title">Recent Inquiries</h1>
                <MoreVertIcon fontSize="small" />
            </div>
            <div className="bottom">
                 <TableData/>      
            </div>
        </div>
    )
}

export default Recents;