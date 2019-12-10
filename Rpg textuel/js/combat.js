    let hero = {
          vie: 100,
          force: 30
    
    }

    let  mechant = {
            vie: 100,
            force: 30

    }
 
    const Frapper = () => {

         let boutonattaquer = document.getElementById('bouton-attaquer');
         let messagejeu = document.getElementById('message-jeu');
         let boutonrecommencer = document.getElementById('bouton-recommencer');

         let heroFrapper = facileFrapper(hero.force);
         mechant.vie -= heroFrapper;
         printToScreen();

         if (jeuterminé(mechant.vie)) {
                jeufinis('Le heros remporte le combat')
                return;

         }
         
         boutonattaquer.disabled = true;
         messagejeu.innerText = "Ennemi attaque ! "

         setTimeout(() => {
             
            let mechantFrapper = facileFrapper(mechant.force);
            hero.vie -= mechantFrapper;
            printToScreen();

            if (jeuterminé(hero.vie)) {
                jeufinis('Le mechant remporte le combat')
                return;
    
            }

         boutonattaquer.disabled = false;

         },  250);

    }



    const jeufinis = (message) => {

         document.getElementById('message-jeu').innerText = message;
         document.getElementById('bouton-attaquer').hidden = true; 
         document.getElementById('bouton-recommencer').hidden = false;

    }

    const facileFrapper = (force) => {

        return Math.floor(Math.random()* force );
    
    }

   const jeuterminé = (vie) => {

     return vie <= 0;

   }


   const Recommencer = () => {
     
       let boutonattaquer = document.getElementById('bouton-attaquer');
       hero.vie = 100;
       mechant.vie = 100;
    document.getElementById('message-jeu').innerText = "";
    boutonattaquer.disabled = false;
    document.getElementById('bouton-recommencer').hidden = true;
    boutonattaquer.hidden = false; 
    printToScreen();


   }

    const printToScreen = () => {

        document.getElementById('vie-mechant').innerText = mechant.vie;
        document.getElementById('vie-hero').innerText = hero.vie;
        

    }

    printToScreen();