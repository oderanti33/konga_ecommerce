import { useEffect, useState, useCallback } from 'react'

export const useAuth = () => {
    const [token, setToken] = useState(false);
    const [userId, setUserId] = useState(false);
    const [email, setEmail] = useState(false);
    const [firstName, setFirstname] = useState(false);
    const [lastName, setlastName] = useState(false);


    const login = useCallback((uid, token, email, firstName, lastName) => {
        setToken(token);
        setUserId(uid);
        setFirstname(firstName);
        setlastName(lastName);
        setEmail(email);

        localStorage.setItem(
            'userData',
            JSON.stringify({ userId: uid, token: token, firstName: firstName, lastName: lastName, email: email })
        );
    }, []);

    const logout = useCallback((uid, token, lastName, firstName, email) => {
        setToken(null);
        setUserId(null);
        setFirstname(null);
        setlastName(null);
        setEmail(null);
        localStorage.removeItem('userData');
    }, []);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('userData'));
        if (storedData && storedData.token) {
            login(storedData.userId, storedData.token, storedData.firstName, storedData.lastName, storedData.email);
        }
    }, [login]);
    return {
        token, userId, login, logout, firstName, lastName, email
    }
}