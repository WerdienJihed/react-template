import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { getUsers } from "./redux-store/users-slice.js";
import Navbar from "./components/navbar/navbar.jsx";
import HomePage from "./pages/home-page.jsx";
import AboutPage from "./pages/about-page.jsx";
import PrivateRoute from "./containers/private-route.jsx";
import NotFoundPage from "./pages/not-found-page.jsx";
import ProfilePage from "./pages/profile-page.jsx";
import LoginPage from "./pages/login-page.jsx";
import ItemsPage from "./pages/items-page.jsx";
import AddItemPage from "./pages/add-item-page.jsx";
import ItemPage from "./pages/item-page.jsx";
import EditItemPage from "./pages/edit-item-page.jsx";
import DeleteItemPage from "./pages/delete-item-page.jsx";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
          <Route
            path="profile"
            element={
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            }
          />
          <Route path="about" element={<AboutPage />} />
          <Route
            path="login"
            element={
              <PrivateRoute>
                <LoginPage />
              </PrivateRoute>
            }
          />
          <Route path="items">
            <Route index element={<ItemsPage />} />
            <Route path=":id" element={<ItemPage />} />
            <Route path="new" element={<AddItemPage />} />
            <Route path=":id/edit" element={<EditItemPage />} />
            <Route path=":id/delete" element={<DeleteItemPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
