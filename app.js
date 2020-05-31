var len = 0;//it is number of pending tasks ,incrementing and deincementing it 
//in respective function but 
console.log('welcome to console!!')
const form = document.querySelector('#task-form');
const tasklist = document.querySelector('.collection');
const clearbtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskinput = document.querySelector('#task');


//event listeners 

loadEventListeners();

function loadEventListeners(){
    //load it to document 
    document.addEventListener('DOMContentLoaded',getTasks);
    // add task event 
    form.addEventListener('submit',addtask);
    tasklist.addEventListener('click',removetask)
    clearbtn.addEventListener('click',cleartasks);
    filter.addEventListener('keyup',filtertasks)
}
function getTasks(){
    let tasks;
    if(localStorage.getItem('tasks') === null){
      tasks = [];
    } else {
        
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task){
         //li elment 
    const li = document.createElement('li');
    li.className = 'collection-item';
    //text node and append to li 

    li.appendChild(document.createTextNode(task));
    //create new link element 
    const link  = document.createElement('a');
    //add class
    link.className = 'delete-item secondary-content'
    link.innerHTML = '<i class = "fa fa-remove"> </i>'
    //append the link to li 
    li.appendChild(link)
    //append li to ul 
    tasklist.appendChild(li);

    })

}
function addtask(e)
{
  len = len +1 ;
  console.log(len)
  localStorage.len= Number(localStorage.len) + 1;
  $( 'button .content' ).text( len );
    if(taskinput.value ==='')
    {
        alert('Please add a task')

    }

    //li elment 
    const li = document.createElement('li');
    li.className = 'collection-item';
    //text node and append to li 

    li.appendChild(document.createTextNode(taskinput.value));
    //create new link element 
    const link  = document.createElement('a');
    //add class
    link.className = 'delete-item secondary-content'
    link.innerHTML = '<i class = "fa fa-remove"> </i>'
    //append the link to li 
    li.appendChild(link)
    //append li to ul 
    tasklist.appendChild(li);
    //localstorage
    storeTaskInLocalStorage(taskinput.value);
     //clear input 
    taskinput.value = '';
    //store in local storage 
    e.preventDefault();
}
function storeTaskInLocalStorage(task) {
    let tasks;
    if(localStorage.getItem('tasks') === null){
      tasks = [];
    } else {
        
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
  
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }


function removetask(e)

{
  len = len - 1;
  console.log(len);
  localStorage.len= Number(localStorage.len) - 1;

  $( 'button .content' ).text( len );
    if(e.target.parentElement.classList.contains('delete-item') ){

e.target.parentElement.parentElement.remove();
//remove from local storage 
removeTaskFromLocalStorage(
    e.target.parentElement.parentElement);
      }

}
function cleartasks(){
  len = 0 ;
  console.log(len);
  $( 'button .content' ).text( len );
  if(tasklist.firstChild = ''){
    alert('Please add a task!')
  }
  else{
   // tasklist.innerHTML = '';
   confirm('Do you want to clear all tasks?');
   
   while(tasklist.firstChild){
       tasklist.removeChild(tasklist.firstChild);
clearTasksFromLocalStorage();
   
   }
  }
}
function filtertasks(e){
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(
        function(task){
            const item = task.firstChild.textContent;
            if(item.toLowerCase().indexOf(text) != -1){
                task.style.display ='block'

            }
            else{
                task.style.display ='none'

            }

    })}
    function removeTaskFromLocalStorage(taskitem)
    {
        let tasks;
        if(localStorage.getItem('tasks') === null){
          tasks = [];
        } else {
            
          tasks = JSON.parse(localStorage.getItem('tasks'));
        }
        tasks.forEach(function(task,index){
            if(taskitem.textContent === task)
            tasks.splice(index,1)
        });
        localStorage.setItem('tasks',JSON.stringify(tasks));
    }
    function clearTasksFromLocalStorage(){
        localStorage.clear();

    }
    $( 'button .content' ).text( len );