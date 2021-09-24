# Djswan
Dibuat oleh Awal Ariansyah

# Instalasi

1. Buka file **config.js**
2. Isikan tokenmu didalam tanda kutip
3. Host script di heroku (worker: node main.js)

# Konfigurasi

1. Array **channelku** di file main.js merupakan daftar ID channel Discord.

Cara mendapatkan ID channel
  - Aktifkan menu Developer Options Discord
  - Klik kanan nama channel > Copy ID

2. Random timer adalah waktu interval mengirim pesan (1000 = 1 detik)
3. https://api.quotable.io/random merupakan API untuk mendapatkan quote random
4. https://libretranslate.de/translate merupakan API untuk menterjemahkan bahasa


# Mendapatkan Token Client

## Di PC
  
  1. Buka Discord.com/app & login
  2. Pencet F12
  3. Ke tab Storage
  4. Pilih Localstorage
  5. Pilih Discord.com
  6. Cari di filter "token"

## Di HP
  
  1. Download Via Browser
  2. Buka Discord.com mode desktop & login
  3. Menu > Settings > Scripts > +
  4. Sites: https://dicord.com/*
  5. Remarks: test
  6. Code:
  
  ```js
    console.log('running')
    let a = localStorage.getItem('token')
    alert(a)
    console.log(a)
  ```
  
  7. Save
  8. Balik ke Discord
  9. Ambil token yg muncul
