import Dashboard from "./Pages/Dashboard/Dashboard";
import { Route,Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import List from "./Pages/List/StudentList";
import New from "./Pages/New/New";
import SingleEdit from "./Pages/SingleEdit/SingleEdit";
import "./Style/dark.scss"
import { DarkModeContext } from "./Context/DarkModeContext";
import { useContext } from "react";
import Profile from "./Pages/Profile/Profile";
import Setting from "./Pages/Setting/Setting";

function App() {
  const {darkMode} = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
        <Routes>
          <Route path="/">
            <Route index element={<Dashboard/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/profile" element={<Profile/>}></Route>
            <Route path="/setting" element={<Setting/>}></Route>
            <Route path="/students">
              <Route index  element={<List  />}></Route>
              <Route path=":studentId" element={<SingleEdit/>}></Route>
              <Route path="new" element={<New/>}></Route>
            </Route>
            <Route path="/trainers">
              <Route index  element={<List/>}></Route>
              <Route path=":trainerId" element={<SingleEdit/>}></Route>
              <Route path="new" element={<New/>}></Route>
            </Route>
            <Route path="/courses">
              <Route index  element={<List/>}></Route>
              <Route path=":courseId" element={<SingleEdit/>}></Route>
              <Route path="new" element={<New/>}></Route>
            </Route>
            <Route path="/inquiries">
              <Route index  element={<List/>}></Route>
              <Route path=":inquiryId" element={<SingleEdit/>}></Route>
              <Route path="new" element={<New/>}></Route>
            </Route>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
