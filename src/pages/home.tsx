import { Paintbrush, Palette } from 'lucide-react'
import React, { useState } from 'react'
import { ColorOption } from '../components/colorOptions'
import { Skeleton } from '../components/skeleton'
import { Color } from '../mock/tailwindColors'
import { findThreeNearestColors } from '../utils/findTailwindColor'

export function Home() {
  const [colors, setColors] = useState<Color[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)

    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData) as {
      selectColor: string
    }

    const { selectColor } = data

    if (!validateColor(selectColor)) {
      setError('Invalid color format. Please enter a hex color code.')
      setLoading(false)
      return
    }

    try {
      const tailwindFindColors = findThreeNearestColors(selectColor)
      if (tailwindFindColors.length > 0) {
        setColors(tailwindFindColors.map((color) => color))
      } else {
        console.log('No colors found')
      }
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
      setError(null)
    }
  }

  function validateColor(color: string) {
    return /^#[0-9A-F]{6}$/i.test(color)
  }

  function handleColorClear() {
    setColors([])
    setError(null)
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-pattern bg-center bg-no-repeat">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-gray-300">
          Tailwind <span className="text-sky-400">Color</span> Finder!
        </h1>
        <p className="text-gray-500">Find the closest colors.</p>
      </header>
      <main>
        <section className="m-auto mt-8 w-96">
          {error && (
            <label className="text-xs font-light text-red-500">{error}</label>
          )}
          <form className="flex gap-3" onSubmit={handleSubmit}>
            <div className="flex flex-1 items-center justify-center rounded-sm border border-transparent bg-zinc-900 px-4 py-2 transition-all hover:border-sky-400">
              <Palette size={20} className="text-gray-300" />
              <input
                type="text"
                className="w-full border-0 bg-transparent px-2 outline-none placeholder:text-gray-300"
                name="selectColor"
                id="selectColor"
                placeholder="Enter a color..."
              />
            </div>

            <button
              type="submit"
              className="rounded-sm bg-sky-600 px-4 hover:bg-sky-500"
            >
              <span className="font-semibold text-gray-100">Find</span>
            </button>
          </form>

          {colors.length > 0 && (
            <div className="mt-8">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-300">
                  Closest Colors
                </h2>
                <button
                  type="button"
                  onClick={handleColorClear}
                  className="rounded-sm border-2 border-transparent bg-gray-300 px-2 py-1 text-gray-950 transition-all hover:animate-shake hover:bg-gray-100"
                >
                  <Paintbrush size={16} />
                </button>
              </div>
              <div className="mt-4 flex flex-wrap gap-4">
                {loading && <Skeleton />}

                {!loading &&
                  colors.map(({ name, value }) => (
                    <ColorOption
                      key={name}
                      colorName={name}
                      colorCode={value}
                    />
                  ))}
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  )
}
