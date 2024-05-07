import Link from "next/link";

interface CustomWhiteButtonProps {
    btnContent: string;
    btnRef: string;
  }

export function WhiteButton({ btnContent, btnRef }: CustomWhiteButtonProps) {
    return (
        <Link href={btnRef}>
            <div className='text-white text-2xl hover:bg-blue-800  border-white border-2 p-1.5 rounded-md m-3'>
                {btnContent}
            </div>
        </Link>
    );
}
