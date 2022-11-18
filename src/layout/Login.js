import { React, useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from "react-router-dom";
import { resolveBrowserLocale } from 'react-admin';
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
    required,
    TextInput,
    fetchUtils,
    useNotify,
    Notification,
    useRedirect,
    useTranslate
} from 'react-admin';
import Box from '@mui/material/Box';

import Cookies from '../helpers/Cookies';
import URL from '../URL';

const i18n = {
    es: {
        tip: 'Accede con tu email'
    },
    en: {
        tip: 'Login with your email'
    }
}


const Login = ({ theme }) => {
    const [email, setEmail] = useState('');
    const notify = useNotify();
    const search = useLocation().search;
    const loginToken = new URLSearchParams(search).get('loginToken');
    const redirectTo = useRedirect();
    const translate = useTranslate();
    const locale = resolveBrowserLocale();
    let loading = false;

    useEffect(() => {
        if (loginToken && !loading) {
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
                        Cookies.setCookie('role', response.role.name, 1);
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
        .then(result => {
            notify(`Please check your email for a login link`, {
                type: 'success',
                autoHideDuration: 5000
            });
        })
        .catch(error => {
            console.log('error', error.message);
            notify(error.message, { type: 'success' });
        });
    };

    return !loginToken ? (
        <Form onSubmit={handleSubmit} noValidate>
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
                    <Box
                        sx={{
                            marginTop: '1em',
                            display: 'flex',
                            justifyContent: 'center',
                            color: theme => theme.palette.grey[500],
                        }}
                    >
                        {i18n[locale].tip}
                    </Box>
                    <Box sx={{ padding: '0 1em 1em 1em' }}>
                        <Box sx={{ marginTop: '1em' }}>
                            <TextInput
                                autoFocus
                                source="username"
                                label="Email"
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
                            Login
                        </Button>
                    </CardActions>
                </Card>
            </Box>
        </Form>
    ) : <>Redirecting...</>;
};

export default Login;
