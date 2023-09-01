export function getBlob(url: string, option?: RequestInit) {
  return fetch(url, option).then((res) => {
    return res.blob()
  }).catch((err) => {
    console.error(`[react-office-preview] fetch error: ${err}`)
  })
}
