function Node(val) {
    this.value = val;
    this.parent = null;

    this.edges = [];
    this.checked = false;
}

Node.prototype.addEdge = function(n) {
    this.edges.push(n);
}