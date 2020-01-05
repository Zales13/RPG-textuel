    let hero = {
          vie: 100,
          force: 30
    
    }

    let  titan = {
            vie: 100,
            force: 30

    }
 
    const Frapper = () => {

         let boutonattaquer = document.getElementById('bouton-attaquer');
         let messagejeu = document.getElementById('message-jeu');
         let boutonrecommencer = document.getElementById('bouton-recommencer');

         let heroFrapper = facileFrapper(hero.force);
         titan.vie -= heroFrapper;
         printToScreen();

         if (jeuterminé(titan.vie)) {
                jeufinis('Vous remportez le combat')
                return;

         }
         
         boutonattaquer.disabled = true;
        messagejeu.innerText = "le titan attaque ! "

         setTimeout(() => {
             
            let titanFrapper = facileFrapper(titan.force);
            hero.vie -= titanFrapper;
            printToScreen();

            if (jeuterminé(hero.vie)) {
                jeufinis('Le titan remporte le combat')
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
       titan.vie = 100;
    document.getElementById('message-jeu').innerText = "";
    boutonattaquer.disabled = false;
    document.getElementById('bouton-recommencer').hidden = true;
    boutonattaquer.hidden = false; 
    printToScreen();


   }

    const printToScreen = () => {

        document.getElementById('vie-titan').innerText = titan.vie;
        document.getElementById('vie-hero').innerText = hero.vie;
        

    }

    printToScreen();