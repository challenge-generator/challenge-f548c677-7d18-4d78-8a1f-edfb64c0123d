# Prompt para Mejorar el Codigo Base

Copia y pega el contenido del bloque de abajo en un asistente de IA (Claude, ChatGPT)
para obtener un ZIP con el proyecto completo y arrancable.

Si preferis trabajar en tu editor con un agente local (Claude Code, Cursor, Copilot), usa `AGENTS.md` en vez de este archivo: dice lo mismo pero para que escriba los archivos en disco.

## Las dos reglas que no se negocian

1. **Completa el boilerplate.** Todo lo que el proyecto necesita para compilar y arrancar: manifiesto de dependencias, punto de entrada, configuracion, capa de interfaz, y las capas del patron arquitectonico declarado. Eso es andamiaje y es tu trabajo.
2. **NO resuelvas el reto.** Los entregables de las fases son el trabajo de la persona. El hueco pedagogico se deja como esta: el proyecto arranca, pero lo que el reto pide implementar NO esta implementado.

Dicho de otra forma: si algo impide compilar, arreglalo. Si algo es logica de negocio incompleta, validaciones ausentes, un secreto hardcodeado o un patron mejorable, dejalo exactamente como esta — es lo que la persona tiene que encontrar.

## Lo que le falta a este proyecto

Esto NO lo tenes que adivinar: salio de comparar el proyecto contra la arquitectura declarada del reto y de un analisis estatico del codigo. Completalo TODO.

### Referencias colgando en el codigo que si esta

Cada una rompe la compilacion:

- `react/hooks/useCart.ts` — `CartItem.reduce`: Se invoca `reduce` sobre `CartItem`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- `react/hooks/useCart.ts` — `CartItem.find`: Se invoca `find` sobre `CartItem`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- `react/hooks/useCart.ts` — `CartItem.map`: Se invoca `map` sobre `CartItem`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- `react/hooks/useCart.ts` — `CartItem.filter`: Se invoca `filter` sobre `CartItem`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- `react/services/cartService.ts` — `CartItem.reduce`: Se invoca `reduce` sobre `CartItem`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.

## Como saber que terminaste

```bash
npm install && npx tsc --noEmit
```

Ese comando corriendo sin errores es la definicion de "listo".

---

