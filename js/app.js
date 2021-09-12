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
    const array = document.getElementById('array')
    if(addWord.length != 0){
        if (array.textContent.length != 0){
            array.textContent += ',' + addWord 
        } else{
            array.textContent += addWord 
        }
    }
}

function excluir(){
    var array = document.getElementById('array').textContent.split(',')
    var arrayElement = document.getElementById('array')
    var deleteWord = document.getElementById('add').value

    var index = array.indexOf(deleteWord, 1)
    if(index > -1){
        array.splice(index, 1)
        arrayElement.textContent = array //atualiza
    }
    
    if(deleteWord == array[0]){
        array.splice(array[0], 1)
        arrayElement.textContent = array //atualiza
    }
}