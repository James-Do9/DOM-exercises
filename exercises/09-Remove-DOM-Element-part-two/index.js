let element = document.querySelector("#parentLI");
let childs = element.childNodes;
element.removeChild(childs[3]);
//The reason why you would use an index of three is because it counts empty
//space as an index. So in the HTML code, 0 is the empty space before the first
// li, 1 is the first li, 2 is the empty space between the first li and second li
//so on and so forth