```
## Briefing del reto (autoridad)
Este bloque manda sobre los archivos adjuntos. El stack y el rol salen de AQUÍ, no de un topic genérico ni de markdown placeholder.

### Perfil
Chapter Frontend, Especialidad eCommerce, Tecnología Vtex, Advanced

### Brecha de conocimiento
Aplicando conscientemente conceptos de diferentes principios de código limpio basados en YAGNI, DRY, SOLID y KISS. Debes refactorizar código existente de un proyecto eCommerce para aplicar estos principios y mejorar la mantenibilidad, escalabilidad y legibilidad del código

### Misión / candidato
Candidato con experiencia avanzada en desarrollo frontend eCommerce, trabaja en proyectos complejos con equipos distribuidos.

### Reto
- Tema: Principios de código limpio
- Seniority: advanced-l2
- Tipo: practical
- Título: Refactorización de código en un proyecto eCommerce
- Tiempo estimado: 10 horas

### Fases (trabajo del HUMANO — PROHIBIDO completarlas)
No implementes estos entregables. Dejalos como hueco pedagógico. El asistente solo materializa el proyecto arrancable para que el participante pueda trabajar.
- Fase 1: Identificación de áreas de mejora — objetivo: Identificar partes del código que no siguen los principios de código limpio y proponer cambios. — entregable (NO resolver): Documento con áreas de mejora identificadas y propuestas de cambios.
- Fase 2: Refactorización del código — objetivo: Aplicar los cambios propuestos en la fase anterior para refactorizar el código. — entregable (NO resolver): Código refactorizado siguiendo los principios de código limpio.
- Fase 3: Revisión y documentación — objetivo: Revisar el código refactorizado y documentar los cambios realizados. — entregable (NO resolver): Informe final con la revisión del código refactorizado y la documentación de los cambios realizados.

Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 0 — ¿Esto es un proyecto o una carcasa?
Antes de extraer archivos, leé el Briefing (si está) y diagnosticá el adjunto.

Es CARCASA si ocurre CUALQUIERA de estas:
- No hay manifiesto de dependencias del stack del briefing (manifest.json de VTEX IO / package.json / pom.xml / build.gradle / requirements.txt / go.mod / *.tf / *.csproj, según corresponda)
- Hay un "binario" que en realidad es un comentario ("no puede ser mostrado como texto plano", placeholder .fig/.docx vacío)
- Los markdowns ya completan entregables de fases posteriores ("se implementó fade-in", lista de áreas ya resuelta)

Si es CARCASA:
- MATERIALIZÁ un proyecto que arranca en el stack del briefing (VTEX IO Store Framework, Angular, Terraform, pytest, Nest, etc.). Incluí manifiesto, punto de entrada y capa de interfaz reales.
- NO copies los markdowns de "solución" como si fueran el producto. Son ruido de generación.
- NO resuelvas las fases del briefing (están marcadas PROHIBIDO). Dejá el hueco pedagógico: el flujo existe, las microinteracciones/calidad/infra que el reto pide NO están hechas.
- Después seguí al PASO 5 (ZIP).

Si es un proyecto REAL (manifiesto + código que compila o arranca):
- Seguí PASO 1 en adelante. 🔴 compilación sí. 🟡 pedagógico no.

PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Exportación en ZIP
Empaqueta todos los archivos en un único archivo ZIP descargable respetando exactamente
la estructura de rutas indicada por los marcadores.
El ZIP debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: El ZIP debe estar listo para descargar al finalizar. No preguntes si el usuario
quiere generarlo. Simplemente genera el archivo y proporciona el enlace de descarga; No debes desplegar en el chat el resumen de lo que arreglaste al Zip, solo entregalo.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación, placeholders o binarios fake, NO la reproduzcas:
aplicá PASO 0 (materializar el proyecto del briefing). Reproducir la carcasa es un fallo.
No agregues texto después del enlace de descarga del ZIP
No preguntes si el usuario quiere el ZIP: simplemente generalo siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:

// === ARCHIVO: tsconfig.json ===
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "jsx": "react-jsx",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "moduleResolution": "node",
    "baseUrl": ".",
    "paths": {
      "@/*": ["react/*"],
      "styles/*": ["styles/*"]
    },
    "types": ["node", "vtex.styleguide/types"]
  },
  "include": [
    "react/**/*",
    "styles/**/*",
    "store/**/*",
    "*.ts",
    "*.tsx"
  ],
  "exclude": ["node_modules"]
}

// === ARCHIVO: manifest.json ===
{
  "vendor": "vtex",
  "name": "store-theme",
  "version": "1.0.0",
  "builders": {
    "react": "3.x",
    "store": "4.x",
    "styles": "2.x"
  },
  "dependencies": {
    "vtex.styleguide": "9.x",
    "vtex.store": "2.x",
    "vtex.checkout-ui-custom": "0.x",
    "vtex.product-summary": "2.x",
    "vtex.product-details": "2.x",
    "vtex.store-components": "3.x",
    "vtex.store-header": "2.x",
    "vtex.product-specifications": "1.x",
    "vtex.product-quantity": "1.x",
    "vtex.store-footer": "2.x",
    "vtex.store-icons": "0.x",
    "vtex.modal-layout": "0.x",
    "vtex.product-review-interfaces": "1.x",
    "vtex.product-review": "2.x"
  },
  "policies": [
    {
      "name": "vtex.styleguide",
      "version": "9.x",
      "dependencies": {
        "react": "18.2.0",
        "react-dom": "18.2.0",
        "@types/react": "18.2.45",
        "@types/react-dom": "18.2.18",
        "typescript": "5.3.3"
      }
    }
  ],
  "settings": {
    "store": {
      "title": "VTEX Store",
      "description": "Store theme for VTEX IO",
      "keywords": ["ecommerce", "vtex", "store"],
      "themeColor": "#1a237e"
    }
  },
  "peerDependencies": {
    "react": "18.2.0",
    "react-dom": "18.2.0"
  },
  "scripts": {
    "lint": "vtex lint",
    "test": "vtex test --coverage",
    "prepublish": "vtex publish"
  },
  "browserslist": {
    "production": [">0.2%", "not dead", "not op_mini all"],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}

// === ARCHIVO: store/interfaces.json ===
{
  "product-summary": {
    "component": "ProductSummary",
    "composition": "view",
    "render": "client",
    "allowed": [
      "product-summary-name",
      "product-summary-description",
      "product-summary-image",
      "product-summary-price",
      "product-summary-add-to-cart-button",
      "product-summary-specifications",
      "product-summary-short-description",
      "product-summary-availability",
      "product-summary-quantity"
    ],
    "contentLists": {
      "products": {
        "isLayout": false,
        "isArray": true,
        "maxSize": 10
      }
    },
    "properties": {
      "showBadge": {
        "type": "boolean",
        "default": true
      },
      "showDescription": {
        "type": "boolean",
        "default": false
      },
      "showPrice": {
        "type": "boolean",
        "default": true
      },
      "showImage": {
        "type": "boolean",
        "default": true
      },
      "showAddToCartButton": {
        "type": "boolean",
        "default": true
      },
      "showQuantitySelector": {
        "type": "boolean",
        "default": false
      },
      "imageAspectRatio": {
        "type": "string",
        "default": "1:1"
      },
      "priceDisplay": {
        "type": "enum",
        "values": ["sellingPrice", "listPrice", "both"],
        "default": "sellingPrice"
      }
    }
  },
  "product-summary-name": {
    "component": "ProductSummaryName",
    "composition": "view",
    "render": "client"
  },
  "product-summary-description": {
    "component": "ProductSummaryDescription",
    "composition": "view",
    "render": "client"
  },
  "product-summary-image": {
    "component": "ProductSummaryImage",
    "composition": "view",
    "render": "client"
  },
  "product-summary-price": {
    "component": "ProductSummaryPrice",
    "composition": "view",
    "render": "client"
  },
  "product-summary-add-to-cart-button": {
    "component": "ProductSummaryAddToCartButton",
    "composition": "view",
    "render": "client"
  },
  "product-summary-quantity": {
    "component": "ProductSummaryQuantity",
    "composition": "view",
    "render": "client"
  },
  "cart": {
    "component": "Cart",
    "composition": "view",
    "render": "client",
    "allowed": [
      "cart-items",
      "cart-total",
      "cart-footer",
      "cart-title",
      "cart-empty",
      "cart-item-images",
      "cart-item-summary",
      "cart-item-quantity",
      "cart-item-remove",
      "checkout-button",
      "continue-shopping-button"
    ],
    "properties": {
      "showCartTitle": {
        "type": "boolean",
        "default": true
      },
      "showFooter": {
        "type": "boolean",
        "default": true
      },
      "showItemImages": {
        "type": "boolean",
        "default": true
      },
      "showItemRemoveButton": {
        "type": "boolean",
        "default": true
      },
      "showCheckoutButton": {
        "type": "boolean",
        "default": true
      },
      "showContinueShopping": {
        "type": "boolean",
        "default": true
      },
      "showItemsQuantity": {
        "type": "boolean",
        "default": true
      },
      "minItemsToCheckout": {
        "type": "number",
        "default": 1
      },
      "removeItemConfirmation": {
        "type": "boolean",
        "default": true
      },
      "titleText": {
        "type": "string",
        "default": "Mi Carrito"
      },
      "emptyStateMessage": {
        "type": "string",
        "default": "Tu carrito está vacío"
      }
    }
  },
  "cart-items": {
    "component": "CartItems",
    "composition": "view",
    "render": "client"
  },
  "cart-total": {
    "component": "CartTotal",
    "composition": "view",
    "render": "client"
  },
  "cart-footer": {
    "component": "CartFooter",
    "composition": "view",
    "render": "client"
  },
  "cart-item-images": {
    "component": "CartItemImages",
    "composition": "view",
    "render": "client"
  },
  "cart-item-summary": {
    "component": "CartItemSummary",
    "composition": "view",
    "render": "client"
  },
  "cart-item-quantity": {
    "component": "CartItemQuantity",
    "composition": "view",
    "render": "client"
  },
  "cart-item-remove": {
    "component": "CartItemRemove",
    "composition": "view",
    "render": "client"
  },
  "checkout-button": {
    "component": "CheckoutButton",
    "composition": "view",
    "render": "client"
  },
  "continue-shopping-button": {
    "component": "ContinueShoppingButton",
    "composition": "view",
    "render": "client"
  }
}

// === ARCHIVO: store/blocks/product-summary.json ===
{
  "product-summary": {
    "children": [
      "product-summary-image",
      "product-summary-name",
      "product-summary-price",
      "product-summary-add-to-cart-button",
      "product-summary-quantity"
    ],
    "props": {
      "showBadge": true,
      "showDescription": false,
      "showPrice": true,
      "showImage": true,
      "showAddToCartButton": true,
      "showQuantitySelector": false,
      "imageAspectRatio": "1:1",
      "priceDisplay": "sellingPrice"
    }
  },
  "product-summary-image": {
    "props": {
      "imageHeight": 300,
      "imageWidth": 300,
      "aspectRatio": "1:1",
      "maxHeight": 300
    }
  },
  "product-summary-name": {
    "props": {
      "tag": "h3",
      "showBrandName": false,
      "showSku": false
    }
  },
  "product-summary-price": {
    "props": {
      "showInstallments": true,
      "showDiscountValue": false,
      "showLabels": true,
      "show savings": true
    }
  },
  "product-summary-add-to-cart-button": {
    "props": {
      "displayMode": "icon-button",
      "addToCartFeedback": "inline",
      "customColor": "#000000",
      "customIconColor": "#ffffff"
    }
  },
  "product-summary-quantity": {
    "props": {
      "selectorType": "dropdown",
      "showLabel": true,
      "quantityLabel": "Cantidad"
    }
  },
  "shelf#home": {
    "blocks": ["product-summary.shelf"],
    "props": {
      "pagination": "show-more",
      "productSum": 10,
      "shuffleFirstPage": false,
      "orderBy": "OrderByTopSaleDESC"
    }
  },
  "product-summary.shelf": {
    "children": [
      "flex-layout.row#product-summary-main",
      "flex-layout.row#product-summary-secondary"
    ],
    "props": {
      "blockClass": "product-summary-shelf"
    }
  },
  "flex-layout.row#product-summary-main": {
    "children": [
      "product-summary-image",
      "flex-layout.col#product-summary-info"
    ],
    "props": {
      "blockClass": "product-summary-main-row",
      "colSizing": "auto",
      "colGap": 3
    }
  },
  "flex-layout.col#product-summary-info": {
    "children": [
      "product-summary-name",
      "product-summary-price"
    ],
    "props": {
      "blockClass": "product-summary-info-col",
      "width": "grow"
    }
  },
  "flex-layout.row#product-summary-secondary": {
    "children": [
      "product-summary-add-to-cart-button",
      "product-summary-quantity"
    ],
    "props": {
      "blockClass": "product-summary-actions-row",
      "horizontalAlign": "center",
      "preventHorizontalStretch": true
    }
  },
  "product-summary-list#home": {
    "blocks": ["product-summary"],
    "props": {
      "orderBy": "OrderByTopSaleDESC",
      "collection": "1",
      "hideUnavailableItems": false,
      "maxItems": 10
    }
  },
  "product-summary-list#search": {
    "blocks": ["product-summary"],
    "props": {
      "orderBy": "OrderByScoreDESC",
      "hideUnavailableItems": true,
      "maxItems": 20
    }
  },
  "product-summary-list#shelf": {
    "blocks": ["product-summary"],
    "props": {
      "orderBy": "OrderByReleaseDateDESC",
      "hideUnavailableItems": false,
      "maxItems": 8
    }
  }
}

// === ARCHIVO: store/blocks/cart.json ===
{
  "cart": {
    "children": [
      "cart-title",
      "cart-items",
      "cart-footer"
    ],
    "props": {
      "showCartTitle": true,
      "showFooter": true,
      "showItemImages": true,
      "showItemRemoveButton": true,
      "showCheckoutButton": true,
      "showContinueShopping": true,
      "showItemsQuantity": true,
      "minItemsToCheckout": 1,
      "removeItemConfirmation": true,
      "titleText": "Mi Carrito",
      "emptyStateMessage": "Tu carrito está vacío"
    }
  },
  "cart-title": {
    "props": {
      "text": "Mi Carrito",
      "showIcon": true,
      "iconName": "Cart",
      "iconSize": 24
    }
  },
  "cart-items": {
    "children": [
      "flex-layout.row#cart-items-header",
      "cart-item-images",
      "cart-item-summary",
      "cart-item-quantity",
      "cart-item-remove"
    ],
    "props": {
      "blockClass": "cart-items-container",
      "itemsPerRow": 1,
      "separatorClass": "cart-items-separator"
    }
  },
  "flex-layout.row#cart-items-header": {
    "children": [
      "flex-layout.col#header-product",
      "flex-layout.col#header-price",
      "flex-layout.col#header-quantity",
      "flex-layout.col#header-total",
      "flex-layout.col#header-actions"
    ],
    "props": {
      "blockClass": "cart-items-header",
      "colSizing": "auto",
      "fullWidth": true
    }
  },
  "flex-layout.col#header-product": {
    "children": [
      "rich-text#header-product"
    ],
    "props": {
      "width": "grow",
      "blockClass": "header-product-col"
    }
  },
  "flex-layout.col#header-price": {
    "children": [
      "rich-text#header-price"
    ],
    "props": {
      "width": "15%",
      "blockClass": "header-price-col"
    }
  },
  "flex-layout.col#header-quantity": {
    "children": [
      "rich-text#header-quantity"
    ],
    "props": {
      "width": "15%",
      "blockClass": "header-quantity-col"
    }
  },
  "flex-layout.col#header-total": {
    "children": [
      "rich-text#header-total"
    ],
    "props": {
      "width": "15%",
      "blockClass": "header-total-col"
    }
  },
  "flex-layout.col#header-actions": {
    "children": [],
    "props": {
      "width": "10%",
      "blockClass": "header-actions-col"
    }
  },
  "rich-text#header-product": {
    "props": {
      "text": "Producto",
      "textAlignment": "left",
      "textPosition": "left"
    }
  },
  "rich-text#header-price": {
    "props": {
      "text": "Precio",
      "textAlignment": "center",
      "textPosition": "center"
    }
  },
  "rich-text#header-quantity": {
    "props": {
      "text": "Cantidad",
      "textAlignment": "center",
      "textPosition": "center"
    }
  },
  "rich-text#header-total": {
    "props": {
      "text": "Total",
      "textAlignment": "center",
      "textPosition": "center"
    }
  },
  "cart-item-images": {
    "props": {
      "imageHeight": 80,
      "imageWidth": 80,
      "aspectRatio": "1:1",
      "maxHeight": 80
    }
  },
  "cart-item-summary": {
    "props": {
      "showName": true,
      "showSku": true,
      "showBrandName": false,
      "showAssemblyOptions": true
    }
  },
  "cart-item-quantity": {
    "props": {
      "selectorType": "dropdown",
      "showLabel": true,
      "quantityLabel": "Cantidad",
      "maxQuantity": 10
    }
  },
  "cart-item-remove": {
    "props": {
      "showLabel": true,
      "labelText": "Eliminar",
      "confirmDialogTitle": "¿Eliminar producto?",
      "confirmDialogMessage": "¿Estás seguro de que quieres eliminar este producto del carrito?",
      "confirmButtonText": "Sí, eliminar",
      "cancelButtonText": "Cancelar"
    }
  },
  "cart-footer": {
    "children": [
      "flex-layout.row#cart-footer-main"
    ],
    "props": {
      "blockClass": "cart-footer-container"
    }
  },
  "flex-layout.row#cart-footer-main": {
    "children": [
      "flex-layout.col#cart-totals",
      "flex-layout.col#cart-actions"
    ],
    "props": {
      "blockClass": "cart-footer-row",
      "colSizing": "auto",
      "fullWidth": true
    }
  },
  "flex-layout.col#cart-totals": {
    "children": [
      "cart-total"
    ],
    "props": {
      "width": "grow",
      "blockClass": "cart-totals-col"
    }
  },
  "flex-layout.col#cart-actions": {
    "children": [
      "checkout-button",
      "continue-shopping-button"
    ],
    "props": {
      "width": "auto",
      "blockClass": "cart-actions-col"
    }
  },
  "checkout-button": {
    "props": {
      "text": "Ir al checkout",
      "blockClass": "checkout-button",
      "size": "large",
      "customColor": "#000000",
      "customIconColor": "#ffffff"
    }
  },
  "continue-shopping-button": {
    "props": {
      "text": "Seguir comprando",
      "blockClass": "continue-shopping-button",
      "size": "regular",
      "displayMode": "button"
    }
  },
  "cart-total": {
    "props": {
      "showSubtotal": true,
      "showTotal": true,
      "showShipping": false,
      "showTaxes": false,
      "subtotalLabel": "Subtotal",
      "totalLabel": "Total"
    }
  },
  "cart#minicart": {
    "children": [
      "cart-items",
      "cart-footer"
    ],
    "props": {
      "showCartTitle": false,
      "showFooter": true,
      "showItemImages": true,
      "showItemRemoveButton": true,
      "showCheckoutButton": true,
      "showContinueShopping": false,
      "showItemsQuantity": true,
      "minItemsToCheckout": 1,
      "removeItemConfirmation": false
    }
  },
  "cart#sidebar": {
    "children": [
      "cart-title",
      "cart-items",
      "cart-footer"
    ],
    "props": {
      "showCartTitle": true,
      "showFooter": true,
      "showItemImages": true,
      "showItemRemoveButton": true,
      "showCheckoutButton": true,
      "showContinueShopping": true,
      "showItemsQuantity": true,
      "minItemsToCheckout": 1,
      "removeItemConfirmation": true
    }
  },
  "cart#page": {
    "children": [
      "cart-title",
      "cart-items",
      "cart-footer"
    ],
    "props": {
      "showCartTitle": true,
      "showFooter": true,
      "showItemImages": true,
      "showItemRemoveButton": true,
      "showCheckoutButton": true,
      "showContinueShopping": true,
      "showItemsQuantity": true,
      "minItemsToCheckout": 1,
      "removeItemConfirmation": true,
      "titleText": "Carrito de Compras",
      "emptyStateMessage": "Tu carrito está vacío. ¡Explora nuestros productos!"
    }
  }
}

// === ARCHIVO: store/blocks/checkout.json ===
{
  "checkout": {
    "children": [
      "flex-layout.row#checkout-progress",
      "flex-layout.row#checkout-main-content",
      "flex-layout.row#checkout-summary"
    ]
  },
  "flex-layout.row#checkout-progress": {
    "props": {
      "blockClass": "checkout-progress",
      "fullWidth": true,
      "horizontalAlign": "center",
      "marginTop": 5,
      "marginBottom": 5
    },
    "children": [
      "checkout-progress.stepper"
    ]
  },
  "flex-layout.row#checkout-main-content": {
    "props": {
      "blockClass": "checkout-main-content",
      "fullWidth": true,
      "colGap": 7,
      "rowGap": 7,
      "marginBottom": 7
    },
    "children": [
      "flex-layout.col#checkout-form",
      "flex-layout.col#checkout-sidebar"
    ]
  },
  "flex-layout.col#checkout-form": {
    "props": {
      "blockClass": "checkout-form-column",
      "width": "grow",
      "verticalSpacing": 6
    },
    "children": [
      "checkout-customer-info",
      "checkout-shipping-address",
      "checkout-payment-method"
    ]
  },
  "flex-layout.col#checkout-sidebar": {
    "props": {
      "blockClass": "checkout-sidebar-column",
      "width": "shelf",
      "verticalSpacing": 6
    },
    "children": [
      "checkout-order-summary"
    ]
  },
  "flex-layout.row#checkout-summary": {
    "props": {
      "blockClass": "checkout-summary-row",
      "fullWidth": true,
      "horizontalAlign": "center",
      "marginTop": 7,
      "marginBottom": 7
    },
    "children": [
      "checkout-place-order-button"
    ]
  },
  "checkout-customer-info": {
    "props": {
      "blockClass": "customer-info-section",
      "title": "Información del Cliente"
    },
    "children": [
      "checkout-customer-email",
      "checkout-customer-document"
    ]
  },
  "checkout-customer-email": {
    "props": {
      "blockClass": "customer-email-input",
      "placeholder": "correo@ejemplo.com",
      "label": "Correo Electrónico",
      "required": true
    }
  },
  "checkout-customer-document": {
    "props": {
      "blockClass": "customer-document-input",
      "placeholder": "12345678",
      "label": "Documento de Identidad",
      "required": true
    }
  },
  "checkout-shipping-address": {
    "props": {
      "blockClass": "shipping-address-section",
      "title": "Dirección de Envío"
    },
    "children": [
      "checkout-address-street",
      "checkout-address-number",
      "checkout-address-complement",
      "checkout-address-neighborhood",
      "checkout-address-city",
      "checkout-address-state",
      "checkout-address-zipcode"
    ]
  },
  "checkout-address-street": {
    "props": {
      "blockClass": "address-street-input",
      "placeholder": "Nombre de la calle",
      "label": "Calle",
      "required": true
    }
  },
  "checkout-address-number": {
    "props": {
      "blockClass": "address-number-input",
      "placeholder": "123",
      "label": "Número",
      "required": true
    }
  },
  "checkout-address-complement": {
    "props": {
      "blockClass": "address-complement-input",
      "placeholder": "Apartamento,suite,etc.",
      "label": "Complemento",
      "required": false
    }
  },
  "checkout-address-neighborhood": {
    "props": {
      "blockClass": "address-neighborhood-input",
      "placeholder": "Barrio",
      "label": "Barrio",
      "required": true
    }
  },
  "checkout-address-city": {
    "props": {
      "blockClass": "address-city-input",
      "placeholder": "Ciudad",
      "label": "Ciudad",
      "required": true
    }
  },
  "checkout-address-state": {
    "props": {
      "blockClass": "address-state-select",
      "label": "Estado/Provincia",
      "required": true,
      "options": [
        {"value": "", "label": "Seleccionar"},
        {"value": "SP", "label": "São Paulo"},
        {"value": "RJ", "label": "Rio de Janeiro"},
        {"value": "MG", "label": "Minas Gerais"},
        {"value": "RS", "label": "Rio Grande do Sul"}
      ]
    }
  },
  "checkout-address-zipcode": {
    "props": {
      "blockClass": "address-zipcode-input",
      "placeholder": "00000-000",
      "label": "Código Postal",
      "required": true
    }
  },
  "checkout-payment-method": {
    "props": {
      "blockClass": "payment-method-section",
      "title": "Método de Pago"
    },
    "children": [
      "checkout-payment-options",
      "checkout-payment-integration"
    ]
  },
  "checkout-payment-options": {
    "props": {
      "blockClass": "payment-options-container",
      "paymentMethods": [
        "creditCard",
        "debitCard",
        "boleto",
        "pix"
      ]
    }
  },
  "checkout-payment-integration": {
    "props": {
      "blockClass": "payment-integration-container"
    }
  },
  "checkout-order-summary": {
    "props": {
      "blockClass": "order-summary-section",
      "title": "Resumen del Pedido",
      "showItems": true,
      "showShipping": true,
      "showTax": true
    },
    "children": [
      "checkout-order-items",
      "checkout-order-totals"
    ]
  },
  "checkout-order-items": {
    "props": {
      "blockClass": "order-items-list"
    }
  },
  "checkout-order-totals": {
    "props": {
      "blockClass": "order-totals-container",
      "showSubtotal": true,
      "showShipping": true,
      "showDiscount": true,
      "showTax": true,
      "showTotal": true
    }
  },
  "checkout-place-order-button": {
    "props": {
      "blockClass": "place-order-button",
      "label": "Realizar Pedido",
      "size": "large",
      "fullWidth": true,
      "disabled": false
    }
  },
  "checkout-progress.stepper": {
    "props": {
      "blockClass": "checkout-stepper",
      "steps": [
        {
          "label": "Cliente",
          "active": true,
          "completed": false
        },
        {
          "label": "Envío",
          "active": false,
          "completed": false
        },
        {
          "label": "Pago",
          "active": false,
          "completed": false
        }
      ]
    }
  }
}

// === ARCHIVO: react/components/ProductSummary.tsx ===
import React from 'react';
import { Product } from '../hooks/useProduct';
import { formatCurrency } from '../utils/formatter';
import { Button } from './shared/Button';

interface ProductSummaryProps {
  product: Product;
  onAddToCart?: (productId: string) => void;
  onRemoveFromCart?: (productId: string) => void;
  isInCart?: boolean;
  quantity?: number;
}

export const ProductSummary: React.FC<ProductSummaryProps> = ({
  product,
  onAddToCart,
  onRemoveFromCart,
  isInCart = false,
  quantity = 0,
}) => {
  const handleAddToCart = () => {
    if (onAddToCart && product.id) {
      onAddToCart(product.id);
    }
  };

  const handleRemoveFromCart = () => {
    if (onRemoveFromCart && product.id) {
      onRemoveFromCart(product.id);
    }
  };

  const totalPrice = product.price * (quantity || 1);

  return (
    <div className="product-summary">
      <div className="product-summary__image-container">
        {product.imageUrl ? (
          <img
            src={product.imageUrl}
            alt={product.name}
            className="product-summary__image"
          />
        ) : (
          <div className="product-summary__image-placeholder">
            <span>Sin imagen</span>
          </div>
        )}
      </div>

      <div className="product-summary__content">
        <h3 className="product-summary__name">{product.name}</h3>
        
        {product.description && (
          <p className="product-summary__description">{product.description}</p>
        )}

        <div className="product-summary__price">
          <span className="product-summary__price-label">Precio:</span>
          <span className="product-summary__price-value">
            {formatCurrency(product.price)}
          </span>
        </div>

        {isInCart && (
          <div className="product-summary__cart-info">
            <span className="product-summary__quantity-label">Cantidad:</span>
            <span className="product-summary__quantity-value">{quantity}</span>
            <span className="product-summary__total-label">Total:</span>
            <span className="product-summary__total-value">
              {formatCurrency(totalPrice)}
            </span>
          </div>
        )}

        <div className="product-summary__actions">
          {isInCart ? (
            <Button
              variant="secondary"
              onClick={handleRemoveFromCart}
              aria-label={`Eliminar ${product.name} del carrito`}
            >
              Quitar
            </Button>
          ) : (
            <Button
              variant="primary"
              onClick={handleAddToCart}
              aria-label={`Agregar ${product.name} al carrito`}
            >
              Agregar al Carrito
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

// === ARCHIVO: react/components/Cart.tsx ===
import React, { useState, useEffect } from 'react';
import { useCart } from '../hooks/useCart';
import { ProductSummary } from './ProductSummary';
import { Product } from '../hooks/useProduct';
import { formatCurrency } from '../utils/formatter';
import { Button } from './shared/Button';

interface CartProps {
  onCheckout?: () => void;
}

export const Cart: React.FC<CartProps> = ({ onCheckout }) => {
  const {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    total,
    itemCount,
    isLoading,
    error,
  } = useCart();

  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setIsUpdating(true);
    } else {
      const timer = setTimeout(() => setIsUpdating(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  const handleAddProduct = (productId: string) => {
    const existingItem = items.find((item) => item.product.id === productId);
    
    if (existingItem) {
      updateQuantity(productId, existingItem.quantity + 1);
    } else {
      addItem({ id: productId } as Product);
    }
  };

  const handleRemoveProduct = (productId: string) => {
    removeItem(productId);
  };

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) {
      removeItem(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  const handleClearCart = () => {
    if (window.confirm('¿Estás seguro de que quieres vaciar el carrito?')) {
      clearCart();
    }
  };

  const handleCheckout = () => {
    if (onCheckout) {
      onCheckout();
    }
  };

  const isEmpty = items.length === 0;

  return (
    <div className="cart">
      <div className="cart__header">
        <h2 className="cart__title">Carrito de Compras</h2>
        {!isEmpty && (
          <span className="cart__item-count">
            {itemCount} {itemCount === 1 ? 'producto' : 'productos'}
          </span>
        )}
      </div>

      {error && (
        <div className="cart__error" role="alert">
          <p>Error al procesar el carrito: {error}</p>
          <Button variant="secondary" onClick={() => window.location.reload()}>
            Reintentar
          </Button>
        </div>
      )}

      {isUpdating && (
        <div className="cart__loading">
          <span>Actualizando carrito...</span>
        </div>
      )}

      {isEmpty ? (
        <div className="cart__empty">
          <p className="cart__empty-message">Tu carrito está vacío</p>
          <Button variant="primary" onClick={() => window.history.back()}>
            Continuar Comprando
          </Button>
        </div>
      ) : (
        <>
          <ul className="cart__items">
            {items.map((item) => (
              <li key={item.product.id} className="cart__item">
                <ProductSummary
                  product={item.product}
                  isInCart
                  quantity={item.quantity}
                  onAddToCart={handleAddProduct}
                  onRemoveFromCart={handleRemoveProduct}
                />
                
                <div className="cart__item-controls">
                  <button
                    className="cart__quantity-btn"
                    onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                    disabled={isLoading}
                    aria-label="Disminuir cantidad"
                  >
                    -
                  </button>
                  <span className="cart__quantity">{item.quantity}</span>
                  <button
                    className="cart__quantity-btn"
                    onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                    disabled={isLoading}
                    aria-label="Aumentar cantidad"
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="cart__summary">
            <div className="cart__subtotal">
              <span>Subtotal:</span>
              <span>{formatCurrency(total)}</span>
            </div>
            <div className="cart__total">
              <span>Total:</span>
              <span>{formatCurrency(total)}</span>
            </div>
          </div>

          <div className="cart__actions">
            <Button
              variant="secondary"
              onClick={handleClearCart}
              disabled={isLoading}
            >
              Vaciar Carrito
            </Button>
            <Button
              variant="primary"
              onClick={handleCheckout}
              disabled={isLoading}
            >
              Proceder al Pago
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

// === ARCHIVO: react/components/Checkout.tsx ===
import React, { useState, useCallback } from 'react';
import { useCart } from '../hooks/useCart';
import { Button } from './shared/Button';
import { formatCurrency } from '../utils/formatter';

interface ShippingInfo {
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

interface PaymentInfo {
  cardNumber: string;
  cardHolder: string;
  expiryDate: string;
  cvv: string;
}

interface CheckoutFormData {
  shipping: ShippingInfo;
  payment: PaymentInfo;
}

type CheckoutStep = 'shipping' | 'payment' | 'review' | 'confirmation';

export const Checkout: React.FC = () => {
  const { items, total, clearCart, isLoading } = useCart();
  const [currentStep, setCurrentStep] = useState<CheckoutStep>('shipping');
  const [formData, setFormData] = useState<CheckoutFormData>({
    shipping: {
      address: '',
      city: '',
      state: '',
      zipCode: '',
      country: 'México',
    },
    payment: {
      cardNumber: '',
      cardHolder: '',
      expiryDate: '',
      cvv: '',
    },
  });
  const [errors, setErrors] = useState<Partial<Record<keyof CheckoutFormData, string>>>({});
  const [orderId, setOrderId] = useState<string | null>(null);

  const validateShipping = useCallback((): boolean => {
    const { shipping } = formData;
    const newErrors: Partial<Record<keyof CheckoutFormData, string>> = {};

    if (!shipping.address.trim()) {
      newErrors.shipping = 'La dirección es requerida';
    }
    if (!shipping.city.trim()) {
      newErrors.shipping = 'La ciudad es requerida';
    }
    if (!shipping.state.trim()) {
      newErrors.shipping = 'El estado es requerido';
    }
    if (!shipping.zipCode.trim()) {
      newErrors.shipping = 'El código postal es requerido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const validatePayment = useCallback((): boolean => {
    const { payment } = formData;
    const newErrors: Partial<Record<keyof CheckoutFormData, string>> = {};

    const cardNumberClean = payment.cardNumber.replace(/\s/g, '');
    if (!/^\d{16}$/.test(cardNumberClean)) {
      newErrors.payment = 'El número de tarjeta debe tener 16 dígitos';
    }
    if (!payment.cardHolder.trim()) {
      newErrors.payment = 'El nombre del titular es requerido';
    }
    if (!/^\d{2}\/\d{2}$/.test(payment.expiryDate)) {
      newErrors.payment = 'La fecha de expiración debe estar en formato MM/AA';
    }
    if (!/^\d{3,4}$/.test(payment.cvv)) {
      newErrors.payment = 'El CVV debe tener 3 o 4 dígitos';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleInputChange = useCallback(
    (section: keyof CheckoutFormData, field: string, value: string) => {
      setFormData((prev) => ({
        ...prev,
        [section]: {
          ...prev[section],
          [field]: value,
        },
      }));

      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[section];
        return newErrors;
      });
    },
    []
  );

  const handleNextStep = useCallback(() => {
    if (currentStep === 'shipping') {
      if (validateShipping()) {
        setCurrentStep('payment');
      }
    } else if (currentStep === 'payment') {
      if (validatePayment()) {
        setCurrentStep('review');
      }
    } else if (currentStep === 'review') {
      processOrder();
    }
  }, [currentStep, validateShipping, validatePayment]);

  const handlePreviousStep = useCallback(() => {
    if (currentStep === 'payment') {
      setCurrentStep('shipping');
    } else if (currentStep === 'review') {
      setCurrentStep('payment');
    }
  }, [currentStep]);

  const processOrder = useCallback(async () => {
    try {
      const generatedOrderId = `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
      setOrderId(generatedOrderId);
      clearCart();
      setCurrentStep('confirmation');
    } catch (err) {
      console.error('Error al procesar el pedido:', err);
      setErrors({ payment: 'Error al procesar el pago. Por favor, intente de nuevo.' });
    }
  }, [clearCart]);

  const renderShippingStep = () => (
    <div className="checkout__shipping">
      <h3 className="checkout__step-title">Información de Envío</h3>
      
      <div className="checkout__field">
        <label htmlFor="address">Dirección</label>
        <input
          id="address"
          type="text"
          value={formData.shipping.address}
          onChange={(e) => handleInputChange('shipping', 'address', e.target.value)}
          className={errors.shipping ? 'checkout__input-error' : ''}
        />
      </div>

      <div className="checkout__field-group">
        <div className="checkout__field">
          <label htmlFor="city">Ciudad</label>
          <input
            id="city"
            type="text"
            value={formData.shipping.city}
            onChange={(e) => handleInputChange('shipping', 'city', e.target.value)}
          />
        </div>

        <div className="checkout__field">
          <label htmlFor="state">Estado</label>
          <input
            id="state"
            type="text"
            value={formData.shipping.state}
            onChange={(e) => handleInputChange('shipping', 'state', e.target.value)}
          />
        </div>
      </div>

      <div className="checkout__field-group">
        <div className="checkout__field">
          <label htmlFor="zipCode">Código Postal</label>
          <input
            id="zipCode"
            type="text"
            value={formData.shipping.zipCode}
            onChange={(e) => handleInputChange('shipping', 'zipCode', e.target.value)}
          />
        </div>

        <div className="checkout__field">
          <label htmlFor="country">País</label>
          <input
            id="country"
            type="text"
            value={formData.shipping.country}
            onChange={(e) => handleInputChange('shipping', 'country', e.target.value)}
            disabled
          />
        </div>
      </div>
    </div>
  );

  const renderPaymentStep = () => (
    <div className="checkout__payment">
      <h3 className="checkout__step-title">Información de Pago</h3>
      
      <div className="checkout__field">
        <label htmlFor="cardNumber">Número de Tarjeta</label>
        <input
          id="cardNumber"
          type="text"
          value={formData.payment.cardNumber}
          onChange={(e) => handleInputChange('payment', 'cardNumber', e.target.value)}
          placeholder="1234 5678 9012 3456"
          maxLength={19}
        />
      </div>

      <div className="checkout__field">
        <label htmlFor="cardHolder">Nombre del Titular</label>
        <input
          id="cardHolder"
          type="text"
          value={formData.payment.cardHolder}
          onChange={(e) => handleInputChange('payment', 'cardHolder', e.target.value)}
        />
      </div>

      <div className="checkout__field-group">
        <div className="checkout__field">
          <label htmlFor="expiryDate">Fecha de Expiración</label>
          <input
            id="expiryDate"
            type="text"
            value={formData.payment.expiryDate}
            onChange={(e) => handleInputChange('payment', 'expiryDate', e.target.value)}
            placeholder="MM/AA"
            maxLength={5}
          />
        </div>

        <div className="checkout__field">
          <label htmlFor="cvv">CVV</label>
          <input
            id="cvv"
            type="text"
            value={formData.payment.cvv}
            onChange={(e) => handleInputChange('payment', 'cvv', e.target.value)}
            placeholder="123"
            maxLength={4}
          />
        </div>
      </div>
    </div>
  );

  const renderReviewStep = () => (
    <div className="checkout__review">
      <h3 className="checkout__step-title">Revisión del Pedido</h3>
      
      <div className="checkout__summary-section">
        <h4>Dirección de Envío</h4>
        <p>{formData.shipping.address}</p>
        <p>{formData.shipping.city}, {formData.shipping.state}</p>
        <p>C.P. {formData.shipping.zipCode}, {formData.shipping.country}</p>
      </div>

      <div className="checkout__summary-section">
        <h4>Método de Pago</h4>
        <p>Tarjeta terminada en ****{formData.payment.cardNumber.slice(-4)}</p>
        <p>Titular: {formData.payment.cardHolder}</p>
      </div>

      <div className="checkout__summary-section">
        <h4>Resumen del Pedido</h4>
        <ul className="checkout__items">
          {items.map((item) => (
            <li key={item.product.id} className="checkout__item">
              <span>{item.product.name} x{item.quantity}</span>
              <span>{formatCurrency(item.product.price * item.quantity)}</span>
            </li>
          ))}
        </ul>
        <div className="checkout__total">
          <span>Total:</span>
          <span>{formatCurrency(total)}</span>
        </div>
      </div>
    </div>
  );

  const renderConfirmationStep = () => (
    <div className="checkout__confirmation">
      <div className="checkout__success-icon">✓</div>
      <h3 className="checkout__success-title">¡Pedido Confirmado!</h3>
      <p className="checkout__order-id">
        Tu número de orden es: <strong>{orderId}</strong>
      </p>
      <p className="checkout__success-message">
        Recibirás un correo electrónico con los detalles de tu pedido.
      </p>
      <Button variant="primary" onClick={() => window.location.href = '/'}>
        Volver a la Tienda
      </Button>
    </div>
  );

  const isFirstStep = currentStep === 'shipping';
  const isLastStep = currentStep === 'review';

  return (
    <div className="checkout">
      <h2 className="checkout__title">Checkout</h2>

      <div className="checkout__steps">
        <div className={`checkout__step ${currentStep === 'shipping' ? 'checkout__step--active' : ''}`}>
          1. Envío
        </div>
        <div className={`checkout__step ${currentStep === 'payment' ? 'checkout__step--active' : ''}`}>
          2. Pago
        </div>
        <div className={`checkout__step ${currentStep === 'review' ? 'checkout__step--active' : ''}`}>
          3. Revisión
        </div>
      </div>

      {errors.shipping && (
        <div className="checkout__error" role="alert">
          {errors.shipping}
        </div>
      )}
      {errors.payment && (
        <div className="checkout__error" role="alert">
          {errors.payment}
        </div>
      )}

      <div className="checkout__content">
        {currentStep === 'shipping' && renderShippingStep()}
        {currentStep === 'payment' && renderPaymentStep()}
        {currentStep === 'review' && renderReviewStep()}
        {currentStep === 'confirmation' && renderConfirmationStep()}
      </div>

      {currentStep !== 'confirmation' && (
        <div className="checkout__actions">
          {!isFirstStep && (
            <Button
              variant="secondary"
              onClick={handlePreviousStep}
              disabled={isLoading}
            >
              Atrás
            </Button>
          )}
          <Button
            variant="primary"
            onClick={handleNextStep}
            disabled={isLoading}
          >
            {isLastStep ? 'Confirmar Pedido' : 'Continuar'}
          </Button>
        </div>
      )}
    </div>
  );
};

