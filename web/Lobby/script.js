document.addEventListener('DOMContentLoaded', function() {
    // Tentukan waktu perubahan teks secara manual
    var changeTime = new Date();
    changeTime.setFullYear(2023); 
    changeTime.setMonth(6);       // Bulan 0-11 (0 -> Januari)
    changeTime.setDate(8);        // Tanggal
    changeTime.setHours(17);      // Jam 0-24 
    changeTime.setMinutes(0);     // Menit
    changeTime.setSeconds(0);     //Detik

    // Hitung selisih waktu sampai perubahan teks (dalam milidetik)
    var countdownTime = changeTime.getTime() - Date.now();

    // Fungsi untuk mengubah teks dan mengaktifkan tombol
    function changeText() {
        document.getElementById("text").innerHTML = "p";
        document.getElementById("timer").innerHTML = "<button id='tombol-pengumuman'><span></span>Sudah dibuka</button>";
        
        document.getElementById("tombol-pengumuman").addEventListener('click', function() {
            document.getElementById('waiting-page').classList.add('hidden');
            document.getElementById('dashboard-page').classList.remove('hidden');
        });
    }

    // Timer untuk menghitung mundur
    var countdown = setInterval(function() {
        var now = Date.now(); // Waktu saat ini
        countdownTime = changeTime.getTime() - now; // Hitung ulang selisih waktu

        if (countdownTime <= 0) {
            clearInterval(countdown); // Hentikan interval countdown
            changeText(); // Panggil fungsi untuk mengubah teks
        } else {
            var days = Math.floor(countdownTime / (1000 * 60 * 60 * 24));
            var hours = Math.floor((countdownTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((countdownTime % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((countdownTime % (1000 * 60)) / 1000);

            // Memperbarui teks timer
            document.getElementById("timer").innerHTML = "Akan dibuka dalam " + days + " hari " + hours + " jam " + minutes + " menit " + seconds + " detik";
        }
    }, 1000); // Update setiap 1 detik

    // Fungsi untuk mengubah teks jika waktu sudah lewat
    if (Date.now() >= changeTime.getTime()) {
        changeText(); // Panggil fungsi untuk mengubah teks
    }
});

// Radar Chart

const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });