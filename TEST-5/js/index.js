'use strict';

        for (let count = 1; count <= 100; count++) {
            const newElement = document.createElement('li');
            newElement.innerHTML = 'User ' + count; 
            if (count <= 50) {
                document.getElementById('left-users-list').appendChild(newElement);
            } else {
                document.getElementById('right-users-list').appendChild(newElement);
            }
    }
   
