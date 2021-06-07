import readlineSync from 'readline-sync';
import chalk from 'chalk';

console.log(chalk.red('TodoList in Terminal!!'));
let options = ['add','list','remove'];

let index ;

let list = [];

while(index!==(-1)){
    if(list.length>0){
        options = ['add','list','check','remove'];
    }else{
        options = ['add','list','remove'];
    }

    index = readlineSync.keyInSelect(options,'TodoListOptions?');

    if(options[index]==='add'){
        console.log('==============================');
        const newtodo = readlineSync.question('What do you want to do?');
        list.push({todo:newtodo,done:false});
        console.log('==============================');
    }
    
    if(options[index]==='list'){
        console.log('==============================');
        list.map((e)=>e.done?console.log('🟢'+e.todo):console.log('🔴'+e.todo));
        console.log('==============================');
    } 
    
    if(options[index]==='remove'){
        console.log('==============================');
        let newlist = list.map((e)=>e.todo)
        index = readlineSync.keyInSelect(newlist,'What do you want to remove?');
        list.splice(index,1);    
        console.log('==============================');
    }
    
    if(options[index]==='check'){
        console.log('==============================');
        const newlist = list.map((e)=>e.done?'🟢'+e.todo:'🔴'+e.todo);
        index = readlineSync.keyInSelect(newlist,'What do you want to un/check?');
        list[index].done? list[index].done=false:list[index].done=true;
    }
}


