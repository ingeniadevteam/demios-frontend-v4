import spanishMessages from 'ra-language-spanish';

const es = {
    ...spanishMessages,
    pos: {
        email: 'Introduce tu email',
        tip: 'Accede con tu email',
        notified: 'Hemos enviado un enlace de acceso a tu email. Puedes cerrar esta página.',
        signup: 'Regístrate',
        login: 'Acceder',
        name: 'Nombre y apellido del usuario',
        useremail: 'Email del usuario',
        business: 'Nombre de la empresa',
        taxid: 'CIF',
        zipcode: 'Código postal',
        terms: 'Acepto la política de privcidad de Campos Corporación',
        paymentMethod: 'Selecciona la forma de pago *',
        paymentMethods: {
            'confirming': 'Confirming',
            'transfer': 'Transferencia',
            'note': 'Pagaré',
            'bill': 'Recibo',
            'order': 'Giro',
            'other': 'Otro'
        },
        bic: 'Cuenta bancaria',
        organization: 'Selecciona la organización *',
        type: '¿Proveedor o Acreedor?',
        types: {
            supplier: 'Proveedor',
            creditor: 'Acreedor'
        },
        emailInvalid: 'Por favor, introduce un Email válido',
        registered: 'Hemos registrado tu solicitud. Una vez validada, recibirás un correo con el enlace de acceso a Demios.'
    }
};

export default es;