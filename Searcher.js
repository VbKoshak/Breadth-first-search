function Searcher(tree) {
    this.tree = tree;
}

Searcher.prototype.getPath = function (start,end) {
    let path = [];
    queue = [];

    let current = this.tree.table[start];
    current.checked = true;
    queue.unshift(current);

    let found = false;
    let length = 0;
    let node;

    while (!found && queue.length > 0) {
        current = queue.shift();
        length = current.edges.length;

        for (let i = 0; i < length; i++) {
            node = current.edges[i];
            if (!node.checked) {
                node.parent = current;
                node.checked = true;

                if (node.value == end) {
                    found = true;
                    current = node;
                    break;
                } else {
                    queue.push(node);
                }
            } 
        }
    }

    if (found) {
        let path = [];
        while (current) {
            path.unshift(current.value);
            current = current.parent;
        }
        this.tree.reset();
        return path;
    } else {
        this.tree.reset();
        return null;
    }
}