import englishMessages from 'ra-language-english';

const en = {
    ...englishMessages,
    pos: {
        configuration: 'Configuration',
        email: 'Enter your email',
        tip: 'Sign up with your email',
        notified: 'We have sent an access link to your email. You can close this page.',
        signup: 'Sign up',
        login: 'Login',
        useremail: 'User email',
        business: 'Company name',
        taxid: 'TAX ID',
        zipcode: 'Zipcode',
        terms: 'I accept the use terms',
        paymentMethod: 'Payment method *',
        paymentMethods: {
            'confirming': 'Confirming',
            'transfer': 'Transfer',
            'note': 'Bank Note',
            'bill': 'Bill',
            'order': 'Money order',
            'other': 'Other'
        },
        bic: 'BIC',
        organization: 'Company *',
        type: 'Supplier or Creditor?',
        types: {
            supplier: 'Supplier',
            creditor: 'Creditor'
        },
        emailInvalid: 'Invalid Email',
        registered: 'We hve registered your reuqest. Once verified, ee will send you an email with a login link.',
        dashboard: {
            welcome: {
                title: 'Bienvenido a Demios',
                subtitle: 'Campos Corporación',
            },
            pending_suppliers: 'Pending suppliers'
        },
        menu: {
            admon: 'Administration',
            comm: 'Communications',
            conf: 'Configuration',
        }
    },
    roles: {
        manager: 'Manager',
        employee: 'Employee',
        supplier: 'Supplier',
        authenticated: 'Authenticated',
        public: 'Public',
    },
    resources: {
        organizations: {
            name: 'Organización |||| Organizaciones',
            detail: 'Detail',
            tabs: {
                details: 'Details',
                suppliers: 'Suppliers',
                invoices: 'Invoices',
                purchases: 'Purchases',
                tickets: 'Tickets',
            },
            fields: {
                name: 'Name',
                office: 'Office',
                supplierValidators: 'Supplier validators',
                invoiceValidators: 'Invoice validators',
            }
        },
        suppliers: {
            name: 'Supplier |||| Suppliers',
            detail: 'Detail',
            fields: {
                createdAt: 'Created',
                rating: 'Rating',
                business: 'Company',
                status: 'Status'
            },
            action: {
                accept: 'Accept',
                reject: 'Reject'
            },
            notification: {
                approved_success: 'Item updated'
            },
            status: {
                pending: 'Pending',
                accepted: 'Accepted',
                rejected: 'Rejected',
            }
        },
        users: {
            name: 'User |||| Users',
            detail: 'Detail',
            fields: {
                createdAt: 'Created',
                name: 'Name',
                email: 'Email',
                role: 'Rol',
                supplierValidator: 'Supplier validator'
            },
            action: {
                accept: 'Accept',
                reject: 'Reject'
            },
            notification: {
                approved_success: 'Item updated'
            }
        },
    }
};

export default en;