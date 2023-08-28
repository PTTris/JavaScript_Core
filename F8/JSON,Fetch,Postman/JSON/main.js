// JSON là một định dạng dạng STRING được sử dụng phổ biến hiện nay (Javascript Object Notation)
// JSON: Number, String, Boolean, Null, Array, Object

//Stringify / Parse 

let jsonArray = '["JS", "HTML", "CSS"]';

let jsonObject = '{"name":"PT","age":20}';

let jsonNumber = '20';

let jsonBoolean = 'true';

let jsonNull = 'null';

let jsonUndefined = 'undefined';

    // Parse

    let jsArray = JSON.parse(jsonArray);
    console.log(jsArray);

    let jsObject = JSON.parse(jsonObject);
    console.log(jsObject);

    // Stringify
    const arrJS = [1,2,3,4,5];
    let jsonNewArray = JSON.stringify(arrJS);
    console.log(jsonNewArray);


