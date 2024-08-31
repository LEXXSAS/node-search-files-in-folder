const fs = require('fs');
const readline = require('node:readline');
let os = require('os')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

(function filesOnDir() {
  const homedir = os.homedir();
  const pathToDir = `${homedir}/Downloads`;
  function dirExist(p) {
    return fs.existsSync(pathToDir)
  }

  if (dirExist()) {
    const allFiles = fs.readdirSync(pathToDir);
    // let filesArr = [];
    // allFiles.forEach((file, id) => filesArr.push({id, file}))
  
    function getWord(word, a1) {
      return a1.filter(s => {
        const regex = new RegExp(word, 'gi');
        return s.match(regex);
      })
    }

    rl.question('Введите слово для поиска файла: ', (searchWord) => {
      if (searchWord.length > 0) {
        const ourWord =  getWord(searchWord, allFiles);
        console.log(ourWord)
      } else {
        console.log('вы ничего не ввели...')
      }
      rl.close();
    })
  
    return allFiles;
  } else {
    console.log('путь не корректен')
  }
})();

// filesOnDir()
