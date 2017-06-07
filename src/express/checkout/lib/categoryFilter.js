const categoryFilter = (items, category) => {
    return items.filter((item) => {
        return item.category === category;
    })
}

module.exports = categoryFilter;