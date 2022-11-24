import { React, useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from "react-router-dom";
import {
    Avatar,
    Button,
    Card,
    CardActions,
    CircularProgress,
} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import {
    Form,
    TextInput,
    fetchUtils,
    useRedirect
} from 'react-admin';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Alert from '@mui/material/Alert';

import { i18nProvider } from '../providers/i18nProvider';
import Cookies from '../helpers/Cookies';
import URL from '../URL';


const Login = ({ theme }) => {
    const { translate } = i18nProvider;
    const [alert, setAlert] = useState({
        message: '',
        severity: 'success'
    });
    const [email, setEmail] = useState('');
    const [notified, setNotified] = useState(false);
    const search = useLocation().search;
    const loginToken = new URLSearchParams(search).get('loginToken');
    const redirectTo = useRedirect();
    let loading = false;

    const required = (message = translate('ra.validation.required')) =>
        value => value ? undefined : message;

    useEffect(() => {
        if (loginToken && !loading) {
            // eslint-disable-next-line
            loading = true;
            
            // get user using passwordless login
            const request = new Request(`${URL}/passwordless/login?loginToken=${loginToken}`, {
                method: 'GET',
                headers: new Headers({ 'Content-Type': 'application/json'})
            });
            fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .catch((error) => {              
                throw new Error('The login token is invalid');
            })
            .then(response => {
                // set JWT
                Cookies.setCookie('token', response.jwt, 1);

                // get role
                const request = new Request(`${URL}/users/me?populate=role`, {
                    method: 'GET',
                    headers: new Headers({
                        Accept: 'application/json',
                        Authorization: `Bearer ${response.jwt}`
                    }),
                });
                fetch(request)
                    .then(response => {
                        if (response.status < 200 || response.status >= 300) {
                            throw new Error(response.statusText);
                        }
                        return response.json();
                    })
                    .catch((error) => {                
                        throw new Error('Get user data failed');
                    })
                    .then(response => {
                        console.log(response);
                        Cookies.setCookie('role', response.role.type, 1);
                        redirectTo('/');
                    });
                });
        }
    }, [loginToken, redirectTo]);

    const handleSubmit = () => {
        const options = {
            method: 'POST',
            body: JSON.stringify({ email }),
            headers: new Headers({ Accept: 'application/json' })
        };

        fetchUtils.fetchJson(`${URL}/passwordless/send-link`, options)
        .then(() => {
            setNotified(true);
            // setAlert({ message: translate('pos.registered'), severity: 'success' });
        })
        .catch(error => {
            setAlert({ message: translate('pos.emailInvalid'), severity: 'error' });
        });
    };

    return !loginToken ? (
        <Form onSubmit={handleSubmit} noValidate>
            {
                alert.message && 
                <Alert severity={alert.severity}>
                    { alert.message }
                </Alert>
            }
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    background:
                        'url(https://source.unsplash.com/random/1600x900)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    fontFamily: 'Arial'
                }}
            >
                <Card sx={{ minWidth: 300, marginTop: '6em' }}>
                    <Box
                        sx={{
                            margin: '1em',
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <Avatar sx={{ bgcolor: 'secondary.main' }}>
                            <LockIcon />
                        </Avatar>
                    </Box>
                    {
                        notified ? 
                        <Box
                            sx={{
                                margin: '1em',
                                display: 'flex',
                                justifyContent: 'center',
                                color: theme => theme.palette.grey[500],
                                fontSize: '1.2em'
                            }}
                        >
                            { translate('pos.notified') }
                        </Box> : 
                        <>
                            <Box
                                sx={{
                                    marginTop: '1em',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    color: theme => theme.palette.grey[500],
                                }}
                            >
                                { translate('pos.tip') }
                            </Box>
                            <Box
                                sx={{
                                    marginTop: '1em',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    textDecoration: 'none'
                                }}
                            >
                                <Link
                                    href="/signup"
                                    sx={{ textDecoration: 'none' }}
                                >
                                    { translate('pos.signup') }
                                </Link>
                            </Box>
                            <Box sx={{ padding: '0 1em 1em 1em' }}>
                                <Box sx={{ marginTop: '1em' }}>
                                    <TextInput
                                        autoFocus
                                        source="username"
                                        type="email"
                                        label={ translate('pos.email') }
                                        disabled={loading}
                                        validate={required()}
                                        onChange={e => setEmail(e.target.value)}
                                        fullWidth
                                    />
                                </Box>
                            </Box>
                            <CardActions sx={{ padding: '0 1em 1em 1em' }}>
                                <Button
                                    variant="contained"
                                    type="submit"
                                    color="primary"
                                    disabled={loading}
                                    fullWidth
                                >
                                    {loading && (
                                        <CircularProgress size={25} thickness={2} />
                                    )}
                                    { translate('pos.login') }
                                </Button>
                            </CardActions>
                        </>
                    }
                </Card>
            </Box>
        </Form>
    ) : <>Redirecting...</>;
};

export default Login;
