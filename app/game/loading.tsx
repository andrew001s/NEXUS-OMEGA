export default function Loading() {
  return (
    <div
      className="fixed inset-0 z-[95] flex items-center justify-center"
      style={{
        background: 'linear-gradient(180deg, rgba(4,8,6,0.32), rgba(4,8,6,0.9) 60%, rgba(0,0,0,1))',
        fontFamily: '"Courier New", monospace',
      }}
    >
      <div
        className="flex flex-col items-center gap-4 border px-5 py-4"
        style={{
          borderColor: 'rgba(134, 239, 172, 0.25)',
          backgroundColor: 'rgba(5, 8, 5, 0.92)',
          boxShadow: '0 18px 40px rgba(0, 0, 0, 0.45)',
        }}
      >
        <div
          className="h-10 w-10 animate-spin rounded-full border"
          style={{
            borderColor: 'rgba(134, 239, 172, 0.55)',
            borderTopColor: 'rgba(134, 239, 172, 0.12)',
          }}
        />
        <div className="text-[11px] uppercase tracking-[0.22em]" style={{ color: '#d9f99d' }}>
          Cargando nivel...
        </div>
      </div>
    </div>
  )
}
