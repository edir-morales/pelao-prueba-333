# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/a4b871aa-3f7b-417d-8c54-b33d7198b46d

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/a4b871aa-3f7b-417d-8c54-b33d7198b46d) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/a4b871aa-3f7b-417d-8c54-b33d7198b46d) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

## Historial de Cambios Recientes (Gestionado por Gemini CLI)

Este proyecto ha sido modificado y desplegado utilizando Gemini CLI. A continuación, se detalla un resumen de los cambios realizados:

### Despliegue Inicial y Conexión FTP
- Se estableció una conexión FTP exitosa al servidor `50.31.174.169` en el puerto 21, utilizando FTP simple (sin TLS).
- Se desplegó la aplicación web completa desde el repositorio de GitHub (`https://github.com/papaqb18/multivikings-smart-home`) al directorio `/public_html` del servidor FTP. Esto incluyó la instalación de dependencias (`npm install`) y la construcción del proyecto (`npm run build`).

### Mejoras y Ajustes de Interfaz
- **Título de la Página (HTML `<title>`)**: Se cambió de "MultiVikings - Domótica y Automatización del Hogar" a "MultiViking".
- **Título Principal (H1 Visible)**: Se ajustó el texto de "MultiVikings" a "MultiViking".
- **Corrección de Diseño del Título**: Se implementaron ajustes de CSS (`py-8` y eliminación de `overflow-hidden` en el elemento `section` padre) para asegurar que el título principal se muestre completamente sin recortes.
- **Información del Pie de Página (Footer)**:
    - Se eliminó la información de "Madrid, España" y el horario de atención.
    - Se actualizó la dirección de correo electrónico a `Viniciuscruzat@multiviking.com`.
    - Se cambió la ubicación a "Chile Santiago".
- **Gestión de Botones**: Se eliminaron los botones "Consulta Gratuita", "Ver Proyectos", "WhatsApp", "Email", "Solicitar Cotización" y "Hablar con un Experto" de la interfaz. (Nota: Los botones se mantuvieron eliminados según la última instrucción del usuario).
- **Favicon**: Se configuró `logonuevo.png` como el favicon del sitio.
- **Logo Principal**:
    - Se actualizó el logo principal de la página a `logonuevo.png`.
    - Se ajustó su tamaño a `h-32` y se centró horizontalmente.

### Control de Versiones con Git
- Se configuró el repositorio local para sincronizarse con un nuevo repositorio remoto en GitHub (`https://github.com/edir-morales/pelao-prueba-333.git`).
- Se realizaron commits de todos los cambios mencionados y se subieron al repositorio remoto, estableciendo un control de cambios para el proyecto.

### Conexión FTP para Edición (para usuarios de CLI)

Si deseas editar la página directamente a través de FTP utilizando una interfaz de línea de comandos (CLI) o scripts, puedes conectarte de la siguiente manera. Este método utiliza FTP simple (sin TLS) al servidor.

**Detalles de Conexión:**
- **Host FTP:** `50.31.174.169`
- **Puerto FTP:** `21`


**Método Utilizado (Python con `ftplib`):**

Puedes usar un script Python similar al siguiente para conectarte y realizar operaciones. Se recomienda usar variables de entorno para la contraseña por seguridad.

