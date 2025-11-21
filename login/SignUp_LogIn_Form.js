const container = document.querySelector('.container');
const adminBtn = document.querySelector('.admin-btn');
const userBtn = document.querySelector('.user-btn');

// Fungsi toggle form
adminBtn.addEventListener('click', () => {
    container.classList.add('active');
})

userBtn.addEventListener('click', () => {
    container.classList.remove('active');
})

// ⭐⭐ BAGIAN INI YANG DIUBAH ⭐⭐

// Login User - redirect ke halaman user teman Anda
document.getElementById('userForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('userUsername').value;
    const password = document.getElementById('userPassword').value;
    
    // Ganti dengan validasi dari teman Anda
    if (username && password) {
        window.location.href = 'user-dashboard.html'; // Ganti dengan nama file user teman Anda
    }
});

// Login Admin - redirect ke halaman admin teman Anda  
document.getElementById('adminForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('adminUsername').value;
    const password = document.getElementById('adminPassword').value;
    
    // Ganti dengan validasi dari teman Anda
    if (username && password) {
        window.location.href = 'admin-dashboard.html'; // Ganti dengan nama file admin teman Anda
    }
});