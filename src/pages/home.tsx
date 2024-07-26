import {
  Paintbrush,
  Paintbrush2,
  Paintbrush2Icon,
  Palette,
  Trash,
} from 'lucide-react'
import React from 'react'
import { Skeleton } from '../components/skeleton'

export function Home() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData) as {
      selectColor: string
    }

    const { selectColor } = data
    console.log(selectColor)
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

          <div className="mt-8">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-300">
                Closest Colors
              </h2>
              <button className="rounded-sm border-2 border-transparent bg-gray-300 px-2 py-1 text-gray-950 transition-all hover:animate-shake hover:bg-gray-100">
                <Paintbrush size={16} />
              </button>
            </div>

            <div className="mt-4 flex flex-wrap gap-4">
              <Skeleton />
              <div className="">
                <div className="mb-1 h-20 w-24 rounded-sm border border-transparent bg-zinc-900 transition-all hover:border-sky-800"></div>
                <span className="text-sm font-normal">Fuchsia-400</span>
              </div>
              <div className="">
                <div className="mb-1 h-20 w-24 rounded-sm border border-transparent bg-zinc-900 transition-all hover:border-sky-800"></div>
                <span className="text-sm font-normal">Fuchsia-400</span>
              </div>
              <div className="">
                <div className="mb-1 h-20 w-24 rounded-sm border border-transparent bg-zinc-900 transition-all hover:border-sky-800"></div>
                <span className="text-sm font-normal">Fuchsia-400</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
