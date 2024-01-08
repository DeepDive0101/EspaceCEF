// Faire apparaître un nouveau commentaire directement dans la liste des commentaires. Au moment où on valide le formulaire il n'y a  pas de rechargement de la page.
// Vérifier que tous les champs ne sont pas vides, si l’un est vide : afficher le message d’erreur déjà présent dans le HTML (caché par défaut).
// Supprimer le contenu des champs du formulaire une fois le nouveau commentaire affiché dans la liste


//1.Quand on écrit un commentaire, il s'ajoute à la liste pré-existante.

//2. La page ne se recharge pas quand j'envoie mon formulaire.

//3. Le contenu du formulaire se supprime une fois envoyé. 

    //Créer une variable commentaire qui designe le formulaire
    //Créer une variable qui désigne la liste de commentaires pré-existante  
    //Créez une fonction formulaire validé qui vérifie que mon formulaire est bien remplie correctement avant de s'envoyer : 

            // if tous mes champs de formulaire sont remplis
            //then send le formulaire
            //else afficher le message erreur pré-existant du fichier html
    
    //Créer une fonction send qui ajoute le formulaire à la liste de commentaires pré-existante :
        //empêcher la page de se recharger
        //while fonction formulaire validée est true
        //créer un nouveau commentaire qui ajoute le formulaire à la liste de commentaires pré-existante
        //supprimer le contenu des champs



   const form = document.getElementById ("form");
   const commentList = document.getElementById ("comment-list");

    function commentValue() {
        const firstName = document.getElementById("first-name").value;
        const lastName = document.getElementById("last-name").value;
        const message = document.getElementById("message").value;
        const comment = {firstName : firstName, lastName : lastName, message : message};
        return comment;
    }

   function correctForm(valuesOfTheComment) {
            const errorMessage = document.getElementById("error-message");
            if (valuesOfTheComment.firstName !== "" && valuesOfTheComment.lastName !== "" && valuesOfTheComment.message !== "") {
                errorMessage.style.display = "none";
                return true;
            }
            else {
                errorMessage.style.display = "block";
                return false;
            }
    }
    

    function addComment(event, commentList) {
        event.preventDefault();
        const valuesOfTheComment = commentValue();
        if (correctForm(valuesOfTheComment) === true) {
            const newComment = document.createElement("div");
            newComment.classList.add("flex", "space-x-4", "text-sm", "text-gray-500");


            const newClassElement = document.createElement("div");
            newClassElement.classList.add("flex-1", "py-10", "border-t", "border-gray-200");
            newComment.appendChild(newClassElement);

            const newClassElement2 = document.createElement("div");
            newClassElement2.classList.add("font-medium", "text-gray-900");
            const newCommentName = document.createElement("h3");
            newCommentName.innerText = valuesOfTheComment.firstName + " " + valuesOfTheComment.lastName;
            newClassElement.appendChild(newClassElement2);
            newClassElement2.appendChild(newCommentName);

            const newClassElement3 = document.createElement("div");
            newClassElement3.classList.add("prose", "prose-sm", "mt-4", "max-w-none", "text-gray-500");
            newClassElement2.appendChild(newClassElement3);

            const newClassElement4 = document.createElement("p");
            newClassElement4.innerText = valuesOfTheComment.message;
            newClassElement3.appendChild(newClassElement4);
            
            commentList.appendChild(newComment);
            form.reset();
        }
 }


 form.addEventListener('submit',event=> addComment(event, commentList));