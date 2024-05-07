import Link from "next/link";

export default function Item({ params }: any) {
    return (
        <Link className='hover:text-blue-700 transition-colors' 
            href={params.href}>
            {params.text}
        </Link>
    )
}
