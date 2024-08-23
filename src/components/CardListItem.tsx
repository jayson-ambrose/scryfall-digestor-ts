export default function CardListItem({ card, targetCard }: { card: any, targetCard: any }) {

    const handleClick = () => {
        targetCard(card)
    }

    return (
        <div onClick={() => handleClick()} className='flex border border-black my-1 ml-5 justify-between'>
            {card?.image_uris?.art_crop ? <img className='h-12 w-auto' src={card.image_uris.art_crop} alt={card.name}/> : 
                <img className='h-12 w-auto' src={card.card_faces[0].image_uris.art_crop} alt={card.name}/> }
            <h1 className="pr-3">{card.name}</h1>
        </div>
    )
}