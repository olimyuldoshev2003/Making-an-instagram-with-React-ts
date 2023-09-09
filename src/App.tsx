import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from './Layout/Layout';
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';
import Reels from './pages/Reels/Reels';
import Explore from './pages/Explore/Explore';
import Messages from './pages/Messages/Messages';
import Profile from './pages/Profile/Profile';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import Edit from './pages/Edit/Edit';

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
      element: <SignUp />,
    },
    //Forget Password
    {
      path: "forget-password",
      element:<ForgetPassword/>
    },
    {
      path: "reset-password",
      element:<ResetPassword/>
    },
    {
      path: "change-password",
      element:<ChangePassword/>
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
          element: <Explore />,
        },
        {
          path: "reels",
          element: <Reels />,
        },
        {
          path: "messages",
          element: <Messages />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
        {
          path: "edit",
          element: <Edit />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  // The `state` arg is correctly typed as `RootState` already

  // omit rendering logic

  return (
    // <div>

    // </div>

    <RouterProvider router={router} />
  );
}

export default App