import { ScrollArea } from "@/components/ui/scroll-area"

export default function CardList({ children }: { children: React.ReactNode }) {

    return (
        <ScrollArea className='border border-4 border-slate-600 flex flex-col w-1/2 max-h-100vw h-screen px-2 ml-2'>
            {children}
        </ScrollArea>
    )
}