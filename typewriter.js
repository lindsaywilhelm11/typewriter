const sentence = "hello there from lighthouse labs";

for (let char = 0; char < sentence.length; char++) {
    setTimeout(() => {
      process.stdout.write(sentence[char],);
    }, char * 50, console.log('\n')) 
  }





  