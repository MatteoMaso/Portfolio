export default function RightSideSection({ title, children }: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className='right-side-section m-7'>
      <div className='font-bold text-xl'>{title}</div>
        <div className='list-disc list-inside'>
          {children}
        </div>
    </div>
  )
}