// === ARCHIVO: react/components/shared/Button.tsx ===
import React, { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'success'
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

export interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'success'
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  href: string
}

const variantStyles: Record<string, string> = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700',
  secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
  danger: 'bg-red-600 text-white hover:bg-red-700',
  success: 'bg-green-600 text-white hover:bg-green-700',
}

const sizeStyles: Record<string, string> = {
  small: 'px-3 py-1 text-sm',
  medium: 'px-4 py-2 text-base',
  large: 'px-6 py-3 text-lg',
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  isLoading = false,
  leftIcon,
  rightIcon,
  children,
  disabled,
  className = '',
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'
  const variantClass = variantStyles[variant] || variantStyles.primary
  const sizeClass = sizeStyles[size] || sizeStyles.medium
  const widthClass = fullWidth ? 'w-full' : ''
  const disabledClass = disabled || isLoading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'

  const combinedClassName = `${baseClasses} ${variantClass} ${sizeClass} ${widthClass} ${disabledClass} ${className}`

  return (
    <button
      className={combinedClassName}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      aria-disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center gap-2">
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          Cargando...
        </span>
      ) : (
        <>
          {leftIcon && <span className="mr-2">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="ml-2">{rightIcon}</span>}
        </>
      )}
    </button>
  )
}

