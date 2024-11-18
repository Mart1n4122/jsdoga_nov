const vowels = 'aeiou';

function disemvowel(str) {
  return str
    .split('')
    .filter(letter => !vowels.includes(letter.toLowerCase()))
    .join('');
}


function dateCorrect(datestring) {
    if (typeof datestring === 'string') {
    
      if (datestring.length === 0 ) {
        return '';
      }
    
      var found = datestring.match(/(\d{1,2})\.(\d{1,2})\.(\d{4})/);
  
      if (found) {
        var date = new Date(found[3], found[2] - 1, found[1]),
            day = date.getDate(),
            month = date.getMonth() + 1;
  
        if (day < 10)  {
          day = '0' + day;
        }
        
        if (month < 10)  {
          month = '0' + month;
        }
  
        return `${day}.${month}.${date.getFullYear()}`;
      }
    }
  
    return null;
  }


  function DNAtoRNA(dna){
    return dna.replace(/T/g, 'U');
  }


  const fizzBuzz = n => {
    switch(0){
        case (n % 3) + (n % 5):
        return "FizzBuzz";
        break;
        case (n % 3):
        return "Fizz";
        break;
        case (n % 5):
        return "Buzz";
        break;
        default:
        return n;
    }
  };