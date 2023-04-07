import styles from '../sass/btn.module.scss'
import { useNavigate } from 'react-router-dom';

const LoginButtons = (props) => {

    const navigate = useNavigate()
    
    const redirectHandler =(check)=>{
        if(check === 'register') {navigate("/register")}
        else if(check === 'signin') {navigate("/signin")}
    }
    return ( 
        <>
            <button onClick={()=>redirectHandler(props.refrence)} className={styles.btn}>{props.children}</button>
        </>
     );
}
 
export default LoginButtons;