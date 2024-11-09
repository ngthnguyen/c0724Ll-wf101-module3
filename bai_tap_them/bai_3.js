const sv1 = {
    firstName: 'John',
    gender: 'male',
    degree: 'Bachelor',
    english: 'English'
};

const sv2 = {
    name: 'John', 
    gender: 'male',
    degree: 'Bachelor',
    english: 'English'
};

const sinhVien = (firstName = "Quân", degree = "NA") => {
    return { firstName, degree }; 
};

const { firstName = 'Quân', degree = 'NA' } = sv2;

console.log(sinhVien(firstName, degree));
