import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import useAuth from "../assets/hooks/useAuth"

const LoginPage = () => {

    const { register, handleSubmit, reset} = useForm()
    const {loginUser } = useAuth ()

    const submit = data =>{
        loginUser(data)
        reset({
            email:'',
            password:''
        })

    }

  return (
    <div>
        <img src="/Images/morat.jpeg" alt="" />

        <article>
            <h2>Login</h2>
            <form onSubmit={ handleSubmit(submit)}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input {...register('email')} type="email" id="email" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input {...register('password')} type="password" id="password" />
                </div>
                <button>Submit</button>
            </form>

            <p>¿Do you have an account? <Link to='/auth/register'>Go to register</Link></p>
        </article>

    </div>
  )
}

export default LoginPage

