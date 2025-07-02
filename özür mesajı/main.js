function createHeart() {
            const heart = document.createElement("div");
            heart.classList.add("heart");
            heart.innerText="💖";
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.fontSize = (Math.random() * 20 + 10) + "px";
            document.body.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 5000);
        }

        setInterval(createHeart, 50);


         const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");

    yesBtn.addEventListener("click", () => {
      alert("benim gibi bir eşşeği affedeceğini tahmin etmiştim😄");
    });

    
    noBtn.addEventListener("mouseenter", () => {
     
        moveNoBtn();
      yesBtn.style.transform = "scale(5)";
    });


    noBtn.addEventListener("mouseleave", () => {
      yesBtn.style.transform = "scale(1)";
    });



    yesBtn.addEventListener("mouseleave", () => {
       yesBtn.style.transform = "scale(1)";
    });


    function moveNoBtn() {
      const padding = 400;
      const btnWidth = noBtn.offsetWidth;
      const btnHeight = noBtn.offsetHeight;

      const maxX = window.innerWidth - btnWidth - padding;
      const maxY = window.innerHeight - btnHeight - padding;

      let x = Math.random() * maxX;
      let y = Math.random() * maxY;


      const yesRect = yesBtn.getBoundingClientRect();

      
      while (
        x > yesRect.left - btnWidth && x < yesRect.right + btnWidth &&
        y > yesRect.top - btnHeight && y < yesRect.bottom + btnHeight
      ) {
        x = Math.random() * maxX;
        y = Math.random() * maxY;
      }

      noBtn.style.left = `${x}px`;
      noBtn.style.top = `${y}px`;
    }
