import './RegisterPage.css'

function RegisterPage(){
    return (
        <div className="RegisterPage" >
            <div className="container" >

                <div className="input-area">


                    <form className="register-form" >
                        <div className="logor">
                            <img src="/img/logo.png" alt="logo" width="200px" />
                        </div>

                        <div className="Name-group">
                            <label className="Label" >Name</label>
                            <input type="text" name="Name-Area" className="Name Input"/>
                        </div>
                        <div className="SurName-group">
                            <label className="Label" >SurName</label>
                            <input type="text" name="SurName-Area" className="SurName Input"/>
                        </div>
                        <div className="E-mail-group">
                            <label className="Label">E-mail</label>
                            <input type="text" name="Email Area" className="E-mail Input"/>
                        </div>
                        <div className="Password-group">
                            <label className="Label">Password</label>
                            <input type="password" name="Password Area" className="Password Input" />
                        </div>
                        <div className="Password-group">
                            <label className="Label">Confirm Password</label>
                            <input type="password" name="Password Area" className="Password Input" />
                        </div>
                        <div className="button-registerm">
                            <button className="signup-btnm ">SIGN UP</button>
                        </div>
                        <div className='to-register'>
                            <a id="ar" href="/login">Back to Login</a>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    )

}
export default RegisterPage