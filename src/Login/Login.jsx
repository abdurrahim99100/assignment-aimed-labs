import { StyleDiv1, StyleDiv2, StyleDiv3, StyleImg, StyleInput1, StyleInput2, StyleInputChangePassword, StyleLoginButton, StyleP, StyleRemember } from "../StyleComponents/StyleComponents";
import LoginBanner from '../../public/login-banner.jpg';

const Login = () => {

    return (
        <StyleDiv1 className="mainContainer">
            <StyleDiv2>
                <StyleImg style={{ height: '450px', width: '580px' }} src={LoginBanner} />
            </StyleDiv2>
            <StyleDiv3>

                <StyleP>Login</StyleP>

                <span style={{ fontWeight: '500', padding: '5px 0 5px 0', display: 'inline-block' }}>Login Id</span>
                <StyleInput1 placeholder="Enter Login Id" />

                <span style={{ fontWeight: '500', padding: '5px 0 5px 0', display: 'inline-block' }}>Password</span>
                <StyleInput2 placeholder="Enter Password" />

                <StyleRemember>
                    <div>
                        <input type="checkbox" name="" id="" />
                        <span style={{ fontSize: '18px', color: '#737B86' }}>Remember Me</span>
                    </div>
                    <div>
                        <StyleInputChangePassword type="button" value={'Change password'} />
                    </div>
                </StyleRemember>
                <input type="checkbox" name="" id="" />
                <p style={{ display: 'inline', fontSize: '18px', color: '#737B86' }}>Agree to<span style={{ color: '#F78719' }}>Terms & conditions</span></p>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
                    <StyleLoginButton>Login</StyleLoginButton>
                    <p style={{ display: 'block' }}><span>Don’t have an account?</span> <button style={{ border: 'none', backgroundColor: 'white', color: '#F78719' }}> Register Here</button></p>
                </div>
            </StyleDiv3>
        </StyleDiv1>
    );
};

export default Login;