export enum IUpVote {
  // eslint-disable-next-line no-unused-vars
  Selected = "selected",
  // eslint-disable-next-line no-unused-vars
  NotSelected = "not-selected",
}

export type IUpVoteContainer = {
  id: number;
  state: IUpVote;
  count: number;
};
