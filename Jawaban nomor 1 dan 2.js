
// Reverse alphabet untuk string "NEGIE1"
function reverseAlphabet(str) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const reversedAlphabet = alphabet.split('').reverse().join('');
    const letters = str.slice(0, -1).toUpperCase(); // Ambil huruf, abaikan angka di akhir
    const number = str.slice(-1); // Ambil angka di akhir
    let result = '';

    for (let char of letters) {
        const index = alphabet.indexOf(char);
        if (index !== -1) {
            result += reversedAlphabet[index]; // Ganti huruf dengan yang terbalik
        } else {
            result += char; // Jika bukan huruf, tambahkan langsung
        }
    }

    return result + number; // Tambahkan angka di akhir
}

const reversed = reverseAlphabet("NEGIE1");
console.log(reversed); // EIGEN1


// Mencari kata terpanjang dalam kalimat
function longest(sentence) {
    const words = sentence.split(' ');
    let longestWord = '';

    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word; // Jika kata ini lebih panjang, ambil sebagai yang terpanjang
        }
    }

    return longestWord;
}

const sentence = "Saya sangat senang mengerjakan soal algoritma";
const longestWord = longest(sentence);
console.log(longestWord); // mengerjakan
