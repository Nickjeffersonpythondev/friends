// User data
const users = ['kasra', 'mostafa', 'Nick', 'alireza', 'artin' , 'ilia'];
const passwords = {
    kasra: 'x9w8v7u6y5',
    mostafa: 'z1y2x3w4v5',
    Nick: 'w6v7u8y9z0',
    alireza: 'q1r2s3t4p5',
    artin: '1qaz2wsx' ,
    ilia:'2wsx3edc'
};

// Login button handler
document.getElementById('signin-btn').addEventListener('click', () => {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    // Validate credentials
    if (users.includes(username) && passwords[username] === password) {
        // Redirect with query parameters
        alert("ورود موفقیت آمیز بود!");
        window.location.href = `page.html?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`;
    } else {
        // Show error message and redirect to error page
        document.getElementById('error-message').style.display = 'block';
        document.getElementById('error-message').textContent = "نام کاربری یا رمز عبور اشتباه است!";
        setTimeout(() => {
            window.location.href = 'wrong.html';
        }, 2000);
    }
});
