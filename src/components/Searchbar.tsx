import { ChangeEvent, MouseEvent, useState } from 'react'
import { Input } from './ui/input'

export default function Searchbar({ runSearch }: 
    { runSearch: (searchCritera: string, query: string) => void }) {

  const [searchCritera, setSearchCriteria] = useState('')
  const [query, setQuery] = useState('')

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault()
    runSearch(searchCritera, query)
    setQuery('')
  }

  const handleChangeSearchCriteria = (e: ChangeEvent<HTMLSelectElement>) => {
    setSearchCriteria(e.currentTarget.value)
  }

  const handleChangeQuery = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value)
  }

  return (
    <form className='flex justify-center'>
      <select onChange={handleChangeSearchCriteria}>
        <option value=''>Name</option>
        <option value='s:'>Set</option>
        <option value='a:'>Artist</option>
      </select>
      <Input
        type='text'
        className='border border-gray-300 rounded-lg p-2'
        placeholder={'Search for a card...'}
        onChange={handleChangeQuery}
        value={query}
        />        
      <button onClick={(e) => handleClick(e)} className='bg-blue-500 text-white rounded-lg p-2 ml-2'>
        Search
      </button>
    </form>
    )
}