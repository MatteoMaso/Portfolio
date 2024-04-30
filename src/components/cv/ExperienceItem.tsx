import Image from "next/image";

export interface Experience {
  title: string;
  companyName: string;
  start: string;
  end?: string;
  location?: string;
  logo: string;
  children: React.ReactNode[];
}

// function RenderLogo({ logo }: { logo?: string }) {
//   if (logo === undefined || logo === "") {
//     return null;
//   }
//   return (
//     <Image
//       loading="lazy"
//       src={'/logo/' + logo}
//       height={250}
//       width={250}
//       alt={"logo"}>
//     </Image>
//   );
// }


export default function ExperienceItem({title, start, end, companyName, location, logo, children}: Experience) {
  const items = children.map((item, index) => {
    return <li className="" key={index}>{item}</li>;
  });

  // if (logo === undefined || logo === "") {
  //   return (
  //     <div className="experienceitem mb-7">
  //       <div className='grid grid-cols-1'>
  //         <div className="flex font-medium">
  //           <p className="mr-2 text-2xl">{title},</p>
  //           <p className="text-2xl">{companyName}</p>
  //         </div>
  //         <div className="flex text-gray-500">
  //           <p className="mr-3">{start} - {end},</p>
  //           <p>{location}</p>
  //         </div>
  //       </div> 
  //       <div>
  //         <ul className="list-disc list-inside">{items}</ul>
  //       </div>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div className="experienceitem mt-7">
  //       <div className='grid md:grid-cols-7 grid-cols-1'>
  //         <RenderLogo logo={logo}/>
  //         <div className="col-span-6 sm:ml-3">
  //           <div className="flex font-medium">
  //             <p className="mr-2 text-2xl">{title},</p>
  //             <p className="text-2xl">{companyName}</p>
  //           </div>
  //           <div className="flex text-gray-500">
  //             <p className="mr-3">{start} - {end},</p>
  //             <p>{location}</p>
  //           </div>
  //         </div>
  //       </div> 
  //       <div>
  //         <ul className="list-disc list-inside">{items}</ul>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="experienceitem mb-7">
      <div className='grid grid-cols-1'>
        <div className="flex font-medium">
          <p className="mr-2 text-2xl">{title},</p>
          <p className="text-2xl">{companyName}</p>
        </div>
        <div className="flex text-gray-500">
          <p className="mr-3">{start} - {end},</p>
          <p>{location}</p>
        </div>
      </div> 
      <div>
        <ul className="list-disc list-inside">{items}</ul>
      </div>
    </div>
  )
};