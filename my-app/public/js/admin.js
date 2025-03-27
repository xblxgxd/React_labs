window.onclick = function(event) {
    const modal = document.getElementById('userAgreementModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
const users = JSON.parse(localStorage.getItem('users'));
// Функция для отображения всех пользователей в админке
function displayUsersInAdmin() {
    const userTableBody = document.getElementById('usersTableBody');
    userTableBody.innerHTML = ''; // Очистить предыдущие данные

    users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${user.nickname}</td><td>${user.email}</td><td>${user.phone}</td><td>${user.dob}</td><td>${user.role}</td>`;
        userTableBody.appendChild(row);
    });
}

// Проверка на загрузке страницы админки
if (window.location.pathname.includes('admin.html')) {
    displayUsersInAdmin();
}

