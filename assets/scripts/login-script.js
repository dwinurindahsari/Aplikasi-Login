/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */
// membuat variable untuk setiap
const loginFormElement = document.querySelector('#loginForm');
const inputEmailElement = document.querySelector('#inputEmail');
const inputPasswordElement = document.querySelector('#inputPassword');

// variable untuk menyimpan informasi email dan password
const expectedEmail = 'admin@dicoding.com';
const expectedPassword = 'superpassword';

// menambahkan aksi klik pada button
loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();

  // mendapaykan nilai dari msing masing input
  const email = inputEmailElement.value;
  const password = inputPasswordElement.value;

  // memastikan bahwa nilai email dan password sesuai dengan nilai yang tersimpan
  if (email == expectedEmail && password == expectedPassword) {

    // jika sesuai maka program akan berpindah ke halaman home
    goToHome();
  } else {

    // jika tidak sesuai maka akan menampilkan info input salah
    showPopUp();
  }
});
