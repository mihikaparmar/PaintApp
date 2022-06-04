import React, { useState,useEffect} from 'react';
import M from 'materialize-css';
import {Link, useNavigate} from 'react-router-dom';
import './Login.css'






const Login = () => {

    const navigate = useNavigate();
    const [user, setUser] = useState()
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("") 
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        // When the handler is invoked
        // inverse the boolean state of passwordShown
        setPasswordShown(!passwordShown);
      };
  
   

    

    const uploadFields = (e)=>{
        e.preventDefault()
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            M.toast({html: "invalid email",classes:"#c62828 red darken-3"})
            return
        }
        fetch("/usersignin",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                
                email,
               
                password,
                
            })
        }).then(res=>{
            if(res.status === 201){
                M.toast({
                  html: "login succesful",
                  classes: "#43a047 green darken-1",
                });

                navigate("/home", {replace: true})
               
            }
            else{
                console.log("loggin failed")
            }
        })
        // .then(data=>{
        //    if(data.error){
        //       M.toast({html: data.error,classes:"#c62828 red darken-3"});
        //    }
        //    else{
        //        M.toast({html:"login succesful",classes:"#43a047 green darken-1"});
               
        //        data.redirect('/about');
               
        //    }
        // })
        .catch(err=>{
            console.log(err)
        })
        
    }
    return (
        <>
            <div className="p2"><h1>Login to Dashboard</h1></div>
            <div className="p3"> Do not have an account? <a href="http://localhost:3000/usersignup">Register Now</a> </div>

            <section className="signup">
                <div className="container1">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">Sign In</h2>
                            <form className="registration-form" id="registration-form">
                                <div className="form-content">
                                    <label htmlFor="name">


                                    </label>
                                   
                                <div className="form-content">
                                    <label htmlFor="email">


                                    </label>
                                    <input className='pp11' type="text" name="email" id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Email" />

                                </div>
                                <input className='pp33'  type={passwordShown ? "text" : "password"}  name="password" id="password" 
                                         value={password}
                                         
                                         onChange={(e)=>setPassword(e.target.value)}
                                         
                                        placeholder="Password"/> 
                                        
                                        

                                </div>
                                <div className="register-button">
                                    <input type="submit" name="signup" id="signup" className="form-submitlogin" value="Login" onClick={uploadFields} />



                                </div>
                            </form>

                        </div>

                    </div>
                </div>



            </section>
            </>
            );
}
            export default Login