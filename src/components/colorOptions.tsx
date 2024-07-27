import { useState } from 'react'
import { cn } from '../utils/cn'

export type ColorOptionProps = {
  colorName: string
}

export function ColorOption({ colorName }: ColorOptionProps) {
  const [popupVisible, setPopupVisible] = useState(false)

  function getBgColor(colorName: string) {
    navigator.clipboard
      .writeText(colorName)
      .then(() => {
        setPopupVisible(true)
        setTimeout(() => setPopupVisible(false), 2000)
      })
      .catch((err) => {
        console.error('Failed to copy:', err)
      })
  }
  return (
    <div className="relative">
      <div
        className={cn(
          `mb-1 h-20 w-24 cursor-pointer rounded-sm border-2 border-transparent transition-all hover:border-sky-500`,
          `bg-${colorName}`,
        )}
        onClick={() => getBgColor(colorName)}
      ></div>
      <span className="text-sm font-normal">{colorName}</span>

      {popupVisible && (
        <div className="animation-slideUpAndFadeOut absolute -top-4 left-1/2 z-10 -translate-x-1/2 transform rounded-sm bg-sky-500 p-1 text-sm text-gray-300">
          Copied!
        </div>
      )}
    </div>
  )
}
