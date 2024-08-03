import { useState } from "react"
import Button from "../../components/button"
import Input from "../../components/input"

const Form = ({
    isSignInPage = true,
}) => {
    const [data, setData] = useState({
        ...(!isSignInPage && {
            fullName: ''
        }),
        email: '',
        password: ''
    })
    
    console.log('data :>> ', data);


  return (
    <div className="bg-white w-[600px] h-[800px] shadow-lg rounded-lg flex flex-col justify-center items-center">
        <div className="text-4xl font-extrabold">Welcome {isSignInPage && 'Back'}</div>
        <div className="text-xl font-light mb-14">{isSignInPage ? 'Sign in to explore':'Sign Up now to get started'}</div>
        <form className="flex flex-col items-center w-full" onSubmit={() => console.log('Submitted')}>
        { !isSignInPage && <Input label="Full name" name="name" placeholder="Enter your full name" className="mb-6" value={data.fullName} onChange={(e) => setData({ ...data, fullName: e.target.value})}/>}
        <Input label="Email address" name="email" type="email" placeholder="Enter your email" className="mb-6" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value})}/>
        <Input label="password" name="password" placeholder="Enter your password" className="mb-14" value={data.password} onChange={(e) => setData({ ...data, password: e.target.value})}/>
        <Button label={ isSignInPage ? 'Sign In': 'Sign Up'} type="submit" className="w-1/2 mb-4"/>
        </form>
        <div> {isSignInPage ? "Didn't have an account": "Already have an account? " }
            <span className="text-primary cursor-pointer underline">
                { isSignInPage ? ' Sign Up': ' Sign In'}
            </span>
        </div>
    </div>
  )
}

export default Form

