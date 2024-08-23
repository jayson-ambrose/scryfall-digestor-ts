export async function getCards(searchCriteria: string, query: string) {
    const response = await fetch(`https://api.scryfall.com/cards/search?q=${searchCriteria}${query}`)
    const cardObject = await response.json()
    return cardObject.data
}