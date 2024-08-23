import { useState } from "react"

export default function CardImageDF({ card }: {card: any}) {

    const [cardFace, setCardFace] = useState('front')

    const handleClick = () => {
        setCardFace(cardFace === 'front' ? 'back' : 'front')
    }

    return (
        <div onClick={() => handleClick()}>
            <h1>{card.name}</h1>
            <img 
                className='rounded-3xl' 
                src={cardFace === 'front' ? card.card_faces[0].image_uris.normal : card.card_faces[1].image_uris.normal} 
                alt={card.name}/>
            <h1>Click to view other face.</h1>
        </div>
    )
}