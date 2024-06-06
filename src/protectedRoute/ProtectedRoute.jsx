import { useContext } from "react";
import { AuthContext } from "../Context/firebaseProvider/FirebaseProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types'

const ProtectedRoute = ({ children }) => {
    const {user, loading} = useContext(AuthContext) || {};
    const location = useLocation();

    if(loading){ 
        return <span className="loading loading-spinner loading-lg"></span>
    }

    if(user) {
        return children ;
    }

    return <Navigate state={location?.pathname || '/'} to={`/login`} replace/>
};

ProtectedRoute.propTypes= {
    children: PropTypes.node,
}
export default ProtectedRoute;