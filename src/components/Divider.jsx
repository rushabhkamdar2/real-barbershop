export default function Divider() {
  return (
    <div className="w-full flex flex-col">
      <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(180,30,30,0.6), transparent)' }} />
      <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(240,235,225,0.4), transparent)' }} />
      <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(30,60,160,0.6), transparent)' }} />
    </div>
  )
}
