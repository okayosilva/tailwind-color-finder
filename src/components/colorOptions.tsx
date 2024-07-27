import { useState } from 'react'
import { cn } from '../utils/cn'

export type ColorOptionProps = {
  colorName: string
  colorCode: string
}

export function ColorOption({ colorName, colorCode }: ColorOptionProps) {
  const [popupVisible, setPopupVisible] = useState(false)

  function getBgColor(colorName: string) {
    navigator.clipboard
      .writeText(`Name: ${colorName} / Hex code: ${colorCode}`)
      .then(() => {
        setPopupVisible(true)
        setTimeout(() => setPopupVisible(false), 1000)
      })
      .catch((err) => {
        console.error('Failed to copy:', err)
      })
  }
  return (
    <div className="relative flex flex-col max-sm:w-full">
      <div
        className={cn(
          `mb-1 h-20 w-28 cursor-pointer rounded-sm border border-neutral-700 transition-all hover:border-sky-500 hover:shadow-[0_10px_18px_rgba(8,_112,_184,_0.7)] max-md:w-full`,
          `bg-${colorName}`,
        )}
        onClick={() => getBgColor(colorName)}
      ></div>
      <span className="text-sm font-normal max-sm:font-semibold">
        {colorName}
      </span>
      <span className="text-sm font-light max-sm:font-normal">{colorCode}</span>

      {popupVisible && (
        <div className="animation-slideUpAndFadeOut absolute -top-4 left-1/2 z-10 -translate-x-1/2 transform rounded-sm bg-sky-500 p-1 text-sm text-gray-100 max-sm:left-4">
          Copied!
        </div>
      )}
    </div>
  )
}
