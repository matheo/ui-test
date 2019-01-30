/**
 * Different Trial Interfaces
 */

export interface Trial {
  name: string;
  image: string;
  description: string;
  category: string;
  date: string;
  expiry?: string;
}

export interface TrialVotes {
  voted: boolean;
  pro: number;
  con: number;
}

export interface TrialItem extends Trial {
  votes: TrialVotes;
}
