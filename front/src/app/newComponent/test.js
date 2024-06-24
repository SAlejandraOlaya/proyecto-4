function createShoppingList() {
    const items = [];

    return {
        addItem: function (item) {
            items.push(item);
        },
        getItems: function () {
            return items;
        }
    };
}

const shoppingList = createShoppingList();
shoppingList.addItem("Manzanas");
shoppingList.addItem("Plátanos");
shoppingList.getItems();