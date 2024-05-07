export default function SkillsSection({ children }: {
  children: React.ReactNode;
}) {
  return (
    <div className='right-side-sub-section my-2'>
      <div className='flex flex-wrap'>
        {children}
      </div>
    </div>
  )
}