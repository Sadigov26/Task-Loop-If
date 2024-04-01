// let a = prompt("eded daxil edin. ")
// function fibonacci(n) {
//     if (n <= 1) {
//         return n;
//     } else {
//         return fibonacci(n - 1) + fibonacci(n - 2);
//     }
// }

// function fibonacci(n) {
//     for (var i = 0; i < n; i++) {
//         series.push(fibonacci(i));
//     }
//     return series;
// }

// console.log(fibonacci(n)); 










// function welcomeUser() {
//     var currentTime = new Date();
//     var currentHour = currentTime.getHours();


//     var greeting;

//     if (currentHour < 12) {
//         greeting = "sabahiniz xeyir";
//     } else if (currentHour < 18) {
//         greeting = "gunortaniz xeyir";
//     } else {
//         greeting = "axsaminiz xeyir";
//     }

//     alert(greeting + "xoş geldiniz");
// }

// window.onload = welcomeUser;


// function showTime() {
//     var date = new Date(); // Şu anki tarihi ve saati al

//     var hour = date.getHours(); // Saati al
//     var minute = date.getMinutes(); // Dakikayı al
//     var second = date.getSeconds(); // Saniyeyi al

//     // Saat, dakika ve saniye değerlerini iki haneli olarak biçimlendirme (örneğin, 09:05:02)
//     hour = (hour < 10 ? "0" : "") + hour;
//     minute = (minute < 10 ? "0" : "") + minute;
//     second = (second < 10 ? "0" : "") + second;

//     // Saat bilgisini ekrana yazdırma
//     var time = hour + ":" + minute + ":" + second;
//     document.getElementById("saat").innerText = time;

//     // Her saniye geçtikçe saat bilgisini güncelleme
//     setTimeout(showTime, 1000);
// }

// // Sayfa yüklendiğinde saat gösterimini başlatma
// window.onload = showTime;








function printDivisibleNumbers(A) {
    // 1'den A'ya kadar olan sayıları kontrol et
    for (var i = 1; i <= A; i++) {
        // A'ya tam bölünebiliyorsa ekrana yazdır
        if (A % i === 0) {
            console.log(i);
        }
    }
}

// Kullanıcıdan sayı girişi al
var A = parseInt(prompt("Lütfen bir sayı girin:"));

// Fonksiyonu çağırarak A'ya tam bölünen sayıları ekrana yazdır
printDivisibleNumbers(A);



