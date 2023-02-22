import Widget from "../../Components/Widgets/Widget";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./Dashboard.scss"
import Recents from "../../Components/Recents/Recents";
import Linkbox from "../../Components/Linkbox/Linkbox";
import Footer from "../../Components/Footer/Footer";

const Dashboard = () => {
    return(
        <div className="dashboard">
           <Sidebar/>
           <div className="dashboardContainer">
                <Navbar/>
                <div className="widgets">
                    <Widget type="inquiry"/>
                    <Widget type="student"/>
                    <Widget type="trainer"/>
                    <Widget type="course"/>
                </div>
                <div className="features">
                    <Recents/>
                </div>
                <div className="linkboxs">
                    <Linkbox type="facebook"/>
                    <Linkbox type="twitter"/>
                    <Linkbox type="linkedin"/>
                    <Linkbox type="instagram"/>
                </div>
                <Footer/>
           </div>
        </div>
    )
}
export default Dashboard;