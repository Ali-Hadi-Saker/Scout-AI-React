import Button from "../../base/button";
import Input from "../../base/input";
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import './style.css';

const Login = () => {
    return (
        <div className="flex column center page primary-bg">
            <div className="form-container flex column">
                <h3>Hello,<br/> Welcome Back</h3>
                <Input 
                icon={faEnvelope}
                placeholder={'Email'}/>
                <Input 
                icon={faLock}
                placeholder={'password'}/>
                <Button/>
            </div>
            
        </div>
    )
}
export default Login;