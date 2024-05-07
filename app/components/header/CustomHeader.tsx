export default function CustomHeader({ children }: { children: React.ReactNode }) {
    return (
        <>
            {/* Blue bar on top */}
            <div className='bg-blue-700 h-2'/>

            {/* Name and bar in the center */}
            <div className='flex justify-center mt-14 mb-4' >
                {children}
            </div>
        </>
    );
};
