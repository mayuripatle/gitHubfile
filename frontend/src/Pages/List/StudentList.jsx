import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Datatable from "../Datatable/Datatable";
import "./StudentList.scss"
import { Link } from "react-router-dom";

const List = () => {
    return(
        <div className="list">
            <Sidebar/>
            <div className="listContainer">
                <Navbar/>
                <div className="buttonContent">
                    <Link to="/students/new" style={{ textDecoration: "none" }}>
                        <button>Add New Sudent</button>
                    </Link>
                </div>
                <Datatable/>
            </div>
        </div>
    )
}
export default List;