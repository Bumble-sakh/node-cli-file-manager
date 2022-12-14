export const copyFile = (sourcePath, destinationPath) => {
  return new Promise((resolve, reject) => {
    const input = fs.createReadStream(sourcePath, { flags: 'r', encoding: 'utf-8' });
    const output = fs.createWriteStream(destinationPath, { flags: 'wx', encoding: 'utf-8' });
    input.on('error', reject);
    output.on('error', reject);

    input.pipe(output);

    output.on('close', resolve);
  });
};
