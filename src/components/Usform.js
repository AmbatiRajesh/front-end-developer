import React,{useState} from "react";

const Usform=(props)=>{
    
    const [email,setEmail]=useState();
    const [pass,setPass]=useState();
    const [cpass,setCPass]=useState();
    const [name,setName]=useState();
    const [phone,setPhone]=useState();
    const [check,setCheck]=useState();

    const [emailError, setEmailError] = useState();
    const [passError, setPassError] = useState();
    const [pmError, setPmError] = useState();
    const [nameError, setNameError] = useState();
    const [numError, setNumError] = useState();
    const [chError, setChError] = useState();
   
    
    const emailChanger=(event)=>{
    setEmail(event.target.value);
    if(event.target.value.length===0){
        setEmailError("This Field Is Required");
        return false
    }
    else if(!event.target.value.match(/^[a-zA-Z]+[0-9]*[a-zA-Z]*[@]{1}[a-z]+[.][a-zA-Z]{2,3}$/)){
        setEmailError("Plese Provide Valid Email");
        return false
    }else{
        setEmailError("Your Email Is Valid");
        return true
    }
    }
    const passwordChanger=(event)=>{
        setPass(event.target.value);
        if(event.target.value.length===0){
            setPassError("This Field is required");
            return false;
        }
        else if(!event.target.value.match(/^[a-zA-Z0-9@/#/$/&/*/!]{6,12}$/)){
            setPassError("Require Min 6 And Max 12 Characters");
            return false;
        }else{
            setPassError("Password Is Valid");
            return true;
        }
    }
    const confirmPass=(event)=>{
        setCPass(event.target.value);
        if(event.target.value.length===0){
            setPmError("Plese Enter First Password");
            return false;
        }
        else if(event.target.value === pass){
            setPmError("Your Password Is Matched");
            return true;
        }else{
            setPmError("Your Password Is Not Matched");
            return false
        }
    }
   const nameValid=(event)=>{
    setName(event.target.value);
    if(event.target.value.length===0){
        setNameError("This Field is required");
        return false;
    }else if(!event.target.value.match(/^[a-zA-Z]{2,}[\s]{1}[a-zA-Z]+$/)){
        setNameError("Name Is Not Valid Enter Your Full Name");
        return false;
    }else{
        setNameError("Your Name Is Valid");
        return true
    }
   }
   const phoneValid=(event)=>{
       setPhone(event.target.value);
    if(event.target.value.length===0){
        setNumError("This Field is required");
        return false;
   }else if(!event.target.value.match(/^[0-9]{10}$/)){
       setNumError("Please Enter A Valid Phone Number");
       return false;
   }else{
    setNumError("Your Phone Number Is Valid");
    return true;
   }
} 
  const agree=(event)=>{
      setCheck(event.target.checked);
      if(event.target.checked===false||null){
        setChError("This Filed Is Required");
        return false;
      }else{
          
        setChError("Thanks For Selecting");
        return true;
      }
  }
   const submitHandle=(event)=>{
    event.preventDefault();
    if(emailError=== "Your Email Is Valid" && passError==="Password Is Valid" 
      && pmError==="Your Password Is Matched" && nameError==="Your Name Is Valid" 
      && numError==="Your Phone Number Is Valid" && chError==="Thanks For Selecting"){
        setEmail('');
        setPass('');
        setCPass('');
        setName('');
        setPhone('');
        setCheck('');
        props.barHide(true);
        setEmailError("");
        setPassError("");
        setPmError("");
        setNameError("");
        setNumError("");
        setChError("");
        console.log(email);
        console.log(pass);
        console.log(cpass);
        console.log(name);
        console.log(phone);
        console.log(check);
        return true;
    }
    else if(emailError === "Your Email Is Valid"){
            setEmailError("Your Email Is Valid"); 
        }
    else if(passError === "Password Is Valid"){
            setPassError("Password Is Valid"); 
        }
    else if(pmError === "Your Password Is Matched"){
            setPmError("Your Password Is Matched"); 
        }
    else if(nameError === "Your Name Is Valid"){
            setNameError("Your Name Is Valid"); 
        }
    else if(numError === "Your Phone Number Is Valid"){
            setNumError("Your Phone Number Is Valid"); 
        }
    else if(chError==="Thanks For Selecting"){
            setChError("Thanks For Selecting"); 
        }

    else{
        setEmailError("This Field Is Required");
        setPassError("This Field Is Required");
        setPmError("This Field Is Required");
        setNameError("This Field Is Required");
        setNumError("This Field Is Required");
        setChError("This Field Is Required");
        return false;
    }
    
   }
    return(
        <div>
            <div className="container">
                        <form className="container__form" onSubmit={submitHandle}>
                        <p className="container__form__heading">Create An Account</p>
                        <div className="container__form__input">
                            <label for="email">Your email address</label>
                            <input type="email"  className="container__form__input__email" name="email" value={email} onChange={emailChanger}/>
                            <p className="container__form__error" style={{color: emailError=== "Your Email Is Valid" ? 'green' : 'red'}}>{emailError}</p>
                        </div>
                        <div className="container__form__input">
                            <label for="password">Your password</label>
                            <input type="password" name="password" value={pass} onChange={passwordChanger}/>
                            <p className="container__form__error" style={{color: passError=== "Password Is Valid"? 'green' : 'red'}}>{passError}</p>
                        </div>
                        <div className="container__form__input">
                            <label for="password">confirm Your password</label>
                            <input type="password" name="password" value={cpass} onChange={confirmPass}/>
                            <p className="container__form__error" style={{color: pmError==="Your Password Is Matched"? 'green' : 'red'}}>{pmError}</p>
                        </div>
                        <div className="container__form__input">
                            <label for="name">Your full Name</label>
                            <input type="text" name="name" value={name} onChange={nameValid}/>
                            <p className="container__form__error" style={{color: nameError==="Your Name Is Valid" ? 'green' : 'red'}}>{nameError}</p>
                        </div>
                        <div className="container__form__input">
                            <label for="phoneN">Your Phone Number</label>
                            <input type="number" name="phoneN" value={phone} onChange={phoneValid}/>
                            <p className="container__form__error" style={{color: numError==="Your Phone Number Is Valid"? 'green' : 'red'}}>{numError}</p>
                        </div>
                        <div className="container__form__input  container__form__checkbox">
                            <input type="checkbox" checked={check}  onChange={agree}/><span>I read and agree Terms and Conditions</span>
                            <p className="container__form__error" style={{color: chError==="Thanks For Selecting"? 'green' : 'red'}}>{chError}</p>
                        </div>
                        <div className="container__form__button">
                            <button onClick={submitHandle}>Create Account</button>
                        </div>
                    </form>
            </div>
        </div>
    )
}

export default Usform;