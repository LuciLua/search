function buscarPalavrasSemelhantes(palavra, array){
    var array = document.getElementById('array').textContent.split(',')
    var palavra = document.getElementById('search').value
    var result = document.querySelector('.result')
    result.innerHTML = '' //reset
    for(let i = 0; i < array.length; i++){
        var item = (array.filter(e => e.includes(palavra)))[i]
        if(item == undefined || palavra == ''){
            result.innerHTML += ''
        } else {
            result.innerHTML += '<p class="item">' + item + '</p>'
        }
    }
}

function add(){
    var addWord = document.getElementById('add').value
    if(addWord.length != 0){
        var array = document.getElementById('array').textContent += ', '+ addWord
    }
}