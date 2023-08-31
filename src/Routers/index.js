import { Route, Routes, BrowserRouter } from "react-router-dom";

import AdminLogin from "../Screens/Auth/Login";
import ForgetPassword from "../Screens/Auth/ForgetPassword";
import ForgetPassword2 from "../Screens/Auth/ForgetPassword2";
import ForgetPassword3 from "../Screens/Auth/ForgetPassword3";
import { Dashboard } from "../Screens/Dashboard";

import { LeadListing } from "../Screens/LeadListing";
// import DepartDetails from "../Screens/LeadListing/DepartDetails";
import { UnitListing } from "../Screens/UnitListing";
import { BrandListing } from "../Screens/BrandListing";
import { Roles } from "../Screens/Roles";
import Profile from "../Screens/Profile";
import EditProfile from "../Screens/Profile/EditProfile";
import ChangePassword from "../Screens/Profile/ChangePassword";
import { ProtectedRoutes } from "./ProtectedRoutes";
import Error from "../Screens/Error";


export default function AdminRouter() {
  return (
    <BrowserRouter basename="/customProject">
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/forget-password2" element={<ForgetPassword2 />} />
        <Route path="/forget-password3" element={<ForgetPassword3 />} />

        <Route path="/dashboard" element={ <ProtectedRoutes Components={Dashboard}  />} />

        <Route path="/role-management" element={<ProtectedRoutes Components={Roles} />} />

        <Route path="/lead-listing" element={<ProtectedRoutes Components={LeadListing} />} />
        <Route path="/unit-listing" element={<ProtectedRoutes Components={UnitListing} />} />
        <Route path="/brand-listing" element={<ProtectedRoutes Components={BrandListing} />} />
        {/* <Route path="/department-management/depart-details/:id" element={<ProtectedRoutes Components={DepartDetails} />} /> */}

        <Route path="/profile" element={<ProtectedRoutes Components={Profile} />} />
        <Route path="/profile/edit-profile" element={<ProtectedRoutes Components={EditProfile} />} />
        <Route path="/profile/change-password" element={<ChangePassword />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
