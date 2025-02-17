import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./header/header";
import { Home } from "./home/home";
import { Footer } from "./footer/footer";
import { Courses } from "./courses/courses";
import { UserLogin } from "./userLogin/userLogin";
import { UserRegister } from "./userRegister/userRegister";
import { AboutUs } from "./aboutUs/aboutUs";
import { AdminLogin } from "./adminLogin/adminLogin";
import { AdminDashboard } from "./adminDashboard/adminDashboard";
import { AddCourse } from "./addCourse/addCourse";
import { EditCourse } from "./editCourse/editCourse";
import { DeleteCourse } from "./deleteCourse/deleteCourse";
import { CourseDetails } from "./courseDetails/corseDetails";


function App() {
  return (
    <div>
      <BrowserRouter>
        {/* HEADER PART */}
        <Header />

        {/* SECTION PART AND ROUTES */}
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="courses" element={<Courses />} />
            <Route path="userLogin" element={<UserLogin />} />
            <Route path="userRegister" element={<UserRegister />} />
            <Route path="aboutUs" element={<AboutUs />} />
            <Route path="adminLogin" element={<AdminLogin />} />
            <Route path="adminDashboard" element={<AdminDashboard />} />
            <Route path="addCourse" element={<AddCourse />} />
            <Route path="editCourse/:id" element={<EditCourse />} />
            <Route path="deleteCourse/:id" element={<DeleteCourse />} />
            <Route path="courseDetails/:id" element={<CourseDetails />} />
          </Routes>
        </main>

        {/* FOOTER PART */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
