import "./Profile.scss"
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";

const Profile = () => {
  return (
    <div className="profile">
            <Sidebar/>
            <div className="profileContainer">
                <Navbar/>
                <div className="top">
                    <h1>Admin Profile</h1>
                </div>
                <div className="bottom">
                    <form>
                        <div className="formInput">
                            <label>First Name :</label>
                            <input type="text" placeholder="Enter First Name"/>
                        </div>
                        <div className="formInput">
                            <label>Last Name :</label>
                            <input type="text" placeholder="Enter Last Name"/>
                        </div>
                        <div className="formInput">
                            <label>Mobile :</label>
                            <input type="text" placeholder="Enter Mobile Number"/>
                        </div>
                        <div className="formInput">
                            <label>Email ID :</label>
                            <input type="text" placeholder="Enter Your Email"/>
                        </div>
                        <div className="formInput">
                            <label>Password :</label>
                            <input type="text" placeholder="Enter Password"/>
                        </div>
                        <div className="formInput">
                            <label>Confirm Password :</label>
                            <input type="text" placeholder="Confirm Password"/>
                        </div>
                        <button>Save</button>
                    </form>
                </div>
            </div>
        </div>
  );
}

export default Profile;
