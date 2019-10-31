let  request = new XMLHttpRequest();

request.open('GET','http://127.0.0.1:5050/data.json');
request.responseType = "json";
request.send();

let tree;
let searcher;

let init = () => {
    let data = request.response;

    tree = new Tree();
    tree.addData(data);

    searcher = new Searcher(tree);
    //console.log(searcher.getPath("Mark Ruffalo", "Kevin Bacon"));
}

request.onload = init;