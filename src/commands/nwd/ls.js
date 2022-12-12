import { readdir } from 'fs/promises';
import store from '../../store/store.js';

export const ls = async () => {
  try {
    const files = await readdir(store.currentPath, { withFileTypes: true });
    const result = files.map((file) => {
      return {
        name: file.name,
        type: file.isFile() ? 'file' : file.isDirectory() ? 'directory' : file.isSymbolicLink() ? 'link' : 'unknown',
      };
    });

    result
      .sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        }
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return 1;
        }
        return 0;
      })
      .sort((a, b) => {
        if (a.type < b.type) {
          return -1;
        }
        if (a.type > b.type) {
          return 1;
        }
        return 0;
      });

    console.table(result);
  } catch (err) {
    console.error(err.message);
  }
};
