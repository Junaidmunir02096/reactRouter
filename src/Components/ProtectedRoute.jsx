import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProtectedRoute(props) {
    const { Component } = props;
    const navigate = useNavigate();

    useEffect(() => {
        // Function to get a cookie by name
        const getCookie = (name) => {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop().split(';').shift();
            return null;
        };

        // Check if the session cookie exists
        const session = getCookie('session');

        if (!session) {
            // If no session cookie, redirect to login
            navigate('/login');
        } else {
            // Store session in localStorage for reference
            localStorage.setItem('login', session);
        }
    }, [navigate]);

    return (
        <>
            <Component />
        </>
    );
}