export const LinkButton: React.FC<LinkButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  isLoading = false,
  leftIcon,
  rightIcon,
  children,
  className = '',
  href,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 text-decoration-none'
  const variantClass = variantStyles[variant] || variantStyles.primary
  const sizeClass = sizeStyles[size] || sizeStyles.medium
  const widthClass = fullWidth ? 'w-full' : ''
  const loadingClass = isLoading ? 'pointer-events-none opacity-50' : ''

  const combinedClassName = `${baseClasses} ${variantClass} ${sizeClass} ${widthClass} ${loadingClass} ${className}`

  return (
    <a
      href={href}
      className={combinedClassName}
      aria-busy={isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center gap-2">
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          Cargando...
        </span>
      ) : (
        <>
          {leftIcon && <span className="mr-2">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="ml-2">{rightIcon}</span>}
        </>
      )}
    </a>
  )
}

export default Button

// === ARCHIVO: react/components/shared/ProductCard.tsx ===
import React, { useState } from 'react'
import { Button } from './Button'

export interface Product {
  productId: string
  productName: string
  brandName: string
  imageUrl: string
  price: number
  listPrice?: number
  currencyCode: string
  availability: 'available' | 'unavailable' | 'low-stock'
  stockQuantity?: number
  slug?: string
}

export interface ProductCardProps {
  product: Product
  onAddToCart?: (productId: string, quantity: number) => void
  onQuickView?: (productId: string) => void
  onAddToWishlist?: (productId: string) => void
  showQuickActions?: boolean
  isLoading?: boolean
}

const formatPrice = (price: number, currencyCode: string): string => {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: currencyCode,
  }).format(price)
}

const calculateDiscount = (listPrice: number, price: number): number => {
  if (!listPrice || listPrice <= price) return 0
  return Math.round(((listPrice - price) / listPrice) * 100)
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onQuickView,
  onAddToWishlist,
  showQuickActions = true,
  isLoading = false,
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const [quantity, setQuantity] = useState(1)

  const {
    productId,
    productName,
    brandName,
    imageUrl,
    price,
    listPrice,
    currencyCode,
    availability,
    stockQuantity,
    slug,
  } = product

  const hasDiscount = listPrice && listPrice > price
  const discountPercentage = calculateDiscount(listPrice || price, price)
  const isAvailable = availability === 'available'
  const isLowStock = availability === 'low-stock'

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (onAddToCart && isAvailable) {
      onAddToCart(productId, quantity)
    }
  }

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (onQuickView) {
      onQuickView(productId)
    }
  }

  const handleAddToWishlist = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (onAddToWishlist) {
      onAddToWishlist(productId)
    }
  }

  const incrementQuantity = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setQuantity((prev) => prev + 1)
  }

  const decrementQuantity = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setQuantity((prev) => Math.max(1, prev - 1))
  }

  const getAvailabilityMessage = (): string => {
    if (!isAvailable) return 'Agotado'
    if (isLowStock && stockQuantity) return `Solo quedan ${stockQuantity} unidades`
    return 'Disponible'
  }

  return (
    <article
      className={`product-card relative flex flex-col bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ${
        isHovered ? 'shadow-xl transform -translate-y-1' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="article"
      aria-label={`Producto: ${productName}`}
    >
      <div className="product-image-container relative aspect-square overflow-hidden bg-gray-100">
        <img
          src={imageUrl}
          alt={`Imagen de ${productName}`}
          className="product-image w-full h-full object-cover transition-transform duration-300"
          style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
          loading="lazy"
        />
        {hasDiscount && (
          <span
            className="discount-badge absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded"
            aria-label={`Descuento del ${discountPercentage}%`}
          >
            -{discountPercentage}%
          </span>
        )}
        {showQuickActions && (
          <div
            className={`quick-actions absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3 transition-opacity duration-200 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="flex justify-center gap-2">
              <button
                onClick={handleQuickView}
                className="quick-action-btn bg-white/90 hover:bg-white text-gray-800 px-3 py-1 rounded text-sm font-medium transition-colors"
                aria-label="Vista rápida"
              >
                Vista rápida
              </button>
              <button
                onClick={handleAddToWishlist}
                className="quick-action-btn bg-white/90 hover:bg-white text-gray-800 px-3 py-1 rounded text-sm font-medium transition-colors"
                aria-label="Añadir a favoritos"
              >
                ♡
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="product-info flex flex-col flex-grow p-4">
        {brandName && (
          <span className="product-brand text-xs text-gray-500 uppercase tracking-wide mb-1">
            {brandName}
          </span>
        )}
        <h3 className="product-name text-base font-semibold text-gray-900 mb-2 line-clamp-2">
          {productName}
        </h3>

        <div className="price-container flex items-baseline gap-2 mb-3">
          <span className="current-price text-xl font-bold text-gray-900">
            {formatPrice(price, currencyCode)}
          </span>
          {hasDiscount && (
            <span className="list-price text-sm text-gray-400 line-through">
              {formatPrice(listPrice!, currencyCode)}
            </span>
          )}
        </div>

        <div
          className={`availability-status text-sm mb-3 ${
            isAvailable ? 'text-green-600' : isLowStock ? 'text-orange-600' : 'text-red-600'
          }`}
        >
          {getAvailabilityMessage()}
        </div>

        {isAvailable && (
          <div className="quantity-selector flex items-center gap-2 mb-3">
            <button
              onClick={decrementQuantity}
              className="quantity-btn w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded transition-colors"
              aria-label="Disminuir cantidad"
              disabled={quantity <= 1}
            >
              -
            </button>
            <span className="quantity-value w-8 text-center font-medium" aria-live="polite">
              {quantity}
            </span>
            <button
              onClick={incrementQuantity}
              className="quantity-btn w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded transition-colors"
              aria-label="Aumentar cantidad"
            >
              +
            </button>
          </div>
        )}

        <Button
          variant={isAvailable ? 'primary' : 'secondary'}
          fullWidth
          onClick={handleAddToCart}
          disabled={!isAvailable || isLoading}
          isLoading={isLoading}
          aria-label={`Añadir ${productName} al carrito`}
        >
          {isAvailable ? 'Añadir al carrito' : 'Agotado'}
        </Button>
      </div>
    </article>
  )
}

