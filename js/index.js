//Función para obtener usuarios de la API
async function fetchUsers() {
    try {
        const response = await fetch('https://api.escuelajs.co/api/v1/users');
        const users = await response.json();
        displayUsers(users);
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
    }
}

//Función para mostrar los usuarios en el DOM
function displayUsers(users) {
    const userList = document.getElementById('userList');

    users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.className = 'col-md-4';
        userCard.innerHTML = `
            <div class="user-card d-flex align-items-center">
                <img src="${user.avatar}" alt="${user.name}" class="avatar">
                <div>
                    <h5>${user.name}</h5>
                    <p>Correo Electrónico: ${user.email}</p>
                    <p>Contraseña: ${user.password}</p>
                </div>
            </div>
        `;
        userList.appendChild(userCard);
    });
}

//Llama a la función al cargar la página
window.onload = fetchUsers;
