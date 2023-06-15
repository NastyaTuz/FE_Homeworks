// Задача 1

const section = document.querySelector('section')
for(let i = 100; i >= 50; i-=10) {
section.innerHTML += `<div class="numbers">
<p>${[i]}</p>
</div>`
}

// Задача 2

const products = [
    {
        name: "Iphone 12",
        price: 10000
    },
    {
        name: "Iphone 13",
        price: 20000
    },
    {
        name: "Iphone 14",
        price: 25000
    }
]

const section2 = document.querySelector('.task2') 
for(let i = 0; i < products.length; i++) {
    section2.innerHTML += `<div class='strings_container'>
    <p>${products[i].name}</p>
    <p>${products[i].price}</p>

    </div>`
}
// Задача 3

const people = [
    {
        first_name: "Nastya",
        last_name: "Tuzikava",
        age: 25
    },
    {
        first_name: "Nika",
        last_name: "Gerina",
        age: 17
    },
    {
        first_name: "Maxim",
        last_name: "Usov",
        age: 15
    },
    {
        first_name: "Gleb",
        last_name: "Granovsky",
        age: 46
    }
]
    const main = document.querySelector('main')
    for(let i = 0; i < people.length; i++) {
        if(people[i].age > 18) {
        main.innerHTML += `<div class='users_container'>
        <h2>${people[i].first_name}</h2>
        <h3>${people[i].last_name}</h3>
        <p>${people[i].age}</p>
        </div>`
        }
    }