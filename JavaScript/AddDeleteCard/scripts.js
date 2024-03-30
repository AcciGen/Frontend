document.addEventListener("DOMContentLoaded", function() {
    const addCardBtn = document.getElementById('addCardBtn');
    const cardContainer = document.getElementById('cardContainer');
    let cardCount = 0;
  
    addCardBtn.addEventListener('click', function() {
      createCard();
    });
  
    function createCard() {
      cardCount++;
      const card = document.createElement('div');
      card.classList.add('card');
  
      const cardPhoto = document.createElement('img');
      cardPhoto.src = "assets/images/h6.png";
      cardPhoto.classList.add('card-img-top');

      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');
  
      const cardTitle = document.createElement('h5');
      cardTitle.classList.add('card-title');
      cardTitle.textContent = `Object`;

      const cardText = document.createElement('p');
      cardText.classList.add('card-text');
      cardText.textContent = `Some quick example text to build on the card title and make up the bulk of the card's content.`;
  
      const deleteBtn = document.createElement('button');
      deleteBtn.classList.add('btn', 'btn-danger', 'mx-2');
      deleteBtn.textContent = 'Delete';
      deleteBtn.addEventListener('click', function() {
        card.remove();
      });
  
      cardBody.appendChild(cardTitle)
      cardBody.appendChild(cardText);
      cardBody.appendChild(deleteBtn);
      card.appendChild(cardPhoto);
      card.appendChild(cardBody);
  
      if (cardContainer.firstChild) {
        cardContainer.insertBefore(card, cardContainer.firstChild);
      } else {
        cardContainer.appendChild(card);
      }
    }
  });
  