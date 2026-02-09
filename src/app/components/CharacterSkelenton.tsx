export const CharacterSkeleton = () => {
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
      <div className="w-full h-48 bg-slate-200 animate-pulse" />
      
      <div className="p-4 space-y-3">
        <div className="h-5 bg-slate-200 animate-pulse rounded w-3/4" />
        
        <div className="h-4 bg-slate-200 animate-pulse rounded w-1/2" />
      </div>
    </div>
  )
}