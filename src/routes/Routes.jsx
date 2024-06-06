import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../errorPage/ErrorPage";
import HomePage from "../pages/HomePage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import AddTourismSpotPage from "../pages/AddTourismSpotPage";
import AllTouristsSpotPage from "../pages/AllTouristsSpotPage";
import AboutPage from "../pages/AboutPage";
import MyListPage from "../pages/MyListPage";
import AddCountry from "../pages/AddCountry";
import ViewSpotDetailsPage from "../pages/ViewSpotDetailsPage";
import ProtectedRoute from "../protectedRoute/ProtectedRoute";
import SpecificCountry from "../pages/SpecificCountry";
import UpdateTouristSpotPage from "../components/UpdateTouristSpotModal/UpdateTouristSpotPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <HomePage />,
                loader: () => fetch('https://explore-southeast-aisa-server.vercel.app/touristSpot')
            },
            {
                path:'/about',
                element:<AboutPage />
            },
            {
                path:'/login',
                element: <SignInPage />
            },
            {
                path:'/register',
                element: <SignUpPage />
            },
            {
                path: '/add/tourists/spot',
                element: (
                    <ProtectedRoute>
                        <AddTourismSpotPage />
                    </ProtectedRoute>
                )
            },
            {
                path:'/all/tourists/spot',
                element: <AllTouristsSpotPage />,
                loader: () => fetch('https://explore-southeast-aisa-server.vercel.app/touristSpot')
            },
            {
                path:'/myList',
                element:(
                    <ProtectedRoute>
                        <MyListPage />
                    </ProtectedRoute>
                ),
                loader: () => fetch('https://explore-southeast-aisa-server.vercel.app/touristSpot/:userEmail')
            },
            {
                path:'/add/country',
                element: (
                    <ProtectedRoute>
                        <AddCountry />
                    </ProtectedRoute>
                )
            },
            {
                path:'/viewDetails/:id',
                element: (
                    <ProtectedRoute>
                        <ViewSpotDetailsPage />
                    </ProtectedRoute>
                ),
                loader: ({params}) => fetch(`https://explore-southeast-aisa-server.vercel.app/touristSpot/${params.id}`)
            },
            {
                path:'/specificCountry/:country',
                element: <SpecificCountry />
            },
            {
                path:`/updated/page/:id`,
                element:<UpdateTouristSpotPage />
            }
        ]
    }
])

export default router;