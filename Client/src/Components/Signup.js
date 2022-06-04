import React, { useState } from 'react';
import M from 'materialize-css';
import { useNavigate } from 'react-router-dom';
import './Signup.css'






const Signup = () => {

    console.log("signup")
    
    const navigate = useNavigate();
    const [name,setName] = useState("")
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")
    const [phonenumber,setPhonenumber] = useState("")
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
        fetch("/usersignup",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,
                email,
               phonenumber,
                password
                
            })
        }).then(res=>{
            if(res.status === 201){
                 M.toast({
                   html: "signed up",
                   classes: "#43a047 green darken-1",
                 });
                 console.log("signed up");
                 navigate("/usersignin", {replace: true})
            }
            else{
                 M.toast({ html: "error", classes: "#c62828 red darken-3" });
                 console.log("not signed up");
            }
        })
        // .then(data=>{
        //     console.log(data)
        //    if(data.error){
        //       M.toast({html: data.error,classes:"#c62828 red darken-3"})
        //       console.log("not signed up")
        //    }
        //    else{
        //        M.toast({html:data.message,classes:"#43a047 green darken-1"})
        //        console.log("signed up")
        //        data.redirect('/signin');
               
               
        //    }
        // })
        .catch(err=>{
            console.log(err)
        })
    }
    


    return (
        <>
        <div className="sp2"><h1>Create an Account</h1></div>
        <div className="sp3"> Already have an account? <a href="http://localhost:3000/usersignin">Sign in Now</a> </div>
       
            <section className="ssignup">
                <div className="scontainer">
                    <div className="ssignup-content">
                        <div className="ssignup-form">
                            <h2 className="sform-title">Sign Up</h2>
                            <form  className="sregistration-form" id="registration-form">
                                <div className="sform-content">
                                    <label htmlFor="name">
                                        

                                    </label>
                                    <input className='spp' type="text" name="name" id="name" 
                                         value={name}
                                         onChange={(e)=>setName(e.target.value)}
                                        placeholder="Your Name"/>

                                </div>
                                <div className="sform-content">
                                    <label htmlFor="email">
                                        

                                    </label>
                                    <input  className='spp1' type="text" name="email" id="email" 
                                         value={email}
                                         onChange={(e)=>setEmail(e.target.value)}
                                        placeholder="Email"/>

                                </div>
                                <div className="sform-content">
                                    <label htmlFor="phonenumber">
                                        

                                    </label>
                                    <input className='spp2' type="text" name="phonenumber" id="phonenumber" 
                                         value={phonenumber}
                                         onChange={(e)=>setPhonenumber(e.target.value)}
                                        placeholder="Phone number"/>

                                </div>
                                <div className="sform-content">
                                    <label htmlFor="password">
                                        

                                    </label>
                                    <input className='spp3'  type={passwordShown ? "text" : "password"} name="password" id="password" 
                                         value={password}
                                         onChange={(e)=>setPassword(e.target.value)}
                                        placeholder="Password"/>
                                         

                                </div>
                                
                                <div  className="sregister-button">
                                    <input type="submit" name="signup" id="signup" className="sform-submit" value="Signup" onClick={uploadFields}/>

                                    

                                </div>
                            </form>

                        </div>

                    </div>
                </div>
                
                         

            </section>
           
            
        </>
    );
}


export default Signup