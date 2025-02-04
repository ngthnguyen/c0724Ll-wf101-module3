const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    gender: 'male',
    occupation: 'developer',
    nationality: 'America',
    city: 'New York',
    hobbies: ['reading', 'traveling', 'photography'],
    languages: ['English', 'Spanish'],
    education: {
        degree: 'Bachelor',
        major: 'Computer Science',
        university: 'Harvard University'
    }
};
const { 
    firstName,             
    gender,               
    education: { degree }, 
    languages              
} = person;
const student = {
    firstName,
    gender,
    degree,
    languages: languages.filter(language => language === 'English')
};
console.log(student);
