import {useState} from 'react'
import {GoogleAuthProvider,signInWithPopup} from 'firebase/auth';
import {auth} from './firebaseConfig';
import "./Login.css";
const Login = ()=>{
    const [hovered,setHovered] = useState(false);
    const handleGoogle= async(e)=>{
        e.preventDefault();
    const provider = await new GoogleAuthProvider();
        return signInWithPopup(auth,provider);
    }
    return(
        <>
        <div className="login_main">
            <form className="login_form" onMouseOver={()=>setHovered(true)} onMouseOut={()=>setHovered(false)}>
                <h1 className="login_h1" style={{color:hovered?  'dodgerblue': '#DE3163'}}>Lynx</h1>
                <h2 className="login_h2">Effortlessly organize your thoughts.</h2>
                <h3 className="login_h3">Welcome to <span className="lynx_span" style={{color:hovered? 'dodgerblue' : '#DE3163'}}>Lynx</span></h3>
                <div className="line"></div>
                <h4 className="login_h4">Sign in with Email</h4>
                <input type="text" className="email_input" placeholder="Email..."/>
                <input type="password" className="pass_input" placeholder="Password..."/>
                <button className="sign_in" style={{color:hovered? 'dodgerblue' : '#DE3163'}}>Sign in</button>
                <p className="or">or</p>
                <button className="login_btn" onClick={handleGoogle}>Sign in with Google</button>
            </form>
        </div>
        </>
    );
}
export default Login;