let produtos = [];

module.exports = {
    getAll: () => produtos,

    add: (produto) => {
        produto.id = Date.now();
        produtos.push(produto);
    },

    delete: (id) => {
        produtos = produtos.filter(p => p.id != id);
    }
};
