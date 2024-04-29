import '@/styles/globals.css'

export default function CVPlaceHolder({children}: {
  children: React.ReactNode
}) {
  return (
    <div className='sheets'>
      {children}
    </div>
  );
};