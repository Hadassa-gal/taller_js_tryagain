const personajes = {
    "Spider-Man": { 
        año: 1962, 
        universo: "Marvel", 
        descripción: "Un joven con habilidades arácnidas tras ser mordido por una araña radiactiva." 
    },
    "Batman": { 
        año: 1939, 
        universo: "DC", 
        descripción: "Millonario que combate el crimen en Gotham usando su intelecto y tecnología." 
    },
    "Iron Man": { 
        año: 1963, 
        universo: "Marvel", 
        descripción: "Genio, millonario y filántropo con una armadura de alta tecnología." 
    },
    "Superman": { 
        año: 1938, 
        universo: "DC", 
        descripción: "Un alienígena con súper poderes que protege la Tierra." 
    },
    "Joker": { 
        año: 1940, 
        universo: "DC", 
        descripción: "El icónico villano de Batman, maestro del caos y la locura." 
    },
    "Doctor Doom": { 
        año: 1962, 
        universo: "Marvel", 
        descripción: "Un dictador y genio científico con una armadura poderosa." 
    },
    "Thor": { 
        año: 1962, 
        universo: "Marvel", 
        descripción: "El dios del trueno de Asgard que lucha por la justicia." 
    },
    "Wonder Woman": { 
        año: 1941, 
        universo: "DC", 
        descripción: "Guerrera amazona con súper fuerza y habilidades de combate." 
    },
    "Green Goblin": { 
        año: 1964, 
        universo: "Marvel", 
        descripción: "El enemigo de Spider-Man, un genio científico con tecnología avanzada." 
    },
    "Lex Luthor": { 
        año: 1940, 
        universo: "DC", 
        descripción: "Un multimillonario con inteligencia superior y odio hacia Superman." 
    }
};


class Tarjetas extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode:'open'});
        const wrapper = document.createElement('div');
        wrapper.innerHTML =/*html*/`
        <div class="tarjeta">
            <h2 class="nombrePrin">sdfgh</h2>
            <img src="./storage/default.png" alt="default" class="imag">
            <h3 class="indicador">nombre clave:</h3>
            <p class="text">a</p>
            <h3 class="indicador">casa:</h3>
            <p class="text">a</p>
            <h3 class="indicador">año de aparición:</h3>
            <p class="text">a</p>
            <h3 class="indicador">descripción:</h3>
            <p class="text">aaaaaaaaa aaaa aaaaaaaaaaaaaa aaaaaaa aaaa a  aaaaaa</p>
        </div>
        `;
        const style = document.createElement('style');
        style.textContent=`
            .tarjeta{
                overflow: hidden;
                display: flex;
            }
            .imag{
                height: 30vh;
                object-fit: cover;
            }
        `;
        shadow.appendChild(style);
        shadow.appendChild(wrapper);
    }
    connectedC
}
customElements.define('tarjeta',Tarjetas);