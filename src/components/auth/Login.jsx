import React from 'react';

const token = '324234234hnhkjnkjbnkj345bhiu34bh5kb23kj'

const Login = () => { 
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    handleChanges = e => {
        setUser({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        localStorage.setItem('token', token);
        // axios call 
    }

    return (
        <div className='login-form'>
            <form onSubmit={handleSubmit}>
                <label htmlFor='username' />
                <input type='text' value={user.username} onChange={handleChanges} name='username' />
                <label htmlFor='password' />
                <input type='password' value={user.password} onChange={handleChanges} name='password' />
                <button>Register</button>
            </form>
        </div>
    )
}

export default Login;