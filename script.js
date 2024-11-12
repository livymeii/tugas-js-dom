const giftImage = document.getElementById('gift');

giftImage.addEventListener('click', function() {
    giftImage.src = 'isinya.png';

    if (!document.getElementById('birthdayText')) {
        const birthdayText = document.createElement('p');
        birthdayText.id = 'birthdayText';
        birthdayText.innerText = 'Selamat Ulang Tahun!';
        birthdayText.style.textAlign = 'center';
        birthdayText.style.fontSize = '20px';
        birthdayText.style.color = '#f7a7c5'

        giftImage.parentNode.insertBefore(birthdayText, giftImage.nextSibling);
    }
});