export default ProductCard

// === ARCHIVO: react/hooks/useCart.ts ===
import { useState, useEffect, useCallback, useMemo } from 'react'

export interface CartItem {
  itemId: string
  productId: string
  productName: string
  skuId: string
  quantity: number
  price: number
  listPrice?: number
  imageUrl: string
  brand?: string
  category?: string
  seller?: string
  isGift?: boolean
}

export interface Cart {
  cartId: string
  items: CartItem[]
  totalItems: number
  subtotal: number
  discounts: number
  total: number
  currencyCode: string
  updatedAt: Date
}

export interface UseCartReturn {
  cart: Cart | null
  isLoading: boolean
  error: string | null
  addItem: (productId: string, quantity: number, skuId?: string) => Promise<void>
  removeItem: (itemId: string) => Promise<void>
  updateQuantity: (itemId: string, quantity: number) => Promise<void>
  clearCart: () => Promise<void>
  applyCoupon: (couponCode: string) => Promise<boolean>
  removeCoupon: () => Promise<void>
  refreshCart: () => Promise<void>
  isEmpty: boolean
  itemCount: number
  totalValue: number
}

const STORAGE_KEY = 'vtex_cart_data'
const CART_EXPIRY_HOURS = 24

const getStoredCart = (): Cart | null => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) return null

    const parsed = JSON.parse(stored)
    const storedAt = new Date(parsed.storedAt)
    const now = new Date()
    const hoursDiff = (now.getTime() - storedAt.getTime()) / (1000 * 60 * 60)

    if (hoursDiff > CART_EXPIRY_HOURS) {
      localStorage.removeItem(STORAGE_KEY)
      return null
    }

    return parsed.cart
  } catch {
    return null
  }
}

const storeCart = (cart: Cart): void => {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        cart,
        storedAt: new Date().toISOString(),
      })
    )
  } catch (error) {
    console.error('Error storing cart:', error)
  }
}

const calculateCartTotals = (
  items: CartItem[],
  currencyCode: string
): { totalItems: number; subtotal: number; discounts: number; total: number } => {
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = items.reduce((sum, item) => sum + (item.listPrice || item.price) * item.quantity, 0)
  const discounts = items.reduce((sum, item) => {
    const itemDiscount = item.listPrice ? (item.listPrice - item.price) * item.quantity : 0
    return sum + itemDiscount
  }, 0)
  const total = subtotal - discounts

  return { totalItems, subtotal, discounts, total }
}

