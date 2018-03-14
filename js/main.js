console.log('Starting up');

var gProjs = [];


// function addProj(projs,id,name,title,desc,publishedAt,labels){
//     var idx = projs.length;
//     projs[idx].id = id;
//     projs[idx].name = name;
//     projs[idx].title = title;
//     projs[idx].desc = desc;   
//     projs[idx].url = 'img/portfolio/'+id+'.jpg';
//     projs[idx].publishedAt = Date.now();
//     projs[idx].labels = labels;
// }


function addProj(projs,projObj){
    projObj.url= 'img/portfolio/'+projObj.id+'.jpg';
    projs.push(projObj);
}

//Testing-unit
var proj = {
    id: 'Minesweeper',
    name: 'My MineSweeper',
    title: 'Are you ready to sweep some mines?!',
    desc: 'My version to one od the classic games Mine Sweeper',
    //url: 'img/portfolio/'+proj.id+'.jpg',
    publishedAt: Date.now(),
    labels: ['Matrixes', 'Timer', 'Score', 'Levels','Game Modes']
};

