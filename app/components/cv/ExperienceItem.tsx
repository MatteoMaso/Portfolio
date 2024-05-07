export interface Experience {
  title: string;
  companyName: string;
  start: string;
  end?: string;
  location?: string;
  logo: string;
  children: React.ReactNode[];
}

export default function ExperienceItem({title, start, end, companyName, location, logo, children}: Experience) {
  const items = children.map((item, index) => {
    return <li className="" key={index}>{item}</li>;
  });

  return (
    <div className="experienceitem mb-7">
      <div className='grid grid-cols-1'>
        <div className="sm:flex font-medium">
          <p className="mr-2 text-2xl">{title},</p>
          <p className="text-2xl">{companyName}</p>
        </div>
        <div className="flex text-gray-500 text-lg">
          <p className="mr-3">{start} - {end},</p>
          <p>{location}</p>
        </div>
      </div> 
      <ul className="list-disc list-outside ml-4">{items}</ul>
    </div>
  )
};