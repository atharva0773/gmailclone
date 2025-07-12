import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Navbar from "./components/shared/Navbar";
import Body from "./components/Body";
import Inbox from "./components/Inbox";
import Mail from "./components/Mail";
import Sendmail from "./components/Sendmail";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebase";
import Login from "./components/Login";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Inbox />,
      },
      {
        path: "/mail/:id",
        element: <Mail />,
      },
    ],
  },
]);

function App() {
  const { user } = useSelector(store => store.app);
  return (
    <div className="bg-[#F6F8FC] h-screen w-screen overflow-hidden">
      {!user ? (
        <Login />
      ) : (
        <>
          <Navbar />
          <RouterProvider router={router} />
          <div className="absolute w-[40%]  bottom-0.5 right-15 z-10">
            <Sendmail />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
