const file = require('fs');
const path = require('path')

const directoryPath  = 'C:/Users/DELL/Desktop';
const Folder = 'Files';

const DirPath = path.join(directoryPath  , Folder);
file.readdir(DirPath, (err, files) => {
    if (err) {
        console.log(err);
    }
    else {
        files.forEach(f => {
            const fullFilePath = path.join(DirPath, f);
            file.stat(fullFilePath, (err, st) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(fullFilePath)
                    console.log(`${st.isDirectory() ? 'Dir' : 'File'}`)
                }
            })
        }
        )
    }
})
