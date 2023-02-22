import "./Setting.scss";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";

const Setting = () => {
  return (
    <div className="setting">
            <Sidebar/>
            <div className="settingContainer">
                <Navbar/>
                Setting Page
            </div>
        </div>
  );
}

export default Setting;
