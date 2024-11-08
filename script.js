// Lấy các phần tử trong HTML
const button = document.getElementById('generate-button');
const randomNumberDisplay = document.getElementById('random-number');

// Hàm tạo số ngẫu nhiên và hiển thị nó
function generateRandomNumber() {
    // Tạo số ngẫu nhiên từ 1 đến 1000
    const randomNumber = Math.floor(Math.random() * 1000) + 1;
    // Đảm bảo số luôn có 4 chữ số, nếu cần thêm số 0 ở đầu
    randomNumberDisplay.innerText = randomNumber.toString().padStart(4, '0');
}

// Thêm sự kiện khi bấm nút
button.addEventListener('click', generateRandomNumber);
