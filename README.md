# -LT-22_Optional_Chaining

Optional chaining adalah fitur baru dari ECMAScript (JavaScript) yang memungkinkan Anda untuk mengakses properti objek atau memanggil metode tanpa menghindari error "Cannot read property 'xxx' of undefined" atau "Cannot read property 'xxx' of null". Ini dilakukan dengan menambahkan operator "?" sebelum properti atau metode yang ingin diakses. Jika objek sebelum operator `"?"` adalah null atau undefined, maka tidak akan terjadi error dan akan mengembalikan nilai null.

Optional chaining juga dapat digunakan untuk mengakses properti dari objek nested. Sebagai contoh, jika Anda memiliki objek seperti:
    const obj = {
      data: {
        user: {
          name: "John",
          age: 30
        }
      }
    };
    
Anda dapat mengakses properti `"name"` dari objek `"user"` dengan menggunakan optional chaining seperti ini:

    const name = obj.data?.user?.name;

Jika objek `"data"` atau objek `"user"` tidak ada, maka ekspresi di atas akan mengembalikan nilai "undefined" tanpa menyebabkan error. Optional chaining juga dapat digunakan untuk memanggil metode dari objek. Sebagai contoh, jika Anda memiliki objek seperti:

    const obj = {
      data: {
        user: {
          name: "John",
          age: 30,
          sayName: function() {
            console.log(this.name);
          }
        }
      }
    };

Anda dapat memanggil metode `"sayName"` dari objek `"user"` dengan menggunakan optional chaining seperti ini:

    obj.data?.user?.sayName();

Jika objek `"data"` atau objek `"user"` tidak ada, maka ekspresi di atas tidak akan menyebabkan error. Optional chaining adalah fitur yang sangat berguna ketika bekerja dengan objek nested yang mungkin atau tidak memiliki properti atau metode yang ditentukan.

Selain itu, optional chaining juga dapat digunakan dengan operator `"?."` untuk mengakses elemen dari array. Sebagai contoh, jika Anda memiliki array seperti:
    
    const arr = [1, 2, 3];

Anda dapat mengakses elemen ke-2 dari array dengan menggunakan operator `"?."` seperti ini:

    const secondElement = arr?.[1];

Jika array tidak ada atau kurang dari 2 elemen, maka ekspresi di atas akan mengembalikan nilai `"undefined"` tanpa menyebabkan error. Secara keseluruhan, Optional chaining sangat berguna dalam membuat kode JavaScript Anda lebih aman dan mudah dibaca, karena ini memungkinkan Anda untuk menghindari error yang disebabkan oleh properti atau metode yang tidak ada. Namun, perlu diingat bahwa optional chaining hanya bekerja pada objek atau array yang mendukung properti atau metode yang ditentukan, jadi jangan menggunakan optional chaining pada tipe data yang tidak mendukung properti atau metode seperti number, string, dan boolean.
