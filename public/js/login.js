document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault(); // Prevent the default form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const response = await fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (data.success) {
        Swal.fire({
            icon: 'success',
            title: 'התחברות מוצלחת',
            text: 'תועבר בקרוב.',
            showConfirmButton: false,
            timer: 1500
          });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'התחברות נכשלה',
            text: 'נסיון ההתחברות שלך לא הצליח. אנא נסה שנית.',
            confirmButtonText: 'סגור'
          });
    }
});
