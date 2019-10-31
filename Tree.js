function Tree() {
    this.nodes = [];
    this.table = {};
}

Tree.prototype.addData = function(data) {
    let length = data.movies.length;
    let movies = data.movies;

    let movie;
    let movieNode;
    let castLength;
    let actorNode;
    for (let i = 0; i < length; i++){
        movie = movies[i];
        movieNode = new Node(movie.title);
        this.nodes.push(movieNode);
        castLength = movie.cast.length;
        for (let j = 0; j < castLength; j++){
            actor = movie.cast[j];
            if (!this.table[actor]) {
                actorNode = new Node(actor);
                this.table[actor] = actorNode;
                this.nodes.push(actorNode);
            } else {
                actorNode = this.table[actor];
            }
            actorNode.addEdge(movieNode);
            movieNode.addEdge(actorNode);
            
        }
    }
}

Tree.prototype.reset = function() {
    let length = this.nodes.length;

    for (let i = 0; i < length; i++){
        this.nodes[i].checked = false;
        this.nodes[i].parent = null;
    }
}