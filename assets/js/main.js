$(document).ready(function () {
  const particlesJSON = {
    particles: {
      number: {
        value: 336,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 1,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 4,
          size_min: 0.3,
          sync: false,
        },
      },
      line_linked: {
        enable: false,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "top",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 600,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "bubble",
        },
        onclick: {
          enable: false,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 250,
          size: 0,
          duration: 2,
          opacity: 0,
          speed: 3,
        },
        repulse: {
          distance: 400,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  };

  // Fungsi untuk menampilkan SweetAlert dan memainkan suara
  function showAlertWithSound() {
    // Munculkan SweetAlert dengan tombol OK dan icon success
    Swal.fire({
      title: "Buka Ucapan",
      showConfirmButton: true, // Menampilkan tombol OK
    }).then((result) => {
      if (result.isConfirmed) {
        // Jika pengguna mengklik tombol OK, mainkan suara
        const alertSound = document.getElementById("alert-sound");
        alertSound.play();

        startTimeSalam();
      }
    });
  }

  // Fungsi untuk menampilkan SweetAlert saat halaman pertama kali dimuat
  function showInitialAlert() {
    showAlertWithSound();
  }

  // Menampilkan SweetAlert saat halaman pertama kali dimuat
  showInitialAlert();

  // Menghubungkan event klik dengan elemen .salam
  $(".salam").click(function () {
    showAlertWithSound();
  });

  particlesJS("particles-js", particlesJSON);

  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  function startTimeSalam() {
    var ucapanSalam = "";
    var todaySalam = new Date();
    var hSalam = todaySalam.getHours();
    var mSalam = todaySalam.getMinutes();
    var sSalam = todaySalam.getSeconds();
    mSalam = checkTime(mSalam);
    sSalam = checkTime(sSalam);
    let heroElements = document.getElementsByClassName("hero");
    if (heroElements.length > 0) {
      var hero = heroElements[0]; // Mengambil elemen pertama dengan kelas 'hero'

      if (hSalam < 4) {
        ucapanSalam = "Selamat malam ayanggg";
        kata1 = "Jangan tidur terlarut malam";
        kata2 = "Semoga mimpi kamu indah<i class='fa fa-heart'></i>";
        hero.style.backgroundImage =
          "url(https://dc621.4shared.com/img/y9ZPNx0Wku/s25/18b21975600/1696779688769?isRedirect=true&)";
      } else {
        if (hSalam < 11) {
          ucapanSalam = "Selamat pagi ayanggg";
          kata1 = "Jangan lupa sarapan";
          kata2 = "Semangat buat hari ini<i class='fa fa-heart'></i>";
          hero.style.backgroundImage =
            "url(https://dc621.4shared.com/img/bOkUszLlku/s25/18b21977540/ass1?isRedirect=true&)";
        } else {
          if (hSalam < 16) {
            ucapanSalam = "Selamat siang ayanggg";
            kata1 = "Jangan lupa makan siang";
            kata2 =
              "Jangan lupa shalat dzuhur dan ashar juga ya<i class='fa fa-heart'></i>";
            hero.style.backgroundImage =
              "url(https://dc621.4shared.com/img/ZLbdbRANge/s25/18b21977d10/ass2?isRedirect=true&)";
          } else {
            if (hSalam < 20) {
              ucapanSalam = "Selamat sore ayanggg";
              kata1 = "Jangan lupa mandi hahaha";
              kata2 =
                "Jangan lupa shalat isya dan maghrib juga ya<i class='fa fa-heart'></i>";
              hero.style.backgroundImage =
                "url(https://dc621.4shared.com/img/b6hYLywage/s25/18b21979480/ass3?isRedirect=true&)";
            } else {
              ucapanSalam = "Selamat malam ayanggg";
              kata1 = "Jangan tidur terlarut malam";
              kata2 = "Semoga mimpi kamu indah<i class='fa fa-heart'></i>";
              hero.style.backgroundImage =
                "url(https://dc621.4shared.com/img/y9ZPNx0Wku/s25/18b21975600/1696779688769?isRedirect=true&)";
            }
          }
        }
      }
    }
    // $(".salam").html(ucapanSalam);
    var typed = new Typed("h3", {
      strings: [ucapanSalam, kata1, kata2],
      smartBackspace: true,
      showCursor: 0,
      typeSpeed: 50,
    });
  }
});
