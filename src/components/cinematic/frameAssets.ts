type AssetPointer = { url: string }

const assets = import.meta.glob<AssetPointer>('../../assets/sequences/**/*.asset.json', {
  eager: true,
  import: 'default',
})

export function frameSource(folder: string, index: number) {
  const name = `frame_${String(index + 1).padStart(6, '0')}`
  return assets[`../../assets/sequences/${folder}/${name}.webp.asset.json`]?.url
    ?? `${import.meta.env.BASE_URL}img/${folder}/${name}.png`
}