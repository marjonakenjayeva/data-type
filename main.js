let string = prompt("String typedagi malumotni kiriting")
let number = +prompt("Number typedagi malumotni kiriting")
let boolean = !prompt("Boolean typedagi malumotni kiriting")


confirm('Hamma malumotlarni togri kiritganingizga ishonchingiz komilmi?')

alert(` Siz kiritgan ${string} so'zi: ${typeof string} ga tegishli
        Siz kiritgan ${number} sozi: ${typeof number} ga tegishli
        Siz kiritgan ${boolean} sozi: ${typeof boolean} ga tegishli
     `)