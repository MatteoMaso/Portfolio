interface CustomSocialContentProps {
    icon: React.ReactNode;
    btnRef: string;
  }

export function SocialIconButton({ icon, btnRef }: CustomSocialContentProps) {
    return (
        <div className="border-black border-2 m-2 rounded-lg flex justify-center items-center">
            <a href={btnRef} className="p-6 text-black text-5xl hover:bg-blue-600 transition-colors duration-300 flex justify-center items-center">
                <span className="text-6xl">{icon}</span>
            </a>    
        </div>
    );
}
