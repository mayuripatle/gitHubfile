import "./Sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import PsychologyAltOutlinedIcon from '@mui/icons-material/PsychologyAltOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../Context/DarkModeContext";
import { useContext } from "react";

const Sidebar = () => {
    const {dispatch} = useContext(DarkModeContext);
    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/" style={{ textDecoration: "none" }}><span className="logo">Pegasus</span></Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <li>
                            <DashboardIcon className="icon" />
                            <span>Dashboard</span>
                        </li>
                    </Link>
                    <p className="title">LIST</p>
                    <Link to="/students" style={{ textDecoration: "none" }}>
                        <li>
                            <PersonOutlineOutlinedIcon className="icon" />
                            <span>Students</span>
                        </li>
                    </Link>
                    <Link to="/trainers" style={{ textDecoration: "none" }}>
                        <li>
                            <PersonIcon className="icon" />
                            <span>Trainers</span>
                        </li>
                    </Link>
                    <Link to="/courses" style={{ textDecoration: "none" }}>
                        <li>
                            <LibraryBooksOutlinedIcon className="icon" />
                            <span>Courses</span>
                        </li>
                    </Link>
                    <Link to="/inquiries" style={{ textDecoration: "none" }}>
                        <li>
                            <PsychologyAltOutlinedIcon className="icon" />
                            <span>Inquiry</span>
                        </li>
                    </Link>
                    <p className="title">SERVICE</p>
                    <Link to="/setting" style={{ textDecoration: "none" }}>
                        <li>
                            <SettingsOutlinedIcon className="icon" />
                            <span>Settings</span>
                        </li>
                    </Link>
                    <p className="title">ADMIN</p>
                    <Link to="/profile" style={{ textDecoration: "none" }}>
                        <li>
                            <AccountCircleOutlinedIcon className="icon" />
                            <span>Profile</span>
                        </li>
                    </Link>
                    <Link to="/login" style={{ textDecoration: "none" }}>
                        <li>
                            <ExitToAppOutlinedIcon className="icon" />
                            <span>Login</span>
                        </li>
                    </Link>


                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption" onClick={()=> dispatch({type:"LIGHT"})}></div>
                <div className="colorOption" onClick={()=> dispatch({type:"DARK"})}></div>
            </div>
        </div>
    )
}
export default Sidebar;