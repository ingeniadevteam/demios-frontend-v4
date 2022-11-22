import { React, /*useCallback, useEffect*/ } from 'react';
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
    TextInput,
    fetchUtils
} from 'react-admin';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Alert from '@mui/material/Alert';

import t from '../i18n';
import URL from '../URL';


const SignUp = ({ theme }) => {
    const [state, setState] = useState({
        name: '',
        email: '',
        business: '',
        taxid: '',
        zipcode: '',
        // organizationId: '',
        paymentMethod: 'transfer',
        bic: '',
        type: 'supplier',
        terms: '',
    });
    const [alert, setAlert] = useState({
        message: '',
        severity: 'success'
    });
    const [notified, setNotified] = useState(false);
    const search = useLocation().search;
    const loginToken = new URLSearchParams(search).get('loginToken');
    const locale = resolveBrowserLocale();
    // const [organizations, setOrganizations] = useState([]);
    let loading = false;

    const required = (message = t[locale].ra.validation.required) =>
        value => value ? undefined : message;

    // const fetchOrganizations = useCallback(async () => {
    //     const options = {
    //         method: 'GET',
    //         headers: new Headers({ Accept: 'application/json' })
    //     };

    //     fetchUtils.fetchJson(`${URL}/organizations`, options)
    //     .then(({ body }) => {
    //         const data = JSON.parse(body).data;
    //         console.log(data);
    //         setOrganizations(data);
    //     })
    //     .catch(error => {
    //         console.log('error', error.message);
    //     });
    // }, []);

    // useEffect(() => {
    //     if (!organizations.length) {
    //       fetchOrganizations();
    //     }
    // }, [organizations, fetchOrganizations]);


    const handleSubmit = () => {
        if (!state.terms) {
            alert('Por favor acepta los términos de privacidad');
        }
        const options = {
            method: 'POST',
            body: JSON.stringify({data: state}),
            headers: new Headers({ Accept: 'application/json' })
        };

        fetchUtils.fetchJson(`${URL}/suppliers`, options)
        .then(() => {
            setNotified(true)
            setAlert({ message: t[locale].pos.registered, severity: 'success' });
        })
        .catch(() => {
            setAlert({ message: t[locale].pos.emailInvalid, severity: 'error' });
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
                <Card sx={{ minWidth: 500, marginTop: '6em' }}>
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
                            textDecoration: 'none'
                        }}
                    >
                        <Link 
                            href="/login"
                            sx={{ textDecoration: 'none' }}
                        >
                            {t[locale].pos.tip}
                        </Link>
                    </Box>
                    {
                        notified ? 
                        <Box
                            sx={{
                                marginTop: '1em',
                                display: 'flex',
                                justifyContent: 'center',
                                color: theme => theme.palette.grey[500],
                            }}
                        >
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
                                {t[locale].pos.signup}
                            </Box>
                            
                            <Box sx={{ padding: '0 1em 1em 1em' }}>
                                <Box sx={{ marginTop: '1em' }}>
                                    <TextInput
                                        autoFocus
                                        source="name"
                                        label={t[locale].pos.name}
                                        disabled={loading}
                                        validate={required()}
                                        onChange={e => setState({...state, name: e.target.value})}
                                        fullWidth
                                    />
                                </Box>
                            </Box>
                            
                            <Box sx={{ padding: '0 1em 1em 1em' }}>
                                <TextInput
                                    source="email"
                                    type="email"
                                    label={t[locale].pos.useremail}
                                    disabled={loading}
                                    validate={required()}
                                    onChange={e => setState({...state, email: e.target.value})}
                                    fullWidth
                                />
                            </Box>
                            <Box sx={{ padding: '0 1em 1em 1em' }}>
                                <TextInput
                                    source="business"
                                    label={t[locale].pos.business}
                                    disabled={loading}
                                    validate={required()}
                                    onChange={e => setState({...state, business: e.target.value})}
                                    fullWidth
                                />
                            </Box>
                            <Box sx={{ padding: '0 1em 1em 1em' }}>
                                <TextInput
                                    source="taxid"
                                    label={t[locale].pos.taxid}
                                    disabled={loading}
                                    validate={required()}
                                    onChange={e => setState({...state, taxid: e.target.value})}
                                    fullWidth
                                />
                            </Box>
                            {/* <Box sx={{ padding: '0 1em 1em 1em' }}>
                                <TextInput
                                    source="zipcode"
                                    label={t[locale].pos.zipcode}
                                    disabled={loading}
                                    validate={required()}
                                    onChange={e => setState({...state, zipcode: e.target.value})}
                                    fullWidth
                                />
                            </Box> */}

                            <Box sx={{ padding: '0 1em 1em 1em' }}>
                                <InputLabel id="demo-simple-select-label">
                                    {t[locale].pos.type}
                                </InputLabel>
                                <Select
                                    source="type"
                                    disabled={loading}
                                    onChange={e => setState({...state, type: e.target.value})}
                                    value={state.type}
                                    fullWidth
                                >
                                    {
                                        Object.keys(t[locale].pos.types).map(key => (
                                            <MenuItem value={key} key={key}>{t[locale].pos.types[key]}</MenuItem>
                                        ))
                                    }
                                </Select>
                            </Box>
                            
                            {/* <Box sx={{ padding: '0 1em 1em 1em' }}>
                                <InputLabel id="demo-simple-select-label">
                                    {t[locale].pos.organization}
                                </InputLabel>
                                <Select
                                    source="organization"
                                    disabled={loading}
                                    onChange={e => setState({...state, organizationId: e.target.value})}
                                    value={state.organizationId}
                                    fullWidth
                                >
                                    {
                                        organizations.map(org => (
                                            <MenuItem value={org.id} key={org.id}>{org.attributes.name}</MenuItem>
                                        ))
                                    }
                                </Select>
                            </Box> */}

                            <Box sx={{ padding: '0 1em 1em 1em' }}>
                                <InputLabel id="demo-simple-select-label">
                                    {t[locale].pos.paymentMethod}
                                </InputLabel>
                                <Select
                                    source="paymentMethod"
                                    disabled={loading}
                                    onChange={e => setState({...state, paymentMethod: e.target.value})}
                                    value={state.paymentMethod}
                                    fullWidth
                                >
                                    {
                                        Object.keys(t[locale].pos.paymentMethods).map(key => (
                                            <MenuItem value={key} key={key}>{t[locale].pos.paymentMethods[key]}</MenuItem>
                                        ))
                                    }
                                </Select>
                            </Box>

                            <Box sx={{ padding: '0 1em 1em 1em' }}>
                                <TextInput
                                    source="bic"
                                    label={t[locale].pos.bic}
                                    disabled={loading}
                                    validate={required()}
                                    onChange={e => setState({...state, bic: e.target.value})}
                                    fullWidth
                                />
                            </Box>

                            <Box sx={{ padding: '0 1em 1em 1em' }}>
                                <Checkbox
                                    source="terms"
                                    disabled={loading}
                                    onChange={e => setState({...state, terms: e.target.value === 'on' ? true : false})}
                                />
                                <Link
                                    href="https://www.camposcorporacion.com/politica-de-privacidad/#1546515901062-31a358f1-0c0e"
                                    target="_blank"
                                    rel="noopener"
                                    sx={{ textDecoration: 'none' }}
                                >
                                    {t[locale].pos.terms}
                                </Link>
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
                                    {t[locale].pos.signup}
                                </Button>
                            </CardActions>
                        </>
                    }

                </Card>
            </Box>
        </Form>
    ) : <>Redirecting...</>;
};

export default SignUp;
