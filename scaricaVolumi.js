const fs = require('fs');
const https = require('https');


// Lunghezza batch download per capitolo ( ci sono capitoli da 40 jpg )
const batchSize = 40;

// Percorso console per avviare script
//  >>>cd "C:\Users\Your User\Desktop\Scarica Capitoli"
//  >>>node scaricaVolumi.js

// Ricorda!
// 9 capitoli cambiare slice 0 9
// 10 capitoli cambiare slice a  0 10
// 11 capitoli cambiare slice a 0 11 ecc.

// Definisci i percorsi per i singoli capitoli
const directoryPaths = [
    // Volume 99
    "C:\\Users\\Your User\\Desktop\\One Piece\\Volume 099\\Capitolo 995 - Il giuramento della Kunoichi",
]   


// Cambia numero finale url per ogni volume che vuoi
const baseUrl1 = "https://onepiecepower.com/manga8/onepiece/volumiSpeciali/volumiColored/volume099/";

const extension = ".jpg";

function sanitizeFileName(fileName) {
    // Rimuovi spazi e trattini e sostituiscili con trattini bassi o underscore
    return fileName.replace(/ /g, '_').replace(/-/g, '_').replace(/__/g, '_');
}

function downloadChapterImages(baseUrl, directoryPath, chapter, imageIndex = 1) {
    if (imageIndex > batchSize) {
        return; // Stop if batchSize is reached.
    }

    const imageUrl = `${baseUrl}${chapter}/${imageIndex.toString().padStart(2, '0')}${extension}`;
    const fileStream = fs.createWriteStream(`${directoryPath}/${imageIndex.toString().padStart(2, '0')}${extension}`);

    https.get(imageUrl, (response) => {
        if (response.statusCode === 200) {
            response.pipe(fileStream);
            response.on('end', () => {
                console.log(`Downloaded: ${imageUrl}`);
                downloadChapterImages(baseUrl, directoryPath, chapter, imageIndex + 1);
            });
        } else {
            console.log(`File not found: ${imageUrl}. Stopping download for ${directoryPath}.`);
        }
    }).on('error', (error) => {
        console.error(`Error downloading: ${imageUrl}`);
    });
}


// Scarica le immagini per il volume scelto
directoryPaths.slice(0, 10).forEach((directoryPath, index) => {
    // Inserire il numero del capitolo iniziale del volume scelto
    const chapter = `${index + 995}`; // Calcola il numero del capitolo
    downloadChapterImages(baseUrl1, directoryPath, chapter);
});