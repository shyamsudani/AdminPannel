import { createContext, useContext, useEffect, useState } from "react";
import PropTypes  from "prop-types";

const AuthContex = createContext() ;

const AuthProvider = ({ children }) => {

    const [token , setToken] = useState(localStorage.getItem("token"))
    const [user, setUser] = useState("");
    const [services, setServices] = useState("");

    const StorTokeninls = (ServerToken) => {
        setToken(ServerToken)
        return localStorage.setItem("token", ServerToken)
    }

    let isLoggedIn = !!token;
    console.log("isLoggedIn", isLoggedIn);

    const LogoutUser = () => {
        setToken("");
        return localStorage.removeItem("token")
    }


    // jwt authentication - to get currently user data
    const gettokenuser = `Bearer ${token}`;

    const userauthentication = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/auth/user",{
                method : "GET",
                headers : {
                    Authorization : gettokenuser,
                },
            });

            if(response.ok){
                const data = await response.json();
                console.log("User data fetched successfully", data.userData);
                setUser(data.userData);
            }

            
        } catch (error) {
            console.log("Error fetching user data");
        }
    }

    const servisdeteiles = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/data/service",
                {
                    method : "GET",
                }
            );

            if(response.ok){
                const data= await response.json();
                console.log(data.msg);
                setServices(data.msg);
            }
        } catch (error) {
            console.log(`services page are ${error}`)
        }
    }

    useEffect(() => {
        servisdeteiles()
        userauthentication()
    },[])

    return (<AuthContex.Provider value={{ isLoggedIn, LogoutUser ,StorTokeninls, user, services,gettokenuser}}>{children}</AuthContex.Provider>)
}

AuthProvider.propTypes = {
    children: PropTypes.node
};

const Auth = () => {
    const authtoken = useContext(AuthContex);

    return authtoken ; 
}

export  {AuthContex , AuthProvider };
export default Auth;
