import Input from "../../base";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
    return (
        <div className="flex column center page primary-bg">
            <h3>Hello,<br/> Welcome Back</h3>
            <Input 
            icon={faEnvelope}
            placeholder={'Email'}/>
        </div>
    )
}
export default Login;