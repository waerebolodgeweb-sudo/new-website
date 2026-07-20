export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-050">
      <div className="flex flex-col items-center gap-4">
        <span className="h-10 w-10 animate-spin rounded-full border-[3px] border-savana-200 border-t-savana-800" />
        <p className="text-sm font-medium tracking-[0.2em] text-savana-600 uppercase">
          Waerebo Lodge
        </p>
      </div>
    </div>
  );
}
