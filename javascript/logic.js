// Code credits: this code was written by Dr. Pavol Federl for the SENG 513 course at the UofC
// https://codepen.io/pfederl/pen/JEMKwB


function getStats(txt) {
    // you need to write your own code here
    let num_words = getWords(txt).length; // return the length of word array//
    let num_lines =  txt.split("\n").length  //return number of lines//

    return {
        nChars: txt.length,                                                     
        nWords: num_words,
        nLines: num_lines,
        nNonEmptyLines: getNonEmptyLines(txt),
        averageWordLength: avgLength(txt),
        maxLineLength: longestLine(txt),
        tenLongestWords: ["xxxxxxxxx", "123444445"],
        tenMostFrequentWords: ["a", "this", "the"]
    };

}
 
// Function that returns an array of words//
function getWords(txt){
    txt = txt.replace(/\n/g, " ");
    let words = txt.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '');
    let final = words.match(/[a-z]+|\d+/g);
    return final;
    
}
/*Get all the non empty lines*/
function getNonEmptyLines(txt){
    let current_line = txt.split("\n")  //get of lines//
    let no_lines = current_line.length // number of lines//
    let temp = 0;
    for(let i = 0; i < no_lines; i++){  //For every line//
        if (/\S/.test(current_line[i])){    //if not empty//
            temp = temp+1;
        }
    }
    return temp;
}
/* Get average word lengthh*/
function avgLength(txt){
    let temp_words = getWords(txt);
    let total_Words = 0;
    for (let i = 0; i < temp_words.length; i++){ //go through all words length//
        total_Words += temp_words[i].length;    //add to total amount of words//
    }
    return total_Words/temp_words.length;   //get the average//
}

/* get the longest line*/
function longestLine(txt){
    let current_line = txt.split("\n"); //get of lines//
    let longest=0;

    for (let i = 0; i < current_line.length; i++){  
        if(current_line[i].length >= longest){  //if current line is bigger than longest line.//
            longest =current_line[i].length;    // current line becomes the longest line//
        }
    } 
}

