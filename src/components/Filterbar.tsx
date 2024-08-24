import { Input } from "./ui/input"

export default function Filterbar({filter, handleFilterChange}: {filter: string, handleFilterChange: (value: string) => void}) {

    return (
        <div className='flex justify-center w-1/2 my-2'>
            <Input
            onChange={(e) => handleFilterChange(e.target.value)}
            value={filter}
            placeholder='Filter search result by name or type...'/>

        </div>
    )
}