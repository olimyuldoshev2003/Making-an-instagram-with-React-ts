import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/Home/Home";
import Reels from "./pages/Reels/Reels";
import Explore from "./pages/Explore/Explore";
import Messages from "./pages/Messages/Messages";
import Profile from "./pages/Profile/Profile";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import Edit from "./pages/Edit/Edit";

import ProtectedRoute from "./utils/ProtectedRoute";
import AuthCheck from "./utils/AuthCheck";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import ChangePassword from "./pages/ChangePassword/ChangePassword";

const App = () => {
  const router = createBrowserRouter([
    //Login
    {
      path: "/",
      element: (
        <AuthCheck>
          <SignIn />
        </AuthCheck>
      ),
    },
    //SignUp
    {
      path: "signup",
      element: (
        <AuthCheck>
          <SignUp />,
        </AuthCheck>
      ),
    },
    //Forget Password
    {
      path: "forget-password",
      element: (
        <AuthCheck>
          <ForgetPassword />
        </AuthCheck>
      ),
    },
    {
      path: "reset-password",
      element: (
        <AuthCheck>
          <ResetPassword />
        </AuthCheck>
      ),
    },
    {
      path: "change-password",
      element: (
        <AuthCheck>
          <ChangePassword />
        </AuthCheck>
      ),
    },
    //Home
    {
      path: "home",
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          ),
        },
        {
          path: "explore",
          element: (
            <ProtectedRoute>
              <Explore />
            </ProtectedRoute>
          ),
        },
        {
          path: "reels",
          element: (
            <ProtectedRoute>
              <Reels />
            </ProtectedRoute>
          ),
        },
        {
          path: "messages",
          element: (
            <ProtectedRoute>
              <Messages />
            </ProtectedRoute>
          ),
        },
        {
          path: "profile",
          element: (
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          ),
        },
        {
          path: "edit",
          element: (
            <ProtectedRoute>
              <Edit />
            </ProtectedRoute>
          ),
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  // The `state` arg is correctly typed as `RootState` already

  // omit rendering logic

  return (
    // <div>

    // </div>

    <RouterProvider router={router} />
  );
};

export default App;
