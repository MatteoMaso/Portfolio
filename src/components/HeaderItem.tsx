import Link from "next/link";

export default function HeaderItem({ params }: any) {
    return (
        <div>
            <Link className='hover:text-blue-700 transition-colors' 
                href={params.href}>
                {params.text}
            </Link>
        </div>
    )
}
