import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./New.scss"

const New = (inputs, title) => {
    return(
        <div className="newStudent">
            <Sidebar/>
            <div className="newContainer">
                <Navbar/>
                <div className="top">
                    <h1>Add Student Information</h1>
                </div>
                <div className="bottom">
                    <form>
                        <div className="formInput">
                            <label>Id :</label>
                            <input type="text" placeholder="Enter Id"/>
                        </div>
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
                            <label>Email :</label>
                            <input type="text" placeholder="Enter Email"/>
                        </div>
                        <div className="formInput">
                            <label>Course Name :</label>
                            <input type="text" placeholder="Enter Course Name"/>
                        </div>
                        <div className="formInput">
                            <label>Fee Amount :</label>
                            <input type="text" placeholder="Enter Fee Amount"/>
                        </div>
                        <button>Save</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default New;