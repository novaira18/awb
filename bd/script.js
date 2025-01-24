function selectDate(date) {
    const thankYouMessage = document.getElementById('thankYouMessage');
    thankYouMessage.textContent = `Thank you, Abdul Wali! We’ll see you on ${date} at TBC! 🎂💚❤️`;
    thankYouMessage.style.display = 'block';
}