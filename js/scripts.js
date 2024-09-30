
const iconPlus = document.getElementsByClassName('working-process-plus');
for (let i = 0; i < iconPlus.length; i++) {
    iconPlus[i].addEventListener('click', function() {
        let working_process_card = this.parentElement.parentElement.parentElement;
        let btnPlus = this.parentElement.querySelectorAll(".working-process-plus");
        let btnMinus = this.parentElement.querySelector(".working-process-minus");
    
        working_process_card.classList.add("working-process-card-active");
    
        for (let index = 0; index < btnPlus.length; index++) {
            btnPlus[index].classList.add("hide");
        }
        btnMinus.classList.remove("hide");

        working_process_card.querySelector(".working-process-card-desc").classList.remove("hide")
    });
  }

const iconMinus = document.getElementsByClassName('working-process-minus');
for (let i = 0; i < iconMinus.length; i++) {
    iconMinus[i].addEventListener('click', function() {
        let working_process_card = this.parentElement.parentElement.parentElement;
        let btnPlus = this.parentElement.querySelectorAll(".working-process-plus");
        let btnMinus = this.parentElement.querySelector(".working-process-minus");
    
        working_process_card.classList.remove("working-process-card-active");
    
        for (let index = 0; index < btnPlus.length; index++) {
            btnPlus[index].classList.remove("hide");
        }
        btnMinus.classList.add("hide");

        working_process_card.querySelector(".working-process-card-desc").classList.add("hide")
    });
  }