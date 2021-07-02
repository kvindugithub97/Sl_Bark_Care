import './login.css';
const Login = () => {

    const loginSubmit = (e) => {
        e.preventDefault();
    }

    return ( 
        <div className = 'logins'>
              <h1>SlBarkCare.com</h1>
            <div className = 'access'>
                <h2>login</h2>
                <form onSubmit = {loginSubmit} >
                <lable>User Name :</lable>
                    <input
                    type = 'text'
                    required
                    /><br/>
                    <lable>E-mail      :</lable>
                    <input
                    type = 'email'
                    required
                    /><br/>
                    <lable>Password :</lable>
                    <input
                    type = 'password'
                    required
                    /><br/>
                    <button>log in</button>
                </form>

            </div>

        </div>

     );
}
 
export default Login;