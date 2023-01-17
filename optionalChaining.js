// membuat variabel person 
let person = {};
console.log(person?.person?.country);   // output : undefined

// membuat sebuah variabel objek yang valuenya dalam bentuk objek
const obj = {
    data: {
        user: {
            name: "John",
            age: 30
        }
    }
};
console.log(obj?.data?.user?.name);   // output : John

// membuat sebuah variabel dataArray yang valuenya dalam bentuk array
const dataArray = [1, "hallo", 4, "apa kabar"];
const data = dataArray?.[3];
console.log(data);    // output : apa kabar

// membuat sebuah variabel objek yang valuenya dalam bentuk objek
const objek = {
    da: {
        us: {
            nama: "Jones",
            age: 30,
            sayName: function () {
                console.log(this.nama);
            }
        }
    }
};
const hasil = objek.da?.us?.sayName();
console.log(hasil);     // output : undefined

const objeck = {
    date: {
        use: {
            sayNama: function () {
                name: "Johannes",
                    console.log(sayName);
            },
        }
    }
}
const result = objeck.date?.use?.sayNama();
console.log(result);    // <-- output : error



