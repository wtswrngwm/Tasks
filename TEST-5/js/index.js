'use strict';

        for (let count = 1; count <= 100; count++) {
//            userList.push('<li> User ' + count + '</li><br>');
//            document.getElementById('left-users-list').innerHTML = userList.join('');
            const newElement = document.createElement('li');
            newElement.innerHTML = 'User ' + count; 
            if (count <= 50) {
                document.getElementById('left-users-list').appendChild(newElement);
            } else {
                document.getElementById('right-users-list').appendChild(newElement);
            }
    }
   
    
function handleName (name) {
    return name
}


const nameIlya = handleName ('Ilya');