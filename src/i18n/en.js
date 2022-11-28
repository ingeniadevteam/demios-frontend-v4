import englishMessages from 'ra-language-english';

const en = {
    ...englishMessages,
    pos: {
        language: 'Language',
        profile: 'Profile',
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
        days: {
            D0: '0',
            D15: '15',
            D30: '30',
            D45: '45',
            D60: '60',
            D90: '90',
            D120: '120',
            D150: '150',
            D180: '180',
        },
        bic: 'BIC',
        organization: 'Company *',
        type: 'Supplier or Creditor?',
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
        },
        theme: {
            name: 'Theme',
            light: 'Light',
            dark: 'Dark',
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
            name: 'Organiztion |||| Organiztions',
            detail: 'Detail',
            tabs: {
                details: 'Details',
                suppliers: 'Suppliers',
                invoices: 'Invoices',
                purchases: 'Purchases',
                tickets: 'Tickets',
            },
            fields: {
                organization: 'Organization',
                name: 'Entity',
                nameNumber: 'Entity code',
                office: 'Office',
                officeNumber: 'Office code',
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
                status: 'Status',
                paymentMethod: 'Payment Method',
                taxid: 'TAX ID',
                bic: 'BIC',
                days: 'Days',
                type: 'Type',
                phone: 'Phone',
                organizations: 'Organizaciones',
                approvedBy: 'Approved By',
                users: 'Users',
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
            },
            type: {
                supplier: 'Supplier',
                creditor: 'Creditor'
            },
        },
        users: {
            name: 'User |||| Users',
            detail: 'Detail',
            tabs: {
                details: 'Details',
                suppliers: 'Suppliers',
                invoices: 'Invoices',
                purchases: 'Purchases',
                tickets: 'Tickets',
            },
            fields: {
                createdAt: 'Created',
                name: 'Name',
                email: 'Email',
                username: 'Email',
                role: 'Rol',
                organization: 'Organization',
                supplierValidator: 'Supplier validator',
                invoiceValidator: 'Invoice Validator',
                invoicePayer: 'Invoice Payer',
                orderValidator: 'Order validator',
                ticketValidatorUserId: 'Ticket validator user',
                ticketValidator: 'Ticket validator',
                ticketPayer: 'Ticket payer',
                ticketRegistrar: 'Ticket registrar',
                ticketAdmin: 'Ticket admin',
                purchaseManager: '',
                purchaseAdmin: 'Purchase admin',
                purchaseAdmonObra: 'Purchase Admon',
                foreman: 'Foreman',
            },
            help: {
                supplierValidator: '',
                invoiceValidator: '',
                invoicePayer: '',
                orderValidator: '',
                ticketValidatorUserId: '',
                ticketValidator: '',
                ticketPayer: '',
                ticketRegistrar: '',
                ticketAdmin: '',
                purchaseManager: '',
                purchaseAdmin: '',
                purchaseAdmonObra: '',
                foreman: '',
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