import Link from "next/link";

interface CustomSocialContentProps {
    icon: React.ReactNode;
    btnRef: string;
  }

export function SocialIconButton({ icon, btnRef }: CustomSocialContentProps) {
    return (
        <Link href={btnRef} className="
            border-black border-2 
            rounded-lg 
            m-2
            hover:bg-blue-600
            flex justify-center items-center">
            <div className="w-24 p-5 text-black text-5xl transition-colors duration-300 flex justify-center items-center">
                <span className="text-6xl">{icon}</span>
            </div>    
        </Link>
    );
}
