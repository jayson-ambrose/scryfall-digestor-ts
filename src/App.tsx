import { useState } from 'react'
import { getCards } from './helpers/apiCalls'
import Searchbar from './components/Searchbar'
import CardList from './components/CardList'
import CardListItem from './components/CardListItem'
import CardImageArea from './components/CardImageArea'
import CardImageSF from './components/CardImageSF'
import CardImageDF from './components/CardImageDF'

function App() {

  const [cardList, setCardList] = useState([])
  const [loading, setLoading] = useState(false)
  const [targettedCard, setTargettedCard] = useState(null)

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
    if (card.card_faces) {
      return <CardImageDF card={card}/>
    }
    return <CardImageSF card={card}/>
  }
  
  return (
    <>
      <h1 className='text-4xl'>SCRYFALL MTG API DIGESTOR</h1>
      <Searchbar runSearch={runSearch}/>
      <div className='flex'>
        <CardList>
          {loading ? <p>Loading...</p> : cardList?.map((card, index) => (
            <CardListItem key={index} card={card} targetCard={targetCard}/>
          ))}
        </CardList>
        <CardImageArea>
          {targettedCard ? checkDoubleFaced(targettedCard): null}
        </CardImageArea>
      </div>
    </>
  )
}

export default App
