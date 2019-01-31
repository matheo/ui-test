import { TrialItem } from '../model';

export const list: Array<TrialItem> = [
  {
    id: '5',
    name: 'Pope Francis',
    image: 'pope.png',
    description:
      "He's talking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)",
    category: 'Society',
    date: '3 days ago', // TODO moment pipe
    expiry: '22 days', // TODO moment pipe
    featured: true,
    votes: {
      voted: false,
      pro: 1,
      con: 1
    }
  },
  {
    id: '4',
    name: 'Kanye West',
    image: 'kanye.png',
    description:
      'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
    category: 'Entertainment',
    date: '15 days ago', // TODO moment pipe
    votes: {
      voted: false,
      pro: 18,
      con: 52
    }
  },
  {
    id: '3',
    name: 'Mark Zuckerberg',
    image: 'mark.png',
    description:
      'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
    category: 'Business',
    date: '1 month ago', // TODO moment pipe
    votes: {
      voted: true,
      pro: 36,
      con: 64
    }
  },
  {
    id: '2',
    name: 'Cristina Fernández de Kirchner',
    image: 'kirchner.png',
    description:
      'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
    category: 'Politics',
    date: '2 months ago', // TODO moment pipe
    votes: {
      voted: false,
      pro: 76,
      con: 24
    }
  },
  {
    id: '1',
    name: 'Malala Yousafzai',
    image: 'malala.png',
    description:
      'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
    category: 'Peace',
    date: '3 months ago', // TODO moment pipe
    votes: {
      voted: false,
      pro: 67,
      con: 33
    }
  }
];
