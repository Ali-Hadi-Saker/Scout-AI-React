import Input from "../../base/input";
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
    return (
        <div className="flex column center page primary-bg">
            <h3>Hello,<br/> Welcome Back</h3>
            <Input 
            icon={faEnvelope}
            placeholder={'Email'}/>
            <Input 
            icon={faLock}
            placeholder={'password'}/>
            
        </div>
    )
}
export default Login;