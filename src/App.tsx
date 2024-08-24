import { useState } from 'react'
import { getCards } from './helpers/apiCalls'
import Searchbar from './components/Searchbar'
import CardList from './components/CardList'
import CardListItem from './components/CardListItem'
import CardImageArea from './components/CardImageArea'
import CardImageSF from './components/CardImageSF'
import CardImageDF from './components/CardImageDF'
import Filterbar from './components/Filterbar'

function App() {

  const [cardList, setCardList] = useState([])
  const [loading, setLoading] = useState(false)
  const [targettedCard, setTargettedCard] = useState(null)
  const [filter, setFilter] = useState('')

  const runSearch = async (searchCritera: string, query:string) => {
    setLoading(true)    
    getCards(searchCritera, query).then((data) => {
    setCardList(data)
    setLoading(false)
    })
  }

  const targetCard = async (card: any) => {
    setTargettedCard(card)
  }

  const checkDoubleFaced = (card: any) => {
    if (card.image_uris) {
      return <CardImageSF card={card}/>      
    }
    return <CardImageDF card={card}/>
  }

  const handleFilterChange = (value: string) => {
    setFilter(value)
  }

  const cardListDisplayed = cardList?.map((card: any, index: number) => {
    if (card.name.toLowerCase().includes(filter?.toLowerCase()) || 
      card.type_line.toLowerCase().includes(filter?.toLowerCase())) {
      return <CardListItem key={index} card={card} targetCard={targetCard}/>
    }
  })

  console.log(targettedCard)
  
  return (
    <>
    <div className='flex flex-col items-center'>
      <h1 className='text-4xl'>SCRYFALL MTG API DIGESTOR</h1>
      <Searchbar runSearch={runSearch}/>
      <Filterbar filter={filter} handleFilterChange={handleFilterChange}/>
    </div>
    <div className='flex'>
      <CardList>
        {loading ? <p>Loading...</p> : cardListDisplayed}
      </CardList>
      <CardImageArea>
        {targettedCard ? checkDoubleFaced(targettedCard): null}
      </CardImageArea>
    </div>
    </>
  )
}

export default App
