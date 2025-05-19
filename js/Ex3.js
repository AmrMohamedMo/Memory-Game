









let startGame = document.querySelector(`.start-game`);playerNameSpan = document.querySelector(`.player-name span`);conButton = document.querySelector(`.control-buttons`);
startGame.onclick =_=>{
    YourName = prompt(`What is your Name`);
    if(YourName === ``){playerNameSpan.innerHTML = `unkwon`}
    else{playerNameSpan.innerHTML = YourName};
    conButton.remove();
};
Container = document.querySelector(`.blocks-container`);
ArrayBlocks = Array.from(Container.children);
IndexArray = [...Array(ArrayBlocks.length).keys()];

function shuffle(Array){
    let current = Array.length,Stock,Random;
    while(current > 0){Random = Math.floor(Math.random()*current);
        current = current - 1;
        Stock = Array[current];
        Array[current] = Array[Random];
        Array[Random] = Stock;
    }return Array;
};
shuffle(IndexArray);

ArrayBlocks.forEach((Blocks,i)=>{
    Blocks.style.order = IndexArray[i];
    Blocks.addEventListener(`click`, function (){flipBlock(Blocks)});
});

function flipBlock(ClickedBlock) {
    ClickedBlock.classList.add(`is-flipped`);
    let AllFlippedBlocks = ArrayBlocks.filter( (flippedBlock) => flippedBlock.classList.contains(`is-flipped`));
        if(AllFlippedBlocks.length === 2){
                    function StopClicking() {
                        Container.classList.add(`no-clicking`);
                        setTimeout(function(){Container.classList.remove(`no-clicking`);},1000);
                        };
            
                StopClicking();

                    function MatchedBlock(firstBlock,secondBlock){
                        if(firstBlock.dataset.technology === secondBlock.dataset.technology){
                            firstBlock.classList.remove(`is-flipped`);secondBlock.classList.remove(`is-flipped`);
                            firstBlock.classList.add(`has-match`);secondBlock.classList.add(`has-match`);
                        }else{let WrongTries =  document.querySelector(`.wrong-tries span`);
                            WrongTries.innerHTML = parseInt(WrongTries.innerHTML) + 1;
                            setTimeout(function(){firstBlock.classList.remove(`is-flipped`);secondBlock.classList.remove(`is-flipped`)},1000)
                        }
                    };
                MatchedBlock(AllFlippedBlocks[0],AllFlippedBlocks[1]);
        };
};






















































// let newArray = [1,2,3,4,5];shuffle(newArray);console.log(newArray);
// let filterisflipped = ArrayBlocks.filter(function (flippedBlock) {
//     return flippedBlock.classList.contains(`is-flipped`);