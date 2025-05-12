import Card from "./CardSingle";
const CardList = () => {
    const cards = [
        { title: 'Card 1' },
        { title: 'Card 2' },
        { title: 'Card 3' },
        { title: 'Card 4' }
    ];

    return (
        <div className="flex gap-4 flex-wrap">
            {cards.map((card, idx) => (
                <Card key={idx} title={card.title} />
            ))}
        </div>
    );
}

export default CardList