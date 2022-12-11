import path from 'path';
import { homedir } from 'os';

const store = {
  startPath: '',
  currentPath: '',
  rootDir: '',
};

const rootDir = () => {
  let lastDir = path.resolve(homedir());
  let dir = '';

  while (lastDir !== dir) {
    dir = lastDir;
    lastDir = path.resolve(lastDir, '../');
  }

  return dir;
};

const initialStore = () => {
  store.startPath = homedir();
  store.currentPath = store.startPath;
  store.rootDir = rootDir();
};

initialStore();

export default store;
