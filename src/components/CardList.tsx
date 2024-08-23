export default function CardList({ children }: { children: React.ReactNode }) {

    return (
        <div className='flex flex-col w-1/2'>
            {children}
        </div>
    )
}