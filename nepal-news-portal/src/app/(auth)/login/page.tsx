import React from 'react';
import LoginForm from '../../../components/forms/LoginForm';

const LoginPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold text-center mb-6">Login to Your Account</h2>
                <LoginForm />
            </div>
        </div>
    );
};

export default LoginPage;