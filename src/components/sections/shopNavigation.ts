export function nextScrollPosition(current: number, step: number, maximum: number, direction: number) {
  return Math.max(0, Math.min(maximum, current + step * direction))
}