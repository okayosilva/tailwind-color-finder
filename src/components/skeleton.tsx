export function Skeleton() {
  return (
    <div className="animate-pulse flex gap-4">
      <div className="">
        <div className="mb-1 h-20 w-24 rounded-sm border border-transparent bg-zinc-900 transition-all"></div>
        <div className="h-1 w-16 rounded-sm bg-slate-600" />
      </div>
      <div className="">
        <div className="mb-1 h-20 w-24 rounded-sm border border-transparent bg-zinc-900 transition-all"></div>
        <div className="h-1 w-16 rounded-sm bg-slate-600" />
      </div>
      <div className="">
        <div className="mb-1 h-20 w-24 rounded-sm border border-transparent bg-zinc-900 transition-all"></div>
        <div className="h-1 w-16 rounded-sm bg-slate-600" />
      </div>
    </div>
  )
}
