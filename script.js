 document.addEventListener("DOMContentLoaded",function(){
  const hamburger =  document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const carticons = document.querySelectorAll('.cart-icon');
  const cartCount = document.querySelector('.cart-count');
  const modetoggle = document.getElementById('mode-toggle');


  const body = document.body;

     hamburger.addEventListener('click',function(){
      navLinks.classList.toggle('show')
     });

     let count = 0;

      carticons.forEach(icon => {
      icon.addEventListener('click', function(){
        count++;
        cartCount.textContent = count;
      }); 

      });

      modetoggle.addEventListener('click',function(){
        body.classList.toggle('dark-mode');
        if(body.classList.contains('dark-mode')){
          modetoggle.textContent = '🌞';
        }
        else{
          modetoggle.textContent = '🌚';
            
        }
      });
       


    });