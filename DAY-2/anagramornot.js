function areAnagrams(string1, string2) {
    const sortedString1 = string1.toLowerCase().split('').sort().join('');
    const sortedString2 = string2.toLowerCase().split('').sort().join('');
  
    return sortedString1 === sortedString2;
  }
  console.log(areAnagrams("study", "dusty")); 
  