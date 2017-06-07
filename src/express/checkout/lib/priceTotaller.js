const total = (items) => {
    return items.reduce((acc, item) => {
        return acc + (item.quantity * item.price);
    }, 0)
}

module.exports = total;