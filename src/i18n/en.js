import englishMessages from 'ra-language-english';

const en = {
    ...englishMessages,
    pos: {
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
        registered: 'We hve registered your reuqest. Once verified, ee will send you an email with a login link.'        
    }
};

export default en;