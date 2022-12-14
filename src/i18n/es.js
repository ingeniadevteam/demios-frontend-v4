const es = {
    pos: {
        language: 'Idioma',
        profile: 'Perfil',
        configuration: 'Configuración',
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
        bic: 'Cuenta bancaria',
        organization: 'Selecciona la organización *',
        type: '¿Proveedor o Acreedor?',
        emailInvalid: 'Por favor, introduce un Email válido',
        registered: 'Hemos registrado tu solicitud. Una vez validada, recibirás un correo con el enlace de acceso a Demios.',
        dashboard: {
            welcome: {
                title: 'Bienvenido a Demios',
                subtitle: 'Campos Corporación',
            },
            pending_suppliers: 'Nuevos proveedores'
        },
        menu: {
            admon: 'Administración',
            comm: 'Comunicaciones',
            conf: 'Configuración',
        },
        theme: {
            name: 'Tema',
            light: 'Claro',
            dark: 'Oscuro',
        }
    },
    roles: {
        manager: 'Administrador',
        employee: 'Empleado',
        supplier: 'Proveedor',
        authenticated: 'Autenticado',
        public: 'Público',
    },
    resources: {
        organizations: {
            name: 'Organización |||| Organizaciones',
            detail: 'Detalle',
            tabs: {
                details: 'Datos',
                suppliers: 'Proveedores',
                invoices: 'Facturación',
                purchases: 'Compras',
                tickets: 'Tickets',
                issues: 'Incidencias',
            },
            fields: {
                organization: 'Organización',
                name: 'Entidad',
                nameNumber: 'Código entidad',
                office: 'Delegación',
                officeNumber: 'Código delegación',
                createdAt: 'Creada el',
                supplierValidators: 'Validadores de proveedores',
                invoiceValidators: 'Validadores de facturas',
                invoicePayer: 'Pagador de facturas',
                orderValidator: 'Validador de Pedidos',
                purchaseLessThan: 'Compras inferiores a',
                purchaseMoreThan: 'Compras superiores a',
                purchaseManager: 'Administración compras',
                orgManager: 'Gerencia',
                orgAdmonsObra: 'Administradores de obra',
                enableValidatorList: 'Lista de validadores de tickets',
                validators: "Validadores de tickets",
                ticketPayerCompanyInvoice: 'Paga tickets con factura empresa',
                ticketPayerOther: 'Paga tickets de otros tipos de gasto',
                ticketRegistrarCompanyInvoice: 'Contabiliza tickets con factura empresa',
                ticketRegistrarOther: 'Contabiliza tickets de otros tipos de gasto',
                issueOrderManager: 'De pedidos',
                issueInvoiceRejectedManager: 'De facturas rechazadas',
                issuePaymetNotReceivedManager: 'De pagos no recibidos',
                issueTechnicalManager: 'De problemas técnicos',
                issueOtherManager: 'De otras incidencias',
            },
            help: {
                supplierValidator: '',
                invoiceValidator: '',
                invoicePayer: 'El usuario que paga las facturas de la organización. Para que salga en la lista, debe tener marcada la opción "Pagador de facturas" en la configuración de FACTURAS del usuario.',
                orderValidator: 'El usuario que paga las facturas de la organización. Debe tener marcada la opción "Validador de pedidos" en la configuración de FACTURAS del usuario.',
                purchaseLessThan: 'Por debajo de esta cantidad, la compra no pasa por aprobación.',
                purchaseMoreThan: 'Por encima de esta cantidad, la compra necesita aprobación.',
                purchaseManager: 'El usuario encargado de la administración compras. Debe tener marcada la opción "Administración compras" en la configuración de COMPRAS del usuario.',
                orgManager: 'Gerente de organización. Debe tener marcada la opción "Gerencia" en la configuración de COMPRAS del usuario.',
                orgAdmonsObra: 'Los usuarios administradores de obra. Deben tener marcada la opción "Administración obra" en la configuración de COMPRAS del usuario.',
                enableValidatorList: 'Habilita una lista de validadores de tickets',
                validators: "Usuarios que validan los tickets de la organización",
                ticketPayerCompanyInvoice: 'Paga tickets con factura empresa',
                ticketPayerOther: 'Paga tickets de otros tipos de gasto',
                ticketRegistrarCompanyInvoice: 'Contabiliza tickets con factura empresa',
                ticketRegistrarOther: 'Contabiliza tickets de otros tipos de gasto',
                issueOrderManager: 'Gestiona incidencias de pedidos',
                issueInvoiceRejectedManager: 'Gestiona incidencias de facturas rechazadas',
                issuePaymetNotReceivedManager: 'Gestiona incidencias de pagos no recibidos',
                issueTechnicalManager: 'Gestiona incidencias de problemas técnicos',
                issueOtherManager: 'Gestiona incidencias de otro tipo',
            },
        },
        suppliers: {
            name: 'Proveedor |||| Proveedores',
            detail: 'Detalle',
            fields: {
                createdAt: 'Creado el',
                rating: 'Valoración',
                business: 'Empresa',
                status: 'Estado',
                paymentMethod: 'Forma de pago',
                taxid: 'CIF',
                bic: 'Número de cuenta',
                days: 'Días',
                type: 'Tipo',
                phone: 'Teléfono',
                organizations: 'Organizaciones',
                approvedBy: 'Aceptado por',
                users: 'Usuarios enlazados',

            },
            action: {
                accept: 'Aceptar',
                reject: 'Rechazar'
            },
            notification: {
                approved_success: 'Elemento actualizado'
            },
            status: {
                pending: 'Pendiente',
                accepted: 'Aceptado',
                rejected: 'Rechazado',
            },
            type: {
                supplier: 'Proveedor',
                creditor: 'Acreedor'
            },
        },
        users: {
            name: 'Usuario |||| Usuarios',
            detail: 'Detalle',
            tabs: {
                details: 'Datos',
                suppliers: 'Proveedores',
                invoices: 'Facturas',
                purchases: 'Compras',
                tickets: 'Tickets',
                issues: 'Incidencias',
            },
            fields: {
                createdAt: 'Creado el',
                name: 'Nombre',
                email: 'Email',
                username: 'Email',
                role: 'Rol',
                organization: 'Organización',
                supplierValidator: 'Validador de proveedores',
                invoiceValidator: 'Validador de facturas',
                invoicePayer: 'Pagador de facturas',
                orderValidator: 'Validador de pedidos',
                ticketValidatorUserId: 'Usuario que validada los tickets',
                ticketValidator: 'Validador de tickets',
                ticketPayer: 'Pagador de tickets',
                ticketRegistrar: 'Contabiliza tickets',
                ticketAdmin: 'Administrador de tickets',
                orgManager: 'Gerente',
                purchaseManager: 'Administración compras',
                purchaseAdmonObra: 'Administración obra',
                foreman: 'Jefe de Obra',
                issueManager: 'Gestor de incidencias',
            },
            help: {
                supplierValidator: 'El usuario se puede configurar como validador de proveedores en las organizaciones',
                invoiceValidator: 'El usuario se puede configurar como validador de facturas en las organizaciones',
                invoicePayer: 'El usuario se puede configurar como pagador de facturas en las organizaciones',
                orderValidator: 'El usuario se puede configurar como validador de pedidos en las organizaciones',
                ticketValidatorUserId: 'El usuario que valida los tickets de este usuario',
                ticketValidator: 'El usuario se puede configurar como validador de tickets en las organizaciones',
                ticketPayer: 'El usuario se puede configurar como pagador de tickets en las organizaciones',
                ticketRegistrar: 'El usuario se puede configurar para contabilizar tickets en Telematel',
                orgManager: 'El gerente valida las compras de importe elevado.',
                ticketAdmin: 'El usuario se puede configurar como administrador de tickets',
                purchaseManager: 'El usuario se puede configurar como administración de compras en las organizaciones',
                purchaseAdmonObra: 'El usuario se puede configurar como administración de obra en las organizaciones',
                foreman: 'El usuario es un jefe de Obra',
                issueManager: 'Usuario al que se pude asignar incidencias en la configuración de INCIDENCIAS de la organizaciónGestor de incidencias',
            },
            action: {
                accept: 'Aceptar',
                reject: 'Rechazar'
            },
            notification: {
                approved_success: 'Elemento actualizado'
            }
        },
    },

    "ra":{
        "action":{
            "add_filter":"Añadir filtro",
            "add":"Añadir",
            "back":"Atrás",
            "bulk_actions":"1 item seleccionado |||| %{smart_count} items seleccionados",
            "cancel":"Cancelar",
            "clear_input_value":"Limpiar el valor",
            "clone":"Clonar",
            "confirm":"Confirmar",
            "create":"Crear",
            "create_item":"Crear %{item}",
            "delete":"Eliminar",
            "edit":"Editar",
            "export":"Exportar",
            "list":"Lista",
            "refresh":"Refrescar",
            "remove_filter":"Eliminar este filtro",
            "remove_all_filters":"Eliminar todos los filtros",
            "remove":"Eliminar",
            "save":"Guardar",
            "search":"Buscar",
            "select_all":"Seleccionar todo",
            "select_row":"Seleccionar esta fila",
            "show":"Mostrar",
            "sort":"Ordenar",
            "undo":"Deshacer",
            "unselect":"No Seleccionar",
            "expand":"Expandir",
            "close":"Cerrar",
            "open_menu":"Abrir menú",
            "close_menu":"Cerrar menú",
            "update":"Actualizar",
            "move_up":"Mover arriba",
            "move_down":"Mover abajo",
            "open":"Abrir",
            "toggle_theme":"Cambiar Tema",
            "select_columns":"Columnas"
        },
        "boolean":{
            "true":"Si",
            "false":"No",
            "null":" "
        },
        "page":{
            "create":"Crear %{name}",
            "dashboard":"Dashboard",
            "edit":"%{name} %{recordRepresentation}",
            "error":"Algo ha ido mal",
            "list":"%{name}",
            "loading":"Cargando",
            "not_found":"Not Found",
            "show":"%{name} %{recordRepresentation}",
            "empty":"Sin %{name} aún.",
            "invite":"Quieres añadir uno?"
        },
        "input":{
            "file":{
                "upload_several":"Drop some files to upload, or click to select one.",
                "upload_single":"Drop a file to upload, or click to select it."
            },
            "image":{
                "upload_several":"Drop some pictures to upload, or click to select one.",
                "upload_single":"Drop a picture to upload, or click to select it."
            },
            "references":{
                "all_missing":"Unable to find references data.",
                "many_missing":"At least one of the associated references no longer appears to be available.",
                "single_missing":"Associated reference no longer appears to be available."
            },
            "password":{
                "toggle_visible":"Hide password",
                "toggle_hidden":"Show password"
            }
        },
        "message":{
            "about":"About",
            "are_you_sure":"Are you sure?",
            "bulk_delete_content":"Are you sure you want to delete this %{name}? |||| Are you sure you want to delete these %{smart_count} items?",
            "bulk_delete_title":"Delete %{name} |||| Delete %{smart_count} %{name}",
            "bulk_update_content":"Are you sure you want to update this %{name}? |||| Are you sure you want to update these %{smart_count} items?",
            "bulk_update_title":"Update %{name} |||| Update %{smart_count} %{name}",
            "delete_content":"Are you sure you want to delete this item?",
            "delete_title":"Delete %{name} #%{id}",
            "details":"Details",
            "error":"A client error occurred and your request couldn't be completed.",
            "invalid_form":"The form is not valid. Please check for errors",
            "loading":"The page is loading, just a moment please",
            "no":"No",
            "not_found":"Either you typed a wrong URL, or you followed a bad link.",
            "yes":"Yes",
            "unsaved_changes":"Some of your changes weren't saved. Are you sure you want to ignore them?"
        },
        "navigation":{
            "no_results":"Sin resultados",
            "no_more_results":"The page number %{page} is out of boundaries. Try the previous page.",
            "page_out_of_boundaries":"Page number %{page} out of boundaries",
            "page_out_from_end":"Cannot go after last page",
            "page_out_from_begin":"Cannot go before page 1",
            "page_range_info":"%{offsetBegin}-%{offsetEnd} of %{total}",
            "partial_page_range_info":"%{offsetBegin}-%{offsetEnd} of more than %{offsetEnd}",
            "current_page":"Página %{page}",
            "page":"Ir a la página %{page}",
            "first":"Ir a la primera página",
            "last":"Ir a la última página",
            "next":"Ir a la página siguiente",
            "previous":"Ir a la página anterior",
            "page_rows_per_page":"Filas por página:",
            "skip_nav":"Ir al contenido"
        },
        "sort":{
            "sort_by":"Ordenar por %{field} %{order}",
            "ASC":"ascendente",
            "DESC":"descendente"
        },
        "auth":{
            "auth_check_error":"Por favor haz login para continuar",
            "user_menu":"Perfil",
            "username":"Username",
            "password":"Password",
            "sign_in":"Sign in",
            "sign_in_error":"Authentication failed, please retry",
            "logout":"Logout"
        },
        "notification":{
            "updated":"Elemento actualizado |||| %{smart_count} elementos actualizados",
            "created":"Elemento creado",
            "deleted":"Elemento eliminado |||| %{smart_count} elementos eliminados",
            "bad_item":"Elemento incorrecto",
            "item_doesnt_exist":"El elemento no existe",
            "http_error":"Server communication error",
            "data_provider_error":"dataProvider error. Check the console for details.",
            "i18n_error":"Cannot load the translations for the specified language",
            "canceled":"Action cancelled",
            "logged_out":"Your session has ended, please reconnect.",
            "not_authorized":"You're not authorized to access this resource."
        },
        "validation":{
            "required":"Required",
            "minLength":"Must be %{min} characters at least",
            "maxLength":"Must be %{max} characters or less",
            "minValue":"Must be at least %{min}",
            "maxValue":"Must be %{max} or less",
            "number":"Must be a number",
            "email":"Must be a valid email",
            "oneOf":"Must be one of: %{options}",
            "regex":"Must match a specific format (regexp): %{pattern}"
        },
        "saved_queries":{
            "label":"Saved queries",
            "query_name":"Query name",
            "new_label":"Save current query...",
            "new_dialog_title":"Save current query as",
            "remove_label":"Remove saved query",
            "remove_label_with_name":"Remove query \"%{name}\"",
            "remove_dialog_title":"Remove saved query?",
            "remove_message":"Are you sure you want to remove that item from your list of saved queries?",
            "help":"Filter the list and save this query for later"
        },
        "configurable":{
            "customize":"Customize",
            "configureMode":"Configure this page",
            "inspector":{
                "title":"Inspector",
                "content":"Hover the application UI elements to configure them",
                "reset":"Reset Settings"
            },
            "SimpleList":{
                "primaryText":"Primary text",
                "secondaryText":"Secondary text",
                "tertiaryText":"Tertiary text"
            }
        }
    }

};

export default es;