export const useCart = (): UseCartReturn => {
  const [cart, setCart] = useState<Cart | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const storedCart = getStoredCart()
    if (storedCart) {
      setCart(storedCart)
    } else {
      const initialCart: Cart = {
        cartId: `cart_${Date.now()}`,
        items: [],
        totalItems: 0,
        subtotal: 0,
        discounts: 0,
        total: 0,
        currencyCode: 'EUR',
        updatedAt: new Date(),
      }
      setCart(initialCart)
      storeCart(initialCart)
    }
  }, [])

  const addItem = useCallback(
    async (productId: string, quantity: number, skuId?: string): Promise<void> => {
      if (!cart) return

      setIsLoading(true)
      setError(null)

      try {
        const existingItem = cart.items.find(
          (item) => item.productId === productId && item.skuId === skuId
        )

        let updatedItems: CartItem[]

        if (existingItem) {
          updatedItems = cart.items.map((item) =>
            item.productId === productId && item.skuId === skuId
              ? { ...item, quantity: item.quantity + quantity }
              : item
          )
        } else {
          const newItem: CartItem = {
            itemId: `item_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            productId,
            productName: `Producto ${productId}`,
            skuId: skuId || `sku_${productId}`,
            quantity,
            price: 99.99,
            listPrice: 129.99,
            imageUrl: '/placeholder-product.jpg',
            brand: 'Marca ejemplo',
          }
          updatedItems = [...cart.items, newItem]
        }

        const totals = calculateCartTotals(updatedItems, cart.currencyCode)
        const updatedCart: Cart = {
          ...cart,
          items: updatedItems,
          ...totals,
          updatedAt: new Date(),
        }

        setCart(updatedCart)
        storeCart(updatedCart)
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Error al añadir al carrito'
        setError(errorMessage)
        console.error('Error adding item to cart:', err)
      } finally {
        setIsLoading(false)
      }
    },
    [cart]
  )

  const removeItem = useCallback(
    async (itemId: string): Promise<void> => {
      if (!cart) return

      setIsLoading(true)
      setError(null)

      try {
        const updatedItems = cart.items.filter((item) => item.itemId !== itemId)
        const totals = calculateCartTotals(updatedItems, cart.currencyCode)

        const updatedCart: Cart = {
          ...cart,
          items: updatedItems,
          ...totals,
          updatedAt: new Date(),
        }

        setCart(updatedCart)
        storeCart(updatedCart)
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Error al eliminar del carrito'
        setError(errorMessage)
        console.error('Error removing item from cart:', err)
      } finally {
        setIsLoading(false)
      }
    },
    [cart]
  )

  const updateQuantity = useCallback(
    async (itemId: string, quantity: number): Promise<void> => {
      if (!cart || quantity < 1) return

      setIsLoading(true)
      setError(null)

      try {
        const updatedItems = cart.items.map((item) =>
          item.itemId === itemId ? { ...item, quantity } : item
        )
        const totals = calculateCartTotals(updatedItems, cart.currencyCode)

        const updatedCart: Cart = {
          ...cart,
          items: updatedItems,
          ...totals,
          updatedAt: new Date(),
        }

        setCart(updatedCart)
        storeCart(updatedCart)
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Error al actualizar cantidad'
        setError(errorMessage)
        console.error('Error updating item quantity:', err)
      } finally {
        setIsLoading(false)
      }
    },
    [cart]
  )

  const clearCart = useCallback(async (): Promise<void> => {
    if (!cart) return

    setIsLoading(true)
    setError(null)

    try {
      const emptyCart: Cart = {
        cartId: cart.cartId,
        items: [],
        totalItems: 0,
        subtotal: 0,
        discounts: 0,
        total: 0,
        currencyCode: cart.currencyCode,
        updatedAt: new Date(),
      }

      setCart(emptyCart)
      storeCart(emptyCart)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error al limpiar el carrito'
      setError(errorMessage)
      console.error('Error clearing cart:', err)
    } finally {
      setIsLoading(false)
    }
  }, [cart])

  const applyCoupon = useCallback(
    async (couponCode: string): Promise<boolean> => {
      if (!cart || !couponCode.trim()) return false

      setIsLoading(true)
      setError(null)

      try {
        const validCoupons: Record<string, number> = {
          'DESCUENTO10': 10,
          'BIENVENIDO20': 20,
          'VIP30': 30,
        }

        const discountPercent = validCoupons[couponCode.toUpperCase()]

        if (!discountPercent) {
          setError('Cupón inválido o expirado')
          return false
        }

        const discountAmount = (cart.subtotal * discountPercent) / 100
        const updatedCart: Cart = {
          ...cart,
          discounts: cart.discounts + discountAmount,
          total: cart.subtotal - (cart.discounts + discountAmount),
          updatedAt: new Date(),
        }

        setCart(updatedCart)
        storeCart(updatedCart)
        return true
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Error al aplicar cupón'
        setError(errorMessage)
        console.error('Error applying coupon:', err)
        return false
      } finally {
        setIsLoading(false)
      }
    },
    [cart]
  )

  const removeCoupon = useCallback(async (): Promise<void> => {
    if (!cart) return

    setIsLoading(true)
    setError(null)

    try {
      const updatedCart: Cart = {
        ...cart,
        discounts: 0,
        total: cart.subtotal,
        updatedAt: new Date(),
      }

      setCart(updatedCart)
      storeCart(updatedCart)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error al eliminar cupón'
      setError(errorMessage)
      console.error('Error removing coupon:', err)
    } finally {
      setIsLoading(false)
    }
  }, [cart])

  const refreshCart = useCallback(async (): Promise<void> => {
    setIsLoading(true)
    setError(null)

    try {
      const storedCart = getStoredCart()
      if (storedCart) {
        setCart(storedCart)
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error al actualizar el carrito'
      setError(errorMessage)
      console.error('Error refreshing cart:', err)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const isEmpty = useMemo(() => !cart || cart.items.length === 0, [cart])
  const itemCount = useMemo(() => cart?.totalItems || 0, [cart])
  const totalValue = useMemo(() => cart?.total || 0, [cart])

  return {
    cart,
    isLoading,
    error,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    applyCoupon,
    removeCoupon,
    refreshCart,
    isEmpty,
    itemCount,
    totalValue,
  }
}

export default useCart

// === ARCHIVO: react/hooks/useProduct.ts ===
import { useState, useEffect, useCallback } from 'react';
import type { Product } from '@vtex/api';

interface UseProductOptions {
  productId?: string;
  slug?: string;
  initialData?: Product | null;
}

interface UseProductReturn {
  product: Product | null;
  loading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}

/**
 * Hook personalizado para gestionar la lógica de productos.
 * Aplica principios KISS y YAGNI: simplicidad en la implementación
 * y solo las funcionalidades necesarias para el caso de uso.
 */
export const useProduct = (options: UseProductOptions = {}): UseProductReturn => {
  const { productId, slug, initialData = null } = options;
  
  const [product, setProduct] = useState<Product | null>(initialData);
  const [loading, setLoading] = useState<boolean>(!initialData);
  const [error, setError] = useState<Error | null>(null);

  const fetchProduct = useCallback(async () => {
    if (!productId && !slug) {
      setError(new Error('Se requiere productId o slug para obtener el producto'));
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const productService = await import('../services/productService');
      const fetchedProduct = productId
        ? await productService.getProductById(productId)
        : await productService.getProductBySlug(slug!);
      
      setProduct(fetchedProduct);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error al cargar el producto';
      setError(new Error(errorMessage));
    } finally {
      setLoading(false);
    }
  }, [productId, slug]);

  useEffect(() => {
    if (!initialData) {
      fetchProduct();
    }
  }, [fetchProduct, initialData]);

  const refetch = useCallback(async () => {
    await fetchProduct();
  }, [fetchProduct]);

  return {
    product,
    loading,
    error,
    refetch,
  };
};

/**
 * Hook para obtener productos por categoría.
 * Separa la lógica de negocio en un hook específico para mantener
 * el principio de única responsabilidad (SRP de SOLID).
 */
export const useProductsByCategory = (categoryId: string): UseProductReturn => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const productService = await import('../services/productService');
        const fetchedProducts = await productService.getProductsByCategory(categoryId);
        setProducts(fetchedProducts);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Error al cargar productos';
        setError(new Error(errorMessage));
      } finally {
        setLoading(false);
      }
    };

    if (categoryId) {
      fetchProducts();
    }
  }, [categoryId]);

  return {
    product: products[0] || null,
    loading,
    error,
    refetch: () => {
      setLoading(true);
      return import('../services/productService')
        .then(service => service.getProductsByCategory(categoryId))
        .then(data => {
          setProducts(data);
          setLoading(false);
        })
        .catch(err => {
          setError(err instanceof Error ? err : new Error('Error'));
          setLoading(false);
        }) as Promise<void>;
    },
  };
};

// === ARCHIVO: react/services/cartService.ts ===
import type { CheckoutSession } from '@vtex/api';

export interface CartItem {
  id: string;
  quantity: number;
  price: number;
  name: string;
  imageUrl?: string;
  skuId: string;
}

export interface Cart {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  orderFormId?: string;
}

interface AddToCartParams {
  skuId: string;
  quantity: number;
  salesChannel?: string;
}

interface UpdateCartItemParams {
  itemIndex: number;
  quantity: number;
}

/**
 * Interfaz del servicio de carrito.
 * Aplicamos el principio de Dependency Inversion (D de SOLID):
 * dependemos de abstracciones (interfaz) y no de implementaciones concretas.
 * Esto permite cambiar la implementación sin afectar los consumidores del servicio.
 */
export interface ICartService {
  getCart(): Promise<Cart>;
  addItem(params: AddToCartParams): Promise<Cart>;
  updateItem(params: UpdateCartItemParams): Promise<Cart>;
  removeItem(itemIndex: number): Promise<Cart>;
  clearCart(): Promise<void>;
}

/**
 * Implementación del servicio de carrito.
 * Sigue el principio de Responsabilidad Única (S de SOLID):
 * esta clase solo se encarga de la interacción con la API del carrito.
 */
export class CartService implements ICartService {
  private readonly baseUrl: string;
  private readonly headers: Headers;

  constructor() {
    this.baseUrl = '/api/checkout/pub/orderforms';
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    });
  }

  private async fetchWithAuth<T>(url: string, options?: RequestInit): Promise<T> {
    const response = await fetch(url, {
      ...options,
      headers: {
        ...this.headers,
        ...options?.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }

  private transformToCart(orderForm: any): Cart {
    const items = (orderForm.items || []).map((item: any, index: number) => ({
      id: item.id || `item-${index}`,
      quantity: item.quantity,
      price: item.price / 100,
      name: item.name,
      imageUrl: item.imageUrl,
      skuId: item.skuId,
    }));

    const totalItems = items.reduce((sum: number, item: CartItem) => sum + item.quantity, 0);
    const totalPrice = items.reduce((sum: number, item: CartItem) => sum + (item.price * item.quantity), 0);

    return {
      items,
      totalItems,
      totalPrice,
      orderFormId: orderForm.orderFormId,
    };
  }

  async getCart(): Promise<Cart> {
    const orderFormId = this.getOrderFormId();
    const url = orderFormId 
      ? `${this.baseUrl}/${orderFormId}`
      : `${this.baseUrl}`;
    
    const orderForm = await this.fetchWithAuth<any>(url);
    return this.transformToCart(orderForm);
  }

  async addItem(params: AddToCartParams): Promise<Cart> {
    const orderFormId = this.getOrderFormId();
    const { skuId, quantity, salesChannel = '1' } = params;

    const body = {
      orderItems: [{
        id: parseInt(skuId, 10),
        quantity,
        salesChannel,
      }],
    };

    const url = orderFormId
      ? `${this.baseUrl}/${orderFormId}/items`
      : `${this.baseUrl}/items`;

    const orderForm = await this.fetchWithAuth<any>(url, {
      method: 'POST',
      body: JSON.stringify(body),
    });

    return this.transformToCart(orderForm);
  }

  async updateItem(params: UpdateCartItemParams): Promise<Cart> {
    const orderFormId = this.getOrderFormId();
    if (!orderFormId) {
      throw new Error('No hay orden activa para actualizar');
    }

    const { itemIndex, quantity } = params;
    const url = `${this.baseUrl}/${orderFormId}/items/${itemIndex}`;

    const orderForm = await this.fetchWithAuth<any>(url, {
      method: 'PATCH',
      body: JSON.stringify({ quantity }),
    });

    return this.transformToCart(orderForm);
  }

  async removeItem(itemIndex: number): Promise<Cart> {
    const orderFormId = this.getOrderFormId();
    if (!orderFormId) {
      throw new Error('No hay orden activa para eliminar items');
    }

    const url = `${this.baseUrl}/${orderFormId}/items/${itemIndex}`;
    const orderForm = await this.fetchWithAuth<any>(url, {
      method: 'DELETE',
    });

    return this.transformToCart(orderForm);
  }

  async clearCart(): Promise<void> {
    const orderFormId = this.getOrderFormId();
    if (!orderFormId) {
      return;
    }

    const url = `${this.baseUrl}/${orderFormId}/items`;
    await this.fetchWithAuth(url, {
      method: 'DELETE',
    });
  }

  private getOrderFormId(): string | null {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem('orderFormId');
  }
}

/**
 * Instancia singleton del servicio.
 * Aplicamos el principio de Inyección de Dependencias para facilitar
 * el testing y cumplir con el principio de Inversión de Dependencias.
 */
export const cartService = new CartService();

// === ARCHIVO: react/services/productService.ts ===
import type { Product, SKU } from '@vtex/api';

export interface ProductSummary {
  productId: string;
  productName: string;
  description: string;
  price: number;
  imageUrl: string;
  skuId: string;
  brand: string;
  categoryId: string;
}

interface ProductSearchParams {
  query?: string;
  category?: string;
  brand?: string;
  priceRange?: { min: number; max: number };
  page?: number;
  pageSize?: number;
  sortBy?: 'price' | 'name' | 'relevance';
  sortOrder?: 'asc' | 'desc';
}

interface ProductSearchResponse {
  products: ProductSummary[];
  totalResults: number;
  page: number;
  pageSize: number;
}

/**
 * Interfaz del servicio de productos.
 * Define el contrato que debe implementar cualquier proveedor de productos.
 * Cumple con el principio de Segregación de Interfaces (I de SOLID):
 * los consumidores solo dependen de los métodos que utilizan.
 */
export interface IProductService {
  getProductById(productId: string): Promise<Product | null>;
  getProductBySlug(slug: string): Promise<Product | null>;
  searchProducts(params: ProductSearchParams): Promise<ProductSearchResponse>;
  getProductsByCategory(categoryId: string): Promise<Product[]>;
  getProductRecommendations(productId: string): Promise<ProductSummary[]>;
}

/**
 * Implementación del servicio de productos.
 * Aplicamos el principio de Responsabilidad Única (S de SOLID):
 * esta clase solo maneja la lógica de acceso a datos de productos.
 * 
 * El patrón de diseño Strategy se aplica implícitamente: la interfaz
 * IProductService define el contrato, permitiendo diferentes implementaciones.
 */
export class ProductService implements IProductService {
  private readonly baseUrl: string;
  private readonly headers: Headers;
  private readonly defaultPageSize = 12;

  constructor() {
    this.baseUrl = '/api/catalog_system/pub/products';
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    });
  }

  private async fetchWithAuth<T>(url: string, options?: RequestInit): Promise<T> {
    const response = await fetch(url, {
      ...options,
      headers: {
        ...this.headers,
        ...options?.headers,
      },
    });

    if (!response.ok) {
      const errorMessage = `Error en la solicitud: ${response.status} ${response.statusText}`;
      throw new Error(errorMessage);
    }

    return response.json();
  }

  private transformToProductSummary(product: any): ProductSummary {
    const firstSku = product.items?.[0] || {};
    return {
      productId: product.productId,
      productName: product.productName,
      description: product.description,
      price: firstSku.sellers?.[0]?.commertialOffer?.Price || 0,
      imageUrl: firstSku.images?.[0]?.imageUrl || '',
      skuId: firstSku.itemId || '',
      brand: product.brand || '',
      categoryId: product.categoryId || '',
    };
  }

  async getProductById(productId: string): Promise<Product | null> {
    if (!productId) {
      throw new Error('El ID del producto es requerido');
    }

    const url = `${this.baseUrl}/p/${productId}`;
    
    try {
      const product = await this.fetchWithAuth<Product>(url);
      return product;
    } catch (error) {
      console.error(`Error al obtener producto ${productId}:`, error);
      return null;
    }
  }

  async getProductBySlug(slug: string): Promise<Product | null> {
    if (!slug) {
      throw new Error('El slug del producto es requerido');
    }

    const url = `${this.baseUrl}/p/${slug}/p`;
    
    try {
      const product = await this.fetchWithAuth<Product>(url);
      return product;
    } catch (error) {
      console.error(`Error al obtener producto con slug ${slug}:`, error);
      return null;
    }
  }

  async searchProducts(params: ProductSearchParams): Promise<ProductSearchResponse> {
    const {
      query,
      category,
      priceRange,
      page = 1,
      pageSize = this.defaultPageSize,
      sortBy = 'relevance',
      sortOrder = 'desc',
    } = params;

    const searchParams = new URLSearchParams();
    
    if (query) searchParams.append('ft', query);
    if (category) searchParams.append('categoryId', category);
    if (priceRange) {
      searchParams.append('priceRange', `${priceRange.min}-${priceRange.max}`);
    }
    searchParams.append('page', page.toString());
    searchParams.append('pageSize', pageSize.toString());
    searchParams.append('sortBy', sortBy);
    searchParams.append('sortOrder', sortOrder);

    const url = `${this.baseUrl}/search?${searchParams.toString()}`;
    const response = await this.fetchWithAuth<any>(url);

    const products = (response.products || []).map((p: any) => this.transformToProductSummary(p));

    return {
      products,
      totalResults: response.totalResults || 0,
      page: response.page || page,
      pageSize: response.pageSize || pageSize,
    };
  }

  async getProductsByCategory(categoryId: string): Promise<Product[]> {
    if (!categoryId) {
      throw new Error('El ID de categoría es requerido');
    }

    const url = `${this.baseUrl}/category/${categoryId}`;
    
    try {
      const products = await this.fetchWithAuth<Product[]>(url);
      return products;
    } catch (error) {
      console.error(`Error al obtener productos de categoría ${categoryId}:`, error);
      return [];
    }
  }

  async getProductRecommendations(productId: string): Promise<ProductSummary[]> {
    if (!productId) {
      throw new Error('El ID del producto es requerido');
    }

    const url = `${this.baseUrl}/p/${productId}/recommendations`;
    
    try {
      const recommendations = await this.fetchWithAuth<any[]>(url);
      return recommendations.map((r: any) => this.transformToProductSummary(r));
    } catch (error) {
      console.error(`Error al obtener recomendaciones para ${productId}:`, error);
      return [];
    }
  }
}

/**
 * Instancia singleton del servicio.
 * Facilita la inyección de dependencias y permite mocking en tests.
 */
export const productService = new ProductService();

// === ARCHIVO: react/utils/formatter.ts ===
import { path, defaultTo } from 'ramda';

export interface PriceFormatOptions {
  currency: string;
  locale: string;
  decimals?: number;
}

export interface DateFormatOptions {
  locale: string;
  format?: 'short' | 'long' | 'numeric';
}

export interface TruncateOptions {
  maxLength: number;
  suffix?: string;
}

const DEFAULT_PRICE_OPTIONS: PriceFormatOptions = {
  currency: 'USD',
  locale: 'en-US',
  decimals: 2,
};

const DEFAULT_DATE_OPTIONS: DateFormatOptions = {
  locale: 'en-US',
  format: 'short',
};

export const formatPrice = (
  value: number | string | null | undefined,
  options: Partial<PriceFormatOptions> = {}
): string => {
  const numericValue = typeof value === 'string' ? parseFloat(value) : Number(value);
  
  if (Number.isNaN(numericValue)) {
    return '$0.00';
  }
  
  const mergedOptions = { ...DEFAULT_PRICE_OPTIONS, ...options };
  
  return new Intl.NumberFormat(mergedOptions.locale, {
    style: 'currency',
    currency: mergedOptions.currency,
    minimumFractionDigits: mergedOptions.decimals,
    maximumFractionDigits: mergedOptions.decimals,
  }).format(numericValue);
};

export const formatDate = (
  date: Date | string | number | null | undefined,
  options: Partial<DateFormatOptions> = {}
): string => {
  if (!date) {
    return '';
  }
  
  const dateObject = typeof date === 'string' || typeof date === 'number' 
    ? new Date(date) 
    : date;
  
  if (Number.isNaN(dateObject.getTime())) {
    return '';
  }
  
  const mergedOptions = { ...DEFAULT_DATE_OPTIONS, ...options };
  const formatOptions: Intl.DateTimeFormatOptions = {};
  
  switch (mergedOptions.format) {
    case 'long':
      formatOptions.year = 'numeric';
      formatOptions.month = 'long';
      formatOptions.day = 'numeric';
      break;
    case 'numeric':
      formatOptions.year = 'numeric';
      formatOptions.month = '2-digit';
      formatOptions.day = '2-digit';
      break;
    default:
      formatOptions.year = 'numeric';
      formatOptions.month = '2-digit';
      formatOptions.day = '2-digit';
  }
  
  return new Intl.DateTimeFormat(mergedOptions.locale, formatOptions).format(dateObject);
};

export const truncateText = (
  text: string | null | undefined,
  options: TruncateOptions
): string => {
  if (!text) {
    return '';
  }
  
  const { maxLength, suffix = '...' } = options;
  
  if (text.length <= maxLength) {
    return text;
  }
  
  const truncatedLength = maxLength - suffix.length;
  return text.substring(0, truncatedLength).trim() + suffix;
};

export const capitalize = (text: string | null | undefined): string => {
  if (!text) {
    return '';
  }
  
  return text
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export const formatPercentage = (
  value: number | string | null | undefined,
  decimals: number = 1
): string => {
  const numericValue = typeof value === 'string' ? parseFloat(value) : Number(value);
  
  if (Number.isNaN(numericValue)) {
    return '0%';
  }
  
  return `${numericValue.toFixed(decimals)}%`;
};

export const formatQuantity = (quantity: number | string | null | undefined): string => {
  const numericValue = typeof quantity === 'string' ? parseInt(quantity, 10) : Number(quantity);
  
  if (Number.isNaN(numericValue) || numericValue <= 0) {
    return '0';
  }
  
  return numericValue.toLocaleString();
};

export const formatPhoneNumber = (phone: string | null | undefined): string => {
  if (!phone) {
    return '';
  }
  
  const cleaned = phone.replace(/\D/g, '');
  
  if (cleaned.length === 10) {
    return `(${cleaned.substring(0, 3)}) ${cleaned.substring(3, 6)}-${cleaned.substring(6)}`;
  }
  
  if (cleaned.length === 11) {
    return `+${cleaned.charAt(0)} (${cleaned.substring(1, 4)}) ${cleaned.substring(4, 7)}-${cleaned.substring(7)}`;
  }
  
  return phone;
};

export const formatSku = (sku: string | null | undefined): string => {
  if (!sku) {
    return '';
  }
  
  return sku.toUpperCase().replace(/[^A-Z0-9]/g, '-');
};

export const formatWeight = (weight: number | string | null | undefined, unit: string = 'kg'): string => {
  const numericValue = typeof weight === 'string' ? parseFloat(weight) : Number(weight);
  
  if (Number.isNaN(numericValue)) {
    return `0 ${unit}`;
  }
  
  return `${numericValue.toFixed(2)} ${unit}`;
};

export const parseHtmlEntities = (text: string | null | undefined): string => {
  if (!text) {
    return '';
  }
  
  const entities: Record<string, string> = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'",
    '&nbsp;': ' ',
  };
  
  return text.replace(/&[^;]+;/g, match => entities[match] || match);
};

export const slugify = (text: string | null | undefined): string => {
  if (!text) {
    return '';
  }
  
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};

export const formatInstallments = (
  totalPrice: number,
  installmentCount: number
): string => {
  if (installmentCount <= 0) {
    return formatPrice(totalPrice);
  }
  
  const installmentPrice = totalPrice / installmentCount;
  return `${installmentCount}x de ${formatPrice(installmentPrice)}`;
};

export const formatDiscount = (
  originalPrice: number | string,
  discountedPrice: number | string
): string => {
  const original = typeof originalPrice === 'string' ? parseFloat(originalPrice) : originalPrice;
  const discounted = typeof discountedPrice === 'string' ? parseFloat(discountedPrice) : discountedPrice;
  
  if (original <= 0 || discounted >= original) {
    return '0%';
  }
  
  const discountPercentage = ((original - discounted) / original) * 100;
  return `${discountPercentage.toFixed(0)}% OFF`;
};

export const formatShippingEstimate = (days: number | string | null | undefined): string => {
  const numericDays = typeof days === 'string' ? parseInt(days, 10) : Number(days);
  
  if (Number.isNaN(numericDays) || numericDays <= 0) {
    return 'Envío inmediato';
  }
  
  if (numericDays === 1) {
    return '1 día útil';
  }
  
  return `${numericDays} días úteis`;
};

export const formatStockStatus = (
  quantity: number | string | null | undefined,
  lowStockThreshold: number = 5
): { text: string; isLowStock: boolean; isAvailable: boolean } => {
  const numericQuantity = typeof quantity === 'string' ? parseInt(quantity, 10) : Number(quantity);
  
  if (Number.isNaN(numericQuantity) || numericQuantity <= 0) {
    return { text: 'Agotado', isLowStock: false, isAvailable: false };
  }
  
  const isLowStock = numericQuantity <= lowStockThreshold;
  
  return {
    text: isLowStock ? `¡Últimas ${numericQuantity} unidades!` : 'Disponible',
    isLowStock,
    isAvailable: true,
  };
};

export const formatBreadcrumb = (categories: string[]): string => {
  if (!categories || categories.length === 0) {
    return '';
  }
  
  return categories.join(' > ');
};

export const formatReviewRating = (rating: number | string | null | undefined): string => {
  const numericRating = typeof rating === 'string' ? parseFloat(rating) : Number(rating);
  
  if (Number.isNaN(numericRating)) {
    return '0.0';
  }
  
  return numericRating.toFixed(1);
};

export const formatOrderNumber = (orderId: string | null | undefined): string => {
  if (!orderId) {
    return '';
  }
  
  const cleaned = orderId.replace(/[^0-9]/g, '');
  const padded = cleaned.padStart(8, '0');
  return `#${padded}`;
};

export const sanitizeInput = (input: string | null | undefined): string => {
  if (!input) {
    return '';
  }
  
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<[^>]*>/g, '')
    .trim();
};

// === ARCHIVO: styles/configs/product.css ===
/*
 * Estilos para componentes de producto
 * Utiliza CSS Handles para modularidad y evitar conflictos de estilos
 */

/* Contenedor principal del producto */
.productContainer {
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  transition: box-shadow 0.3s ease, transform 0.2s ease;
  height: 100%;
}

.productContainer:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  transform: translateY(-4px);
}

/* Imagen del producto */
.productImageContainer {
  position: relative;
  width: 100%;
  padding-top: 100%;
  overflow: hidden;
  background-color: #f5f5f5;
}

.productImage {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.productImageContainer:hover .productImage {
  transform: scale(1.05);
}

/* Badge de descuento */
.productDiscountBadge {
  position: absolute;
  top: 12px;
  left: 12px;
  background-color: #ff4d4d;
  color: #ffffff;
  font-size: 12px;
  font-weight: 700;
  padding: 4px 8px;
  border-radius: 4px;
  z-index: 1;
}

/* Badge de disponibilidad */
.productAvailabilityBadge {
  position: absolute;
  bottom: 12px;
  right: 12px;
  font-size: 11px;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 4px;
  z-index: 1;
}

.productAvailabilityBadge--inStock {
  background-color: #4caf50;
  color: #ffffff;
}

.productAvailabilityBadge--lowStock {
  background-color: #ff9800;
  color: #ffffff;
}

.productAvailabilityBadge--outOfStock {
  background-color: #f44336;
  color: #ffffff;
}

/* Información del producto */
.productInfo {
  padding: 16px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

/* Nombre del producto */
.productName {
  font-size: 16px;
  font-weight: 600;
  color: #333333;
  margin: 0 0 8px;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.productName:hover {
  color: #007acc;
}

/* Marca del producto */
.productBrand {
  font-size: 12px;
  color: #888888;
  margin: 0 0 4px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Categoría del producto */
.productCategory {
  font-size: 11px;
  color: #999999;
  margin: 0 0 12px;
}

/* Sección de precios */
.productPriceContainer {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

/* Precio anterior */
.productListPrice {
  font-size: 12px;
  color: #999999;
  text-decoration: line-through;
}

/* Precio actual */
.productPrice {
  font-size: 20px;
  font-weight: 700;
  color: #333333;
}

/* Precio con descuento */
.productPrice--hasDiscount {
  color: #ff4d4d;
}

/* Precio por unidad */
.productUnitPrice {
  font-size: 11px;
  color: #666666;
}

/* Instalments */
.productInstallments {
  font-size: 12px;
  color: #4caf50;
  font-weight: 500;
}

/* Botón de agregar al carrito */
.productAddToCartButton {
  width: 100%;
  padding: 12px 16px;
  margin-top: 12px;
  background-color: #007acc;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.1s ease;
}

.productAddToCartButton:hover {
  background-color: #005fa3;
}

.productAddToCartButton:active {
  transform: scale(0.98);
}

.productAddToCartButton:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

/* Botón de comprar ahora */
.productBuyNowButton {
  width: 100%;
  padding: 12px 16px;
  margin-top: 8px;
  background-color: #ff6b00;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.productBuyNowButton:hover {
  background-color: #e66000;
}

/* Acciones del producto (wishlist, compare, share) */
.productActions {
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid #eeeeee;
}

.productActionButton {
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  color: #666666;
  transition: color 0.2s ease;
}

.productActionButton:hover {
  color: #007acc;
}

/* Selector de cantidad */
.productQuantitySelector {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
}

.productQuantityButton {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  border: 1px solid #dddddd;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.productQuantityButton:hover {
  background-color: #eeeeee;
}

.productQuantityInput {
  width: 48px;
  height: 32px;
  text-align: center;
  border: 1px solid #dddddd;
  border-radius: 4px;
  font-size: 14px;
}

/* Variaciones del producto */
.productVariations {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
}

.productVariation {
  padding: 4px 8px;
  border: 1px solid #dddddd;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.productVariation--selected {
  border-color: #007acc;
  background-color: #e6f3ff;
}

.productVariation:hover:not(.productVariation--selected) {
  border-color: #999999;
}

/* Descripción del producto */
.productDescription {
  font-size: 14px;
  color: #666666;
  line-height: 1.6;
  margin-top: 8px;
}

/* Especificaciones */
.productSpecifications {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #eeeeee;
}

.productSpecificationTitle {
  font-size: 14px;
  font-weight: 600;
  color: #333333;
  margin: 0 0 8px;
}

.productSpecificationList {
  list-style: none;
  padding: 0;
  margin: 0;
}

.productSpecificationItem {
  display: flex;
  justify-content: space-between;
  padding: 4px 0;
  font-size: 12px;
}

.productSpecificationLabel {
  color: #888888;
}

.productSpecificationValue {
  color: #333333;
  font-weight: 500;
}

/* Responsive: Tablet */
@media (max-width: 768px) {
  .productContainer {
    border-radius: 6px;
  }
  
  .productInfo {
    padding: 12px;
  }
  
  .productName {
    font-size: 14px;
  }
  
  .productPrice {
    font-size: 18px;
  }
  
  .productAddToCartButton,
  .productBuyNowButton {
    padding: 10px 12px;
    font-size: 13px;
  }
}

/* Responsive: Mobile */
@media (max-width: 480px) {
  .productContainer {
    border-radius: 4px;
  }
  
  .productInfo {
    padding: 10px;
  }
  
  .productName {
    font-size: 13px;
  }
  
  .productPrice {
    font-size: 16px;
  }
  
  .productDiscountBadge {
    top: 8px;
    left: 8px;
    font-size: 10px;
  }
  
  .productActions {
    display: none;
  }
}

/* Accesibilidad: focus visible */
.productContainer:focus-within {
  outline: 2px solid #007acc;
  outline-offset: 2px;
}

.productAddToCartButton:focus,
.productBuyNowButton:focus {
  outline: 2px solid #005fa3;
  outline-offset: 2px;
}

/* Loading state */
.productContainer--loading {
  pointer-events: none;
}

.productContainer--loading .productImage {
  opacity: 0.5;
}

/* Skeleton loading */
.productSkeleton {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

// === ARCHIVO: styles/configs/cart.css ===
/*
 * Estilos para componentes del carrito
 * Aplicando principios de diseño responsivo y CSS Handles
 */

/* Contenedor principal del carrito */
.cartContainer {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f9f9f9;
}

/* Header del carrito */
.cartHeader {
  background-color: #ffffff;
  padding: 20px 24px;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.cartTitle {
  font-size: 24px;
  font-weight: 700;
  color: #333333;
  margin: 0;
}

.cartItemCount {
  font-size: 14px;
  color: #666666;
  margin-left: 12px;
  font-weight: 400;
}

/* Contenido principal del carrito */
.cartContent {
  display: flex;
  flex: 1;
  padding: 24px;
  gap: 24px;
}

/* Lista de productos en el carrito */
.cartItems {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* Item individual del carrito */
.cartItem {
  display: flex;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: box-shadow 0.2s ease;
}

.cartItem:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
}

/* Imagen del producto en el carrito */
.cartItemImageContainer {
  width: 120px;
  min-width: 120px;
  height: 120px;
  background-color: #f5f5f5;
  position: relative;
}

.cartItemImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Información del producto en el carrito */
.cartItemInfo {
  flex: 1;
  padding: 16px;
  display: flex;
  flex-direction: column;
}

.cartItemName {
  font-size: 16px;
  font-weight: 600;
  color: #333333;
  margin: 0 0 4px;
  line-height: 1.3;
}

.cartItemSku {
  font-size: 12px;
  color: #888888;
  margin: 0 0 8px;
}

.cartItemVariation {
  font-size: 12px;
  color: #666666;
  margin-bottom: 8px;
}

/* Precio del item */
.cartItemPriceContainer {
  margin-top: auto;
  display: flex;
  align-items: baseline;
  gap: 8px;
}

.cartItemPrice {
  font-size: 18px;
  font-weight: 700;
  color: #333333;
}

.cartItemListPrice {
  font-size: 14px;
  color: #999999;
  text-decoration: line-through;
}

/* Cantidad del item */
.cartItemQuantity {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
}

.cartItemQuantityLabel {
  font-size: 12px;
  color: #666666;
}

.cartItemQuantityValue {
  display: flex;
  align-items: center;
  border: 1px solid #dddddd;
  border-radius: 4px;
}

.cartItemQuantityButton {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  color: #666666;
  transition: background-color 0.2s ease;
}

.cartItemQuantityButton:hover {
  background-color: #f5f5f5;
}

.cartItemQuantityInput {
  width: 40px;
  height: 28px;
  text-align: center;
  border: none;
  border-left: 1px solid #dddddd;
  border-right: 1px solid #dddddd;
  font-size: 14px;
}

/* Acciones del item (remover, guardar) */
.cartItemActions {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 12px;
  gap: 8px;
}

.cartItemRemoveButton {
  background: none;
  border: none;
  cursor: pointer;
  color: #f44336;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: color 0.2s ease;
}

.cartItemRemoveButton:hover {
  color: #d32f2f;
}

.cartItemSaveForLaterButton {
  background: none;
  border: none;
  cursor: pointer;
  color: #666666;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: color 0.2s ease;
}

.cartItemSaveForLaterButton:hover {
  color: #007acc;
}

/* Resumen del carrito (sidebar) */
.cartSummary {
  width: 360px;
  min-width: 360px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  padding: 24px;
  height: fit-content;
  position: sticky;
  top: 24px;
}

.cartSummaryTitle {
  font-size: 18px;
  font-weight: 700;
  color: #333333;
  margin: 0 0 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid #e0e0e0;
}

/* Detalles del resumen */
.cartSummaryRow {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  font-size: 14px;
}

.cartSummaryLabel {
  color: #666666;
}

.cartSummaryValue {
  font-weight: 500;
  color: #333333;
}

.cartSummaryValue--discount {
  color: #4caf50;
}

.cartSummaryDivider {
  height: 1px;
  background-color: #e0e0e0;
  margin: 12px 0;
}

.cartSummaryTotal {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  font-size: 18px;
  font-weight: 700;
}

.cartSummaryTotalLabel {
  color: #333333;
}

.cartSummaryTotalValue {
  color: #333333;
  font-size: 24px;
}

/* Botón de checkout */
.cartCheckoutButton {
  width: 100%;
  padding: 16px 24px;
  background-color: #007acc;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.1s ease;
  margin-top: 16px;
}

.cartCheckoutButton:hover {
  background-color: #005fa3;
}

.cartCheckoutButton:active {
  transform: scale(0.98);
}

/* Método de envío */
.cartShipping {
  margin-top: 20px;
  padding-top: 16px;
  border-top: 1px solid #e0e0e0;
}

.cartShippingTitle {
  font-size: 14px;
  font-weight: 600;
  color: #333333;
  margin: 0 0 12px;
}

.cartShippingInput {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #dddddd;
  border-radius: 4px;
  font-size: 14px;
  margin-bottom: 8px;
}

.cartShippingInput:focus {
  outline: none;
  border-color: #007acc;
}

.cartShippingButton {
  width: 100%;
  padding: 10px;
  background-color: #f5f5f5;
  border: 1px solid #dddddd;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.cartShippingButton:hover {
  background-color: #eeeeee;
}

/* Cupón de descuento */
.cartCoupon {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #e0e0e0;
}

.cartCouponTitle {
  font-size: 14px;
  font-weight: 600;
  color: #333333;
  margin: 0 0 12px;
}

.cartCouponForm {
  display: flex;
  gap: 8px;
}

.cartCouponInput {
  flex: 1;
  padding: 10px 12px;
  border: 1px solid #dddddd;
  border-radius: 4px;
  font-size: 14px;
}

.cartCouponInput:focus {
  outline: none;
  border-color: #007acc;
}

.cartCouponButton {
  padding: 10px 16px;
  background-color: #333333;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.cartCouponButton:hover {
  background-color: #555555;
}

/* Carrito vacío */
.cartEmpty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 24px;
  text-align: center;
}

.cartEmptyIcon {
  font-size: 64px;
  color: #cccccc;
  margin-bottom: 16px;
}

.cartEmptyTitle {
  font-size: 20px;
  font-weight: 600;
  color: #333333;
  margin: 0 0 8px;
}

.cartEmptyMessage {
  font-size: 14px;
  color: #666666;
  margin: 0 0 24px;
}

.cartEmptyButton {
  padding: 12px 32px;
  background-color: #007acc;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.cartEmptyButton:hover {
  background-color: #005fa3;
}

/* Loading state */
.cartLoading {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px;
}

.cartLoadingSpinner {
  width: 40px;
  height: 40px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #007acc;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Responsive: Tablet */
@media (max-width: 1024px) {
  .cartContent {
    flex-direction: column;
  }
  
  .cartSummary {
    width: 100%;
    min-width: auto;
    position: static;
  }
}

/* Responsive: Mobile */
@media (max-width: 768px) {
  .cartHeader {
    padding: 16px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
  
  .cartTitle {
    font-size: 20px;
  }
  
  .cartContent {
    padding: 16px;
  }
  
  .cartItem {
    flex-direction: column;
  }
  
  .cartItemImageContainer {
    width: 100%;
    height: 160px;
  }
  
  .cartItemActions {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 16px 16px;
  }
  
  .cartSummary {
    padding: 16px;
  }
  
  .cartCheckoutButton {
    padding: 14px 20px;
  }
}

/* Accesibilidad */
.cartItem:focus-within,
.cartSummary:focus-within {
  outline: 2px solid #007acc;
  outline-offset: 2px;
}

.cartCheckoutButton:focus,
.cartEmptyButton:focus {
  outline: 2px solid #005fa3;
  outline-offset: 2px;
}

/* Animaciones */
.cartItem {
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.cartItem--removing {
  animation: fadeOut 0.3s ease forwards;
}

@keyframes fadeOut {
  to {
    opacity: 0;
    transform: translateX(-20px);
  }
}

// === ARCHIVO: README.md ===
# VTEX IO Store Framework - Proyecto eCommerce

## Descripción del Proyecto

Este proyecto es una implementación de tienda eCommerce utilizando VTEX IO Store Framework. El código ha sido estructurado siguiendo patrones de diseño frontend modernos y principios de código limpio para maximizar la mantenibilidad y escalabilidad del sistema.

## Arquitectura del Proyecto

El proyecto sigue una arquitectura modular con separación clara de responsabilidades:

```
├── manifest.json          # Configuración de la app VTEX
├── store/
│   ├── interfaces.json   # Contratos de Bloch
│   └── blocks/           # Composición de bloques
├── react/
│   ├── components/       # Componentes React
│   │   ├── shared/       # Componentes reutilizables
│   │   ├── ProductSummary.tsx
│   │   ├── Cart.tsx
│   │   └── Checkout.tsx
│   ├── hooks/            # Custom hooks
│   ├── services/         # Servicios compartidos
│   └── utils/            # Utilidades
└── styles/
    └── configs/          # Estilos CSS Handles
```

### Patrones Aplicados

- **Contenedor/Presentacional**: Los componentes se dividen en containers (lógica de negocio) y presentationals (renderizado)
- **Custom Hooks**: Lógica reutilizable encapsulada en hooks personalizados
- **Servicios Compartidos**: APIs externas encapsuladas en servicios con principios SOLID
- **CSS Handles**: Estilos modulares y mantenibles mediante handles

## Setup y Configuración

### Prerrequisitos

- Node.js 18.x o superior
- npm 9.x o superior
- VTEX CLI instalada globalmente (`npm install -g vtex`)

### Instalación

```bash
# Instalar dependencias del proyecto
npm install

# Verificar tipos TypeScript
npx tsc --noEmit
```

### Desarrollo Local

```bash
# Enlazar con cuenta VTEX de desarrollo
vtex link

# Para trabajar con múltiples cuentas
vtex use nombre-cuenta
vtex link
```

### Build y Deploy

```bash
# Validar el manifest y estructura
vtex validate

# Publicar en producción
vtex publish
```

## Estructura de Componentes

### Componentes Principales

| Componente | Responsabilidad | Ubicación |
|------------|-----------------|------------|
| ProductSummary | Mostrar información de producto en listados | react/components/ |
| Cart | Gestión del carrito de compras | react/components/ |
| Checkout | Proceso de pago | react/components/ |
| Button | Componente reutilizable de botón | react/components/shared/ |
| ProductCard | Tarjeta de producto para catálogos | react/components/shared/ |

### Hooks Personalizados

- **useCart**: Lógica de gestión del carrito (agregar, remover, actualizar cantidades)
- **useProduct**: Lógica de consulta y filtrado de productos

### Servicios Compartidos

- **cartService**: Integración con API de carrito de VTEX
- **productService**: Integración con catálogo de productos

## Guía de Refactorización

### Principios Aplicados

Este proyecto implementa los siguientes principios de código limpio:

#### YAGNI (You Aren't Gonna Need It)

Se evita la implementación de funcionalidad especulativa. Cada componente y servicio responde a una necesidad concreta del negocio.

#### DRY (Don't Repeat Yourself)

La lógica duplicada se ha extraído a:
- Custom hooks para comportamiento reutilizable
- Componentes shared para elementos UI comunes
- Utilidades para funciones de transformación de datos

#### SOLID

- **S**ingle Responsibility: Cada componente tiene una responsabilidad única
- **O**pen/Closed: Componentes abiertos para extensión, cerrados para modificación
- **L**iskov Substitution: Interfaces claras para permitir reemplazo
- **I**nterface Segregation: Contratos pequeños y específicos
- **D**ependency Inversion: Dependencia de abstracciones, no concreciones

#### KISS (Keep It Simple, Stupid)

La complejidad innecesaria se ha eliminado mediante:
- Nombres descriptivos y claros
- Funciones pequeñas y enfocadas
- Evitar sobre-ingeniería

### Flujo de Refactorización

1. **Identificación**: Analizar el código existente para detectar code smells
2. **Planificación**: Documentar los cambios necesarios y su impacto
3. **Implementación**: Aplicar cambios de forma incremental
4. **Verificación**: Asegurar que los tests pasan y la funcionalidad se mantiene
5. **Documentación**: Actualizar este README con los cambios realizados

## Convenciones de Código

### Nomenclatura

- **Componentes**: PascalCase (`ProductSummary`, `CartItem`)
- **Hooks**: camelCase con prefijo `use` (`useCart`, `useProduct`)
- **Servicios**: camelCase (`cartService`, `productService`)
- **Utilidades**: camelCase (`formatter`, `validator`)
- **CSS Handles**: Prefijo del componente (`product-summary__name`, `cart__total`)

### Estructura de Componentes

```typescript
// Importaciones ordenadas: externos, internos, tipos
import { useState, useEffect } from 'react';
import { useCart } from '../hooks/useCart';
import { Product } from '../types';

// Componente funcional con TypeScript
const MiComponente = ({ prop1, prop2 }: Props) => {
  // Hooks al inicio
  const { state, actions } = useMiHook();
  
  // Renderizado
  return (
    <div className={handles.container}>
      {/* Contenido */}
    </div>
  );
};

export default MiComponente;
```

### Manejo de Errores

Los servicios deben manejar errores de forma consistente:
- Capturar excepciones de APIs externas
- Proporcionar mensajes de error claros
- Implementar reintentos cuando sea apropiado

## Contribución

### Flujo de Trabajo

1. Crear branch desde `main`: `git checkout -b feature/nombre-feature`
2. Realizar cambios siguiendo las convenciones
3. Ejecutar validación: `npx tsc --noEmit`
4. Commit con mensaje descriptivo: `feat: agregar funcionalidad X`
5. Push y crear Pull Request

### Commits Semánticos

- `feat`: Nueva funcionalidad
- `fix`: Corrección de bug
- `refactor`: Refactorización sin cambio de comportamiento
- `docs`: Documentación
- `style`: Cambios de formato (no lógica)
- `test`: Agregar o modificar tests

## Recursos Externos

- [Documentación VTEX IO](https://developers.vtex.com/vtex-developer-docs)
- [VTEX Store Framework](https://vtex.com/)
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## Changelog

### Versión 1.0.0

- Estructura base del proyecto VTEX IO
- Componentes de ProductSummary, Cart y Checkout
- Hooks personalizados para lógica de negocio
- Servicios compartidos para APIs
- Sistema de estilos con CSS Handles

---

**Nota**: Este proyecto es parte de un ejercicio de refactorización aplicando principios de código limpio. Los cambios realizados deben documentarse en este archivo siguiendo la guía de contribución.
```
