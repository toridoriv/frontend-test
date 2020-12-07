import { ITag, ITagSection } from './../../scripts/imports';

const drinks:Array<ITag> = [{ title: 'Cups of cofee' }, { title: 'Glasses of water' }, { title: 'Martinis' }];
const food:Array<ITag> = [{ title: 'Hot-dogs' }, { title: 'Cupcakes eaten' }, { title: 'Chicken wings' }];
const misc:Array<ITag> = [{ title: 'Times sneezed' }, { title: 'Naps' }, { title: 'Daydreaming' }];

export const listOfExamples:Array<ITagSection> = [
  {
    category: 'Drinks',
    tags: drinks
  },
  {
    category: 'Food',
    tags: food
  },
  {
    category: 'Misc',
    tags: misc
  }
];
