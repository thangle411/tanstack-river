export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="flex flex-col flex-1 xl:ml-[288px] h-screen bg-black">
            <div className="max-w-screen-xs px-4 sm:px-0 sm:max-w-full flex flex-col flex-1 justify-between items-center mx-auto sm:mx-4 md:mr-6 md:ml-4">
                <div className="flex flex-col flex-1 w-full max-w-screen-xl items-center mt-20 xl:mt-12">
                    {children}
                </div>
            </div>
        </main>
    )
}