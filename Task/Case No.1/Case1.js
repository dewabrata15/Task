// Saya menggunakan javascript
/**  Case 1 (Soal No.1-4)
 Andi menjual beraneka ragam buah. Diketahui catatan buah yang dimiliki Andi saat ini
adalah sebagai berikut. **/
    // type IFruit = {
    //     fruitId: number,
    //     fruitName: string,
    //     fruitType: 'IMPORT' | 'LOCAL',
    //     stock: number
    // } Saya comment karena saya menggunakan javascript dan saya menghapus variabel IFruit pada objek fruits

    const fruits = [
        {
        fruitId: 1,
        fruitName: 'Apel',
        fruitType: 'IMPORT',
        stock: 10
        },
        {
        fruitId: 2,
        fruitName: 'Kurma',
        fruitType: 'IMPORT',
        stock: 20
        },
        {
        fruitId: 3,
        fruitName: 'apel',
        fruitType: 'IMPORT',
        stock: 50
        },
        {
        fruitId: 4,
        fruitName: 'Manggis',
        fruitType: 'LOCAL',
        stock: 100
        },
        {
        fruitId: 5,
        fruitName: 'Jeruk Bali',
        fruitType: 'LOCAL',
        stock: 10,
        },
        {
        fruitId: 5,
        fruitName: 'KURMA',
        fruitType: 'IMPORT',
        stock: 20
        },
        {
        fruitId: 5,
        fruitName: 'Salak',
        fruitType: 'LOCAL',
        stock: 150
        }
    ]

//1. Buah apa saja yang dimiliki Andi? (fruitName)
function getFruitNames (fruits){
    const fruitNames = [];
    for (let i = 0; i < fruits.length; i++){
        if (!fruitNames.includes(fruits[i].fruitNames)){
            fruitNames.push(fruits[i].fruitName);
        }
    }
    return fruitNames
}

console.log("No.1 Buah yang dimiliki Andi:", getFruitNames(fruits));


/** 2. Andi memisahkan buahnya menjadi beberapa wadah berdasarkan tipe buah
(fruitType). Berapa jumlah wadah yang dibutuhkan? Dan ada buah apa saja di
masing-masing wadah? **/

function groupByType(fruits){

    const grouped = [];

    for (let i = 0; i < fruits.length; i++){
        const fruitType = fruits[i].fruitType
        const fruitName = fruits[i].fruitName

        if (!grouped[fruitType]){
            grouped[fruitType] = [];
        }

        if (!grouped[fruitType].includes(fruitName)){
            grouped[fruitType].push(fruitName);
        }
    }
    return{
        Total_Wadah : Object.keys(grouped).length,
        Buah_Per_Wadah : grouped
    }

}
console.log("No.2 Wadah dari Buah:", groupByType(fruits))


// 3. Berapa total stock buah yang ada di masing-masing wadah?

function getTotalStockByType(fruits){
    const result = {};

    for (let i = 0; i < fruits.length; i++){
        const fruitType = fruits[i].fruitType;
        const stock = fruits[i].stock

        if (!result[fruitType]){
            result[fruitType] = 0;
        }
        result[fruitType] += stock;
    }
    return result
}

console.log("Total stock buah per wadah:", getTotalStockByType(fruits))

/** 
4. Apakah ada komentar terkait kasus di atas? 
Duplikasi Data:
Beberapa fruitId memiliki nilai yang sama, seperti fruitId: 5. Hal tersebut dapat menyebabkan kebingungan karena setiap fruitId seharusnya unik.
Solusi: Setiap buah harus memiliki fruitId yang unik.

Penulisan buah yang tidak konsisten:
Beberapa nama buah memiliki huruf kapital yang tidak konsisten, seperti "Apel" dan "apel", "Kurma" dan "KURMA".
Hal tersebut dapat menyebabkan kebingungan karena di data tersebut berbeda penggunaan huruf kapital menandakan berbeda juga jenis buah padahal merupakan buah yang sama.
Solusi: Normalisasi nama buah agar konsisten (contoh: menggunakan huruf kecil saja).

Struktur Data:
Format data dan penamaan yang jelas dapat mencegah kesalahan dan ambigu dalam pengelolaan data.
**/