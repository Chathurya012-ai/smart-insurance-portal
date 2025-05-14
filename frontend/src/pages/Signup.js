import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [form, setForm] = useState({ username: '', password: '', role: 'USER' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/auth/signup', form);
            alert('Signup successful!');
            navigate('/login');
        } catch (err) {
            alert('Signup failed.');
            console.error(err);
        }
    };

    return (
        <div style={{ padding: '2rem' }}>
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <input
                    name="username"
                    placeholder="Username"
                    value={form.username}
                    onChange={handleChange}
                    required
                /><br /><br />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                    required
                /><br /><br />
                <select name="role" value={form.role} onChange={handleChange}>
                    <option value="USER">User</option>
                    <option value="ADMIN">Admin</option>
                </select><br /><br />
                <button type="submit">Signup</button>
            </form>
        </div>
    );
}

export default Signup;