```python
import ftplib
import os

def connect_ftp_cli():
    FTP_HOST = '50.31.174.169'
    FTP_USER = 'xkabal'
    # Se recomienda usar una variable de entorno para la contraseña
    FTP_PASS = os.environ.get('FTP_PASSWORD') 

    if not FTP_PASS:
        print("Error: La variable de entorno 'FTP_PASSWORD' no está configurada.")
        print("Por favor, configúrala antes de ejecutar el script: export FTP_PASSWORD='tu_contraseña'")
        return False

    try:
        print(f"Conectando a FTP://{FTP_HOST} como {FTP_USER}...")
        ftp = ftplib.FTP(FTP_HOST)
        ftp.login(FTP_USER, FTP_PASS)
        print("¡Conexión FTP exitosa!")
        
        print("\nContenido del directorio raíz:")
        ftp.dir() # Lista el contenido del directorio actual
        
        # Ejemplo: Cambiar a public_html y listar
        try:
            ftp.cwd('public_html')
            print(f"\nCambiado a /public_html. Contenido:")
            ftp.dir()
        except ftplib.error_perm:
            print("\nNo se pudo cambiar a public_html o no existe.")

        ftp.quit()
        print("\nConexión FTP cerrada.")
        return True
        
    except ftplib.all_errors as e:
        print(f"Error de conexión FTP: {e}")
        return False
    except Exception as e:
        print(f"Error inesperado: {e}")
        return False

if __name__ == "__main__":
    connect_ftp_cli()

```
### Uso del Proyecto con Gemini CLI

Este proyecto ha sido diseñado para ser gestionado y modificado de forma interactiva utilizando Gemini CLI. Si deseas colaborar o realizar cambios a través de esta herramienta, sigue los siguientes pasos:

**1. Iniciar Gemini CLI:**
Abre tu terminal o línea de comandos y ejecuta el comando para iniciar Gemini CLI. (El comando exacto puede variar según tu instalación de Gemini CLI).

**2. Proporcionar Contexto del Proyecto:**
Una vez iniciado Gemini CLI, es crucial que le proporciones el contexto de tu entorno de trabajo. Esto incluye:
-   **Directorio de Trabajo Actual:** Asegúrate de que tu terminal esté posicionada en el directorio raíz del proyecto (`C:\PELAO` en este caso, o donde hayas clonado el repositorio `multivikings-repo`).
-   **Estructura de Carpetas:** Gemini CLI puede solicitar la estructura de carpetas para entender el proyecto. Puedes proporcionarla usando comandos como `ls -R` o `tree` en tu terminal, o simplemente describiéndola.

**Ejemplo de Inicio de Sesión (Contexto Inicial):**
```
This is the Gemini CLI. We are setting up the context for our chat.
Today's date is [fecha actual].
My operating system is: [tu SO]
I'm currently working in the directory: C:\PELAO
Here is the folder structure of the current working directories:

Showing up to 200 items (files + folders).

C:\PELAO\
├───multivikings-repo
│   ├───.git
│   ├───node_modules
│   ├───public
│   ├───src
│   │   ├───assets
│   │   ├───components
│   │   │   ├───ui
│   │   │   └───...
│   │   └───...
│   ├───.gitignore
│   ├───README.md
│   ├───package.json
│   └───...
├───ftp_deploy.py
├───ftp_upload_final.py
├───logonuevo.png
└───...
```

**3. Interactuar con el Proyecto:**
Una vez que Gemini CLI tenga el contexto, puedes empezar a darle instrucciones. Por ejemplo:
-   "Cambia el texto del título principal en la página web."
-   "Ajusta el tamaño del logo a 100px de alto."
-   "Despliega los últimos cambios al servidor FTP."
-   "Actualiza el archivo `README.md` con un nuevo historial de cambios."

Gemini CLI utilizará las herramientas disponibles (como `run_shell_command`, `read_file`, `write_file`, `replace`, etc.) para ejecutar tus solicitudes.

**Consideraciones Importantes:**
-   **Reconstrucción y Despliegue:** Después de realizar cambios en el código fuente (archivos en `src/`), es necesario reconstruir el proyecto (`npm run build`) y luego desplegar los archivos generados (`dist/`) al servidor FTP. Gemini CLI puede automatizar estos pasos si se le indica.
-   **Credenciales:** Para operaciones como el `git push` o la conexión FTP, Gemini CLI te pedirá las credenciales necesarias en el momento oportuno.
-   **Control de Versiones:** Se recomienda encarecidamente utilizar Git para el control de versiones. Gemini CLI puede ayudarte a gestionar commits y pushes.
