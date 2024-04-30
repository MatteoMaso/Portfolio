export default function RightSideSubSection({ title, children }: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className='right-side-sub-section my-2'>
      <div className='font-bold text-lg'>{title}</div>
        <div className='list-disc list-inside'>
          {children}
        </div>
    </div>
  )
}