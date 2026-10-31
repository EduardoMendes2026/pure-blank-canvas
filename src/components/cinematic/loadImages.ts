// Public images are served from the app base, without a /public prefix.
export function loadImage(path: string): Promise<HTMLImageElement | null> {
  return new Promise((resolve) => {
    const image = new Image()
    const timeout = window.setTimeout(() => finish(null), 8000)
    function finish(result: HTMLImageElement | null) {
      window.clearTimeout(timeout)
      image.onload = null
      image.onerror = null
      resolve(result)
    }
    image.onload = () => finish(image)
    image.onerror = () => finish(null)
    image.decoding = 'async'
    image.src = path.startsWith('/') || path.startsWith('https://') ? path : `${import.meta.env.BASE_URL}${path}`
  })
}

export function drawCover(canvas: HTMLCanvasElement, image: HTMLImageElement) {
  const context = canvas.getContext('2d')
  if (!context) return
  const { width, height } = canvas.getBoundingClientRect()
  if (!width || !height) return
  const pixelRatio = Math.min(window.devicePixelRatio, 2)
  const pixelWidth = Math.round(width * pixelRatio)
  const pixelHeight = Math.round(height * pixelRatio)
  if (canvas.width !== pixelWidth) canvas.width = pixelWidth
  if (canvas.height !== pixelHeight) canvas.height = pixelHeight
  const scale = Math.max(canvas.width / image.naturalWidth, canvas.height / image.naturalHeight)
  const drawWidth = image.naturalWidth * scale
  const drawHeight = image.naturalHeight * scale
  context.drawImage(image, (canvas.width - drawWidth) / 2, (canvas.height - drawHeight) / 2, drawWidth, drawHeight)
}