let namaSiswa = ['Fikri', 'Diki', 'Rahmat']
console.log (namaSiswa)
console.log (namaSiswa[0])

//object
//let nama ="Ade"
//let alamat ="tangerang"
//let umur = 20

//console.log (nama)
//console.log (alamat)
//console.log (umur)

let dataPribadi = {
    nama: "Ade",
    alamat: "Tangerang",
    umur: 20 
}

console.log(dataPribadi)
console.log(dataPribadi.alamat)

//array of object

let dataPersonal = [
    {
        nama: "rizky",
        alamat: "Jakarta"
    },
    {
        nama: "leo",
        alamat: "Bandung"
    },
    {
        nama: "wawan",
        alamat: "yogya"
    }
]
console.log(dataPersonal)

//mengisi data
let data = []

function addData() {
    let person = {
        title: "Harga Anak Ayam",
        content: "Harga anak ayam sedang murah"
    }

    data.push(person)
    console.log(data)
}