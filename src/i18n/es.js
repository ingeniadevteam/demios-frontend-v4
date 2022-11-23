const es = {
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
                invoices: 'Facturas',
                purchases: 'Compras',
                tickets: 'Tickets',
            },
            fields: {
                name: 'Nombre',
                office: 'Oficina',
                createdAt: 'Creada el',
                supplierValidators: 'Validadores de proveedores',
                invoiceValidators: 'Validadores de facturas',
            }
        },
        suppliers: {
            name: 'Proveedor |||| Proveedores',
            detail: 'Detalle',
            fields: {
                createdAt: 'Creado el',
                rating: 'Valoración',
                business: 'Empresa',
                status: 'Estado'
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
            }
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
            },
            fields: {
                createdAt: 'Creado el',
                name: 'Nombre',
                email: 'Email',
                role: 'Rol',
                supplierValidator: 'Validador de proveedores'
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