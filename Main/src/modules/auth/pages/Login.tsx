import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { ROUTES } from "../../../router/routes";
import { LoginRequest } from "../models/Auth.models";
import { useAuth } from "../hooks/useAuth";

export const Login = () => {
    const [nologin, setLogin] = useState<LoginRequest>({ identifier: '', password: '' });
    const navigate = useNavigate();
    const { login, accessToken } = useAuth();

    const handleChange  = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLogin(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:1337/api/auth/local', nologin);
            console.log('Logged', response.data);
            navigate(ROUTES.dashboard.path);
        } catch (error) {
            console.error('Error', error);
        }
    };

    const handleLogin = () => {
        login({ accessToken: Math.random().toString(16).substring(2) });
        navigate(ROUTES.dashboard.path);
    };

    useEffect(() => {
        if (accessToken) {
            navigate(ROUTES.dashboard.path);
        }
    })

  return (
    <div>
        <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="identifier"
                        value={nologin.identifier}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={nologin.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button onClick={handleLogin} type="submit">Login</button>
            </form>
    </div>
  )
}
