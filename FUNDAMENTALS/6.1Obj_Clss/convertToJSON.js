function jasonStr (name, lastName, hairColor){
    let person = {
        name,
        lastName,
        hairColor
    };
    
    let asString = JSON.stringify(person);
    console.log(asString);
}

jasonStr('George', 'Jones', 'Brown');
