export default function CardImageSF({card}: {card: any}) {

    return (
        <div>
            <h1>{card.name}</h1>
            <img className='rounded-3xl' src={card.image_uris.normal} alt={card.name}/>
        </div>
    )
}