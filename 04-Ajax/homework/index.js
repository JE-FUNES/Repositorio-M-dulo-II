// boton VER AMIGOS
const verAmigos = (amigoId) =>{

    const [lista] = $("#lista")
    amigoId.forEach(amigo =>{
        const newLi = document.createElement("li");
        lista.appendChild(newLi);
        newLi.innerHTML = amigo.name
    })
    }

    const [cargarAmigos] = $("#boton")
    
    const onClick = () => {
        $.get("http://localhost:5000/amigos", verAmigos)
        
    }

    boton.addEventListener("click", onClick, {once: true} )

// boton BUSCAR
 // referencias a los elementos del DOM 

$(document).ready(function (){
    let input = $("#input");
    let searchButton = $("#search");
    let amigoSpan = $("#amigo");

    
// Agrega un evento de click al botón "Buscar"
    searchButton.click(function (){
        let amigoId = parseInt(input.val());

        $.get("http://localhost:5000/amigos", function (amigos){

            let amigoEncontrado = amigos.find(function (amigo){
                return amigo.id === amigoId;
            });

            if (amigoEncontrado){
                amigoSpan.text(amigoEncontrado.name);
            } else {
                amigoSpan.text("Amigo no encontrado");
            }

        }) .fail(function (error){
            console.error("Error al obtener los amigos: ", error);
        });
    });
    
    // boton DELETE
    
    // referencias a los elementos del DOM
    
        let deleteInput = $("#inputDelete");
        let deleteButton = $("#delete");
        let deleteMessage = $("#success");
        
        // Agrega un evento de click al botón "Delete"
        deleteButton.click(function (){
            let amigoId2 = parseInt(deleteInput.val()); // Obtiene el número ingresado en el input

            $.get("http://localhost:5000/amigos", function (amigos){
                let amigoEncontrado2 = amigos.find(function (amigo){
                    return amigo.id === amigoId2;
                });

                if(amigoEncontrado2){
                    let amigoIndex = amigos.indexOf(amigoEncontrado2);
                    if (amigoIndex !== -1){
                        amigos.splice(amigoIndex, 1); // Elimina el amigo de la lista

                        // Actualiza la lista de amigos en el DOM
                    let lista = $("#lista");
                    lista.empty(); // Borra la lista actual

                    amigos.forEach(function (amigo){
                        let newLi = $("<li>").text(amigo.name);
                        lista.append(newLi);
                    });

                        deleteMessage.text("Tu amigo fué borrado con éxito");
                        amigoSpan.text(""); // Borra el nombre del amigo en la lista superior
                    } else {
                        deleteMessage.text("Amigo no encontrado en la lista");
                    }
                } else {
                    deleteMessage.text("Amigo no encontrado");
                }
            }) .fail(function(error){
                console.error("Error al obtener los amigos", error);
            });
        });
        
    });