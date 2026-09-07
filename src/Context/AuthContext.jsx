
import {createContext, useContext, useState} from "react"
import { FaJsfiddle } from "react-icons/fa6";

const AuthContext = createContext(null);

export function AuthProvider ({children}){

    const [user, setUser] = useState(() =>{
        try{
            const savedUser = localStorage.getItem("user")
            return savedUser ? JSON.parse(savedUser) : null 

        }catch(error){
            console.error("Error Loading user:", error);
            return null;
        }
    })

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    function signup(email, password, name){
          try {
            setLoading(true)
            setError(null)

            if(!email || !password || !name){
                setError("All fields are required");
                setLoading(false);
                return { success: false, error: "All fields are required" };
            }

            const exitingUser = localStorage.getItem("registeredUser")
            if(exitingUser){
                const parsed = JSON.parse(exitingUser);
                if(parsed.email === email.trim().toLowerCase()){
                    setError("Email already registered");
                    setLoading(false)
                    return { success: false, error: "Email already registered" }
                }
              
            }

            const newUser = {
                id: Date.now().toString(),
                name: name.trim(),
                email: email.trim().toLowerCase(),
                password: password,
                phone: "",
                address: "",
                bio:"",
                profileImage:"",
                createdAt: new Date().toISOString(),
               
            }
            

          
           localStorage.setItem("registeredUser", JSON.stringify(newUser))

              localStorage.setItem("user", JSON.stringify(newUser));


           setUser(newUser);
           setLoading(false);

           return {success: true, user: newUser}

          } catch (err) {
            const errorMsg = err instanceof Error ? err.message : "sign up filed"
            setError(errorMsg);
            setLoading(false);
            return {success: false, error: errorMsg}
          }
    }

    function signIn(email, password){

        try {
            setLoading(true)
            setError(null)

            const savedUser = localStorage.getItem("registeredUser");

            if(!savedUser){
                setError("User not found. Please sign up first.");
                setLoading(false);
                return false;
            }

            const parsed = JSON.parse(savedUser);

            if (parsed.email === email.trim().toLowerCase() && parsed.password === password) {
                localStorage.setItem("user", JSON.stringify(parsed))
                setUser(parsed)
                setLoading(false)
                return true;
            }
            
            setError("Invalid Email or password")
            setLoading(false)
            return false;
        } catch(err){
     const errorMsg = err instanceof Error ? err.message : "Signin failde";
     setError (errorMsg)
     setLoading (false)
     return false;
        }

    }
     
    function signOut(){
        localStorage.removeItem("user")
        setUser(null)
    }

  function updateProfile(update){
    if(!user){
        return{succes: false, error: "Not signed In"}
    }
   const updateUser = {...user, ...update};
   localStorage.setItem("user", JSON.stringify(updateUser))
     localStorage.setItem("registeredUser", JSON.stringify(updateUser))

     setUser(updateUser)

     return{success: true, user: updateUser};
  }

    const value = {
        user,
        loading,
        error,
        signup,
        signIn,
        signOut,
        updateProfile,
        
    }


    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    const context = useContext(AuthContext)

    if(!context){
        throw new  Error ("useAuth must be used within AuthProvider")
    }

    return context
}