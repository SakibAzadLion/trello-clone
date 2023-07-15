export const getDragList = (lists, cardId) => {
    let dragStartList = null;

    lists.forEach((list) => {
        const dragCard = list.cards.find((card) => card === cardId);

        if (dragCard !== undefined) {
            dragStartList = list.id;
        }
    });

    return dragStartList;
}

export const filterPlaceholderCards = (lists) => {
    const newList = lists.map((list) => {
        const filteredCards = list.cards.filter((id) => id !== -1);

        return { ...list, cards: filteredCards };
    });

    return newList;
}

export const filterDragCard = (lists, cardId) => {
    const newList = lists.map((list) => {
        const filteredCards = list.cards.filter((id) => id !== cardId);

        return { ...list, cards: filteredCards };
    });

    return newList;
}