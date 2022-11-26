import React, { useState } from 'react';
function FormVal() {
    const initValues={username:'',email:'',password:''};
    const [formValues,setFormValues]=useState(initValues);
    const [formErrors,setFormErrors]=useState({});
    const [isSubmit,setIsSubmit]=useState(false);
    const handleChange=(event)=>{
        const{id,value}=event.target;
        setFormValues({...formValues,[id]:value});
        console.log(formValues);
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }
    const validate=(value)=>{
        let count=0;
        const errors={};
        const reg=new RegExp("[0-9]+")
        const reg2=new RegExp("[A-Za-z]+")
        const reg3=new RegExp("[A-Z]+")
        const preg=new RegExp("[A-Z][A-Za-z0-9$_]+")
        const reg4=new RegExp("[$_@#%^&*~]+")
        if(!formValues.username){
            document.getElementById("username").style.borderColor="red";
            errors.username="Please Fill the column";
        }
        else if(formValues.username.length<5)
        errors.username="Username must have minimum 5 characters";
        else if(reg.test(value.username))
        errors.username="Username must contain only alphabets";
        if(!formValues.email){
            document.getElementById("email").style.borderColor="red";
            errors.email="Invalid Email";
        }
        if(!formValues.password){
            document.getElementById("password").style.borderColor="red";
            errors.password="Please Fill the password";
        }
        else if(!preg.test(value.password))
        errors.password="Format of password is incorrect";
        if(reg.test(value.password))
            count++;
        if(reg2.test(value.password))
            count++;
        if(reg3.test(value.password))
            count++;
        if(reg4.test(value.password))
            count++;
        if(count===1){
            document.getElementById("password").style.borderColor="red";
            errors.password="Password is Weak";
        }
        else if(count===2){
            document.getElementById("password").style.borderColor="orange";
            errors.password="Password is Good";
        }
        else if(count===3){
            document.getElementById("password").style.borderColor="green";
            errors.password="Password is Strong";
        }
        else if(count===4){
            document.getElementById("password").style.borderColor="black";
            errors.password="Password is very Strong";
        }
        return errors;
    }
    return ( 
        <center>
        <body style={{backgroundColor:"#FFFFE1",width:"45%"}}>
        <div className='container'  style={{paddingLeft:"70px"}}>
        
        <br></br>
            <br></br>
            <h1>Dynamic Form</h1>
            <form onMouseLeave={handleSubmit}>
            <div className='row'>
                <label>Enter your username</label>
                <input type="text" id="username"placeholder="your Usename" value={formValues.username} onChange={handleChange} style={{width:"400px",height:"50px",borderRadius:"8px"}}/>
            </div>
            <p style={{color:"red"}}>{formErrors.username}</p>
            <div className='row'>
                <label>Enter your email</label>
                <input type="email" id="email" placeholder="Your Email"value={formValues.email} onChange={handleChange} style={{width:"400px",height:"50px",borderRadius:"8px"}}/>
            </div>
            <p style={{color:"red"}}>{formErrors.email}</p>
            <div className='row'>
                <label>Enter your password</label>
                <input type="password" id="password" placeholder="your Password"value={formValues.password} onChange={handleChange} style={{width:"400px",height:"50px",borderRadius:"8px",borderWidth:"4px"}}/>
            </div>
            <p style={{color:"red"}}>{formErrors.password}</p>

            </form>
            <br></br>
            <br></br>
        </div>
        </body>
        </center>
     );
}
export default FormVal;