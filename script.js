function generarNombre() {
    const tipoMascota = document.getElementById('tipoMascota').value;
    const generoMascota = document.getElementById('generoMascota').value;
    const gustosMusicales = document.getElementById('gustosMusicales').value;
    const hobbies = document.getElementById('hobbies').value;

    let nombres = [];

    // Lista ampliada de nombres según tipo de mascota y género
    if (tipoMascota === 'perro') {
        if (generoMascota === 'macho') {
            nombres = ['Rocky', 'Buddy', 'Max', 'Simba', 'Oscar', 'Bruno', 'Toby', 'Zeus', 'Apollo', 'Thor'];
        } else {
            nombres = ['Bella', 'Luna', 'Molly', 'Daisy', 'Sadie', 'Chloe', 'Sophie', 'Coco', 'Ruby', 'Rosie'];
        }
    } else if (tipoMascota === 'gato') {
        if (generoMascota === 'macho') {
            nombres = ['Whiskers', 'Oliver', 'Simba', 'Leo', 'Milo', 'Oscar', 'Jasper', 'Tom', 'Felix', 'Salem'];
        } else {
            nombres = ['Luna', 'Cleo', 'Nala', 'Daisy', 'Mittens', 'Lily', 'Bella', 'Kitty', 'Coco', 'Molly'];
        }
    } else if (tipoMascota === 'exotico') {
        if (generoMascota === 'macho') {
            nombres = ['Spike', 'Ziggy', 'Gizmo', 'Draco', 'Rex', 'Iggy', 'Sparky', 'Thor', 'Titan', 'Bandit'];
        } else {
            nombres = ['Kiwi', 'Coco', 'Pippa', 'Ruby', 'Echo', 'Nibbles', 'Pebbles', 'Sasha', 'Tinker', 'Bella'];
        }
    }

    // Personalización basada en gustos musicales
    if (gustosMusicales === 'rock') {
        nombres.push('Jagger', 'Bowie', 'Freddie', 'Axl', 'Slash', 'Ziggy', 'Hendrix', 'Lennon', 'Ozzy', 'Cobain');
    } else if (gustosMusicales === 'pop') {
        nombres.push('Britney', 'Madonna', 'Bieber', 'Gaga', 'Ariana', 'Selena', 'Katy', 'Shakira', 'Dua', 'Taylor');
    } else if (gustosMusicales === 'clasica') {
        nombres.push('Mozart', 'Beethoven', 'Bach', 'Chopin', 'Vivaldi', 'Tchaikovsky', 'Handel', 'Liszt', 'Haydn', 'Debussy');
    } else if (gustosMusicales === 'reggaeton') {
        nombres.push('Balvin', 'Ozuna', 'Bad Bunny', 'Nicky', 'Yankee', 'Karol', 'Anuel', 'Rosalía', 'Maluma', 'Tego');
    } else if (gustosMusicales === 'electro') {
        nombres.push('Zedd', 'Tiesto', 'Avicii', 'Daft', 'Calvin', 'Skrillex', 'Diplo', 'Marshmello', 'Deadmau5', 'Martin');
    }

    // Personalización basada en hobbies
    if (hobbies === 'deporte') {
        nombres.push('Nike', 'Bolt', 'Jordan', 'Kobe', 'Serena', 'Messi', 'Rafa', 'Beckham', 'Tiger', 'Pele');
    } else if (hobbies === 'lectura') {
        nombres.push('Gatsby', 'Sherlock', 'Hemingway', 'Orwell', 'Poe', 'Austen', 'Bronte', 'Tolstoy', 'Hawthorne', 'Hugo');
    } else if (hobbies === 'viajes') {
        nombres.push('Marco', 'Luna', 'Indie', 'Rio', 'Sahara', 'Dakota', 'Cairo', 'Machu', 'Nile', 'Everest');
    } else if (hobbies === 'juegos') {
        nombres.push('Zelda', 'Mario', 'Link', 'Peach', 'Sonic', 'Pikachu', 'Cloud', 'Samus', 'Kratos', 'Luigi');
    } else if (hobbies === 'arte') {
        nombres.push('Picasso', 'Frida', 'Da Vinci', 'Monet', 'Dali', 'Rembrandt', 'Van Gogh', 'Matisse', 'Gauguin', 'Vermeer');
    }

    const nombreAleatorio = nombres[Math.floor(Math.random() * nombres.length)];
    document.getElementById('resultado').innerText = `Nombre sugerido: ${nombreAleatorio}`;
}
