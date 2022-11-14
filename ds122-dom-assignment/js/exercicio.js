document.getElementById("adicionar").onclick  = function() {
    
    var node = document.createElement("Li");
    var text = document.getElementById("texto").value; 
    var textnode=document.createTextNode(text);
    node.appendChild(textnode);
    document.getElementById("lista").appendChild(node);
}
