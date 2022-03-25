import Swal from 'sweetalert2'


let adBlockEnabled

async function detectAdBlock() {
  const googleAdUrl =
    'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
  try {
    await fetch(new Request(googleAdUrl)).catch((_) => {
      adBlockEnabled = true
    })
  } catch (e) {
    adBlockEnabled = true
  } finally {
    adBlockEnabled &&
      Swal.fire({
        icon: 'error',
        title: ' Ad Blocker! ',
        text: 'Please stop Ad Blocker and reload page otherwise some functionalities may not work',
        showConfirmButton: false,
        allowOutsideClick: true,
      })
  }
}

export default detectAdBlock
