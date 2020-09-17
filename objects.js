console.log('************АНКЕТА************')

let personArray = [{
        name: 'Vasiliy',
        surName: 'Ivanov',
        sex: 'male',
        age: 20,
        education: 'high',
        marriage: 'married',
        employment: 'employed',
        city: 'Minsk'

    },
    {
        name: 'Alexander',
        surName: 'Udelmeyer',
        sex: 'male',
        age: 25,
        education: 'high',
        marriage: 'married',
        employment: 'unemployed',
        city: 'Minsk'
    },
    {
        name: 'Yulia',
        surName: 'Goncharova',
        sex: 'female',
        age: 28,
        education: 'high',
        marriage: 'unmarried',
        employment: 'employed',
        city: 'Minsk'
    },
    {
        name: 'Oksana',
        surName: 'Lapteva',
        sex: 'female',
        age: 30,
        education: 'middle',
        marriage: 'married',
        employment: 'employed',
        city: 'Grodno'
    },
    {
        name: 'Maksim',
        surName: 'Lugovoy',
        sex: 'male',
        age: 48,
        education: 'none',
        marriage: 'unmarried',
        employment: 'unemployed',
        city: 'Vitebsk'
    },
    {
        name: 'Anton',
        surName: 'Kartsev',
        sex: 'male',
        age: 55,
        education: 'middle',
        marriage: 'married',
        employment: 'unemployed',
        city: 'Grodno'
    },
    {
        name: 'Violetta',
        surName: 'Sokolova',
        sex: 'female',
        age: 39,
        education: 'low',
        marriage: 'unmarried',
        employment: 'employed',
        city: 'Brest'
    },
    {
        name: 'Inga',
        surName: 'Dragunova',
        sex: 'female',
        age: 47,
        education: 'middle',
        marriage: 'married',
        employment: 'unemployed',
        city: 'Brest'
    },
    {
        name: 'Leonid',
        surName: 'Kaufmann',
        sex: 'male',
        age: 33,
        education: 'high',
        marriage: 'divorced',
        employment: 'employed',
        city: 'Gomel'
    },
    {
        name: 'Ruslan',
        surName: 'Shtrapnidze',
        sex: 'male',
        age: 41,
        education: 'high',
        marriage: 'divorced',
        employment: 'unemployed',
        city: 'Vitebsk'
    },
]

console.log('Товарищи, кому за 30:');
personArray.forEach((person) => {
    if (person.age > 30) {
        console.log(person.name, person.surName, person.age);
    }
})

console.log('Состоящие в браке и проживающие в г.Минске:')
personArray.forEach((person) => {
    if (person.city === 'Minsk' && person.marriage === 'married') {
        console.log(person.name, person.surName);
    }
})

console.log('Безработные из г.Гродно:')
personArray.forEach((person) => {
    if (person.city === 'Grodno' && person.employment === 'unemployed') {
        console.log(person.name, person.surName);
    }
})



console.log('////////////////   АНКЕТА 2  ////////////////////////////')

const age = function getAge(birthDate) {
    let age = Date.now() - birthDate
    return realAge = Math.floor(age / 31557600000)
}


function agePeriod(age) {

    if (age <= 21) {
        return 'young';
    };
    if (age > 21 && age < 50) {
        return 'middle-aged';
    };
    return 'old';
}


const genPerson = (LastN, firstN, middleN, birthDate, sex, city, employment, marriage, education) => ({
    LastName: LastN,
    FirstName: firstN,
    MiddleName: middleN,
    BirthDate: `${birthDate.getDate()}, ${birthDate.getMonth()+1}, ${birthDate.getFullYear()}`,
    Sex: sex,
    Age: age(birthDate),
    lifePeriod: agePeriod(age(birthDate)),
    CityResidence: city,
    Employment: employment,
    MarriageStatus: marriage,
    EducationLevel: education,

})




const genPeople = () => {
    return [
        genPerson('Serov', 'Dmitriy', 'Ivanovich', new Date(1985, 8, 20), 'male', 'Grodno',
            'unemployed', 'married', 'basic'),

        genPerson('Guboshlep', 'Alexander', 'Grigorievich', new Date(1981, 4, 14), 'male', 'Gomel',
            'employed', 'unmarried', 'middle'),

        genPerson('Saskachevan', 'Robert', '-', new Date(1970, 1, 18), 'male', 'Mariampole',
            'unemployed', 'unmarried', 'high'),

        genPerson('Gureeva', 'Margarita', 'Maksimovna', new Date(1988, 9, 29), 'female', 'Minsk',
            'employed', 'divorced', 'high'),

        genPerson('Kaufmann', 'Kira', 'Borisovna', new Date(1991, 7, 12), 'female', 'Gdansk',
            'employed', 'divorced', 'high'),

        genPerson('Mikoyan', 'Vagit', 'Abdulvagitovich', new Date(1949, 6, 17), 'male', 'Moscow',
            'unemployed', 'married', 'basic'),

        genPerson('Chufgendthner', 'Miroslav', 'Miroslavovoch', new Date(1994, 8, 19), 'male', 'Brest',
            'employed', 'unmarried', 'high'),

        genPerson('Fadeeva', 'Marina', 'Antonovna', new Date(1969, 7, 30), 'female', 'St.Petersbrg',
            'employed', 'married', 'middle'),

        genPerson('Lee', 'ji', 'Sun', new Date(1977, 6, 26), 'male', 'Vladivostok',
            'unemployed', 'married', 'basic'),

        genPerson('Vadestin', 'Oleg', 'Pavlovich', new Date(1998, 7, 17), 'male', 'Brest',
            'employed', 'unmarried', 'middle'),

        genPerson('Nifigaka', 'Vysotaka', '-', new Date(1975, 3, 19), 'female', 'Osaka',
            'employed', 'unmarried', 'middle')
    ]
}

const people = genPeople();

console.log(people)




const mmAge = [];

let ageSum = 0;

for (let i = 0; i < people.length; i += 1) {

    mmAge.push(people[i].Age);

    ageSum += people[i].Age
};
let maxAge = Math.max.apply(null, mmAge);

let minAge = Math.min.apply(null, mmAge);

let midAge = ageSum / people.length;

console.log(`Minimal age of persons is: ${minAge}, maximal age of persons is: ${maxAge} and middle age of this gang is: ${midAge}`);

people.forEach((person) => {
    if (person.Age === maxAge) {
        console.log(`${person.FirstName} ${person.MiddleName} ${person.LastName} in the age of ${maxAge} is the oldest person`)
    }
    if (person.Age === minAge) {
        console.log(`${person.FirstName} ${person.MiddleName} ${person.LastName} in the age of ${minAge} is the youngest person`)
    }
});