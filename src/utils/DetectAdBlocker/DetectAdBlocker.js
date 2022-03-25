import { toast } from 'react-toastify'


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
      toast.error(`Please stop Ad Blocker.`, {
        position: 'top-center',
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
  }
}

export default detectAdBlock
