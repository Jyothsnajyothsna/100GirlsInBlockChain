function reverseWords(sentence) {
    // Split method is used to break the sentence into an array of words
    const wordsArray = sentence.split(" ");
    
    // Reverse each word in the array,here map function is used to create new array where the reversed words are stored
    const reversedWordsArray = wordsArray.map(word => {
      return word.split("").reverse().join("");
    });
    
    // Join the reversed words array into a new sentence
    const reversedSentence = reversedWordsArray.join(" ");
    
    return reversedSentence;
  }
  
 const sentence = "This is a test sentence";
  const reversedSentence = reverseWords(sentence);
   console.log(reversedSentence); 
