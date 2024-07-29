import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { ROUTES } from "../../../router/routes";
import { LoginRequest } from "../models/Auth.models";
import { useAuth } from "../hooks/useAuth";

import '../../../styles/layout.scss';

export const Login = () => {
    const [nologin, setLogin] = useState<LoginRequest>({ identifier: '', password: '' });
    const navigate = useNavigate();
    const { login, accessToken } = useAuth();
    const authApi = `http://localhost:1337/api/auth/local`;

    const handleChange  = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLogin(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = await axios.post(authApi, nologin);
        if (response.status === 200) {
            login({ accessToken: response.data.jwt });
            navigate(ROUTES.dashboard.path);
        } else {
            console.error('Hata');
        }
    }

    const handleLogin = async () => {
        if (nologin.identifier && nologin.password) {
            await handleSubmit;
        } else {
            console.error('Alanları Doldurun');
        }
    }

    useEffect(() => {
        if (accessToken) {  
            navigate(ROUTES.dashboard.path);
        }
    })

  return (
    <div className="login-container">
        <div className="login-wrapper">
        <h1 className="login-header">Sakai</h1>
            <form onSubmit={handleSubmit}>
                <div className="login-email">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="identifier"
                        value={nologin.identifier}
                        onChange={handleChange} 
                        required
                    />
                </div>
                <div className="login-pass">
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={nologin.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button className="login-button" onClick={handleLogin} type="submit">Login</button>
            </form>
        </div>
    </div>
  )
}
