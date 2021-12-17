import { createStore } from "vuex";
import { IUpVote } from "./types";
import type { IUpVoteContainer } from "./types"

export type RootState = {
  containerList: Array<IUpVoteContainer>;
};

const store = createStore({
  state(): RootState {
    return {
      containerList: [
        {
          id: 1,
          state: IUpVote.NotSelected,
          count: 0,
        },
      ],
    };
  },
  mutations: {
    addContainer(state: RootState) {
      const container = {
        id: state.containerList[state.containerList.length - 1].id + 1,
        state: IUpVote.NotSelected,
        count: 0,
      };

      state.containerList.push(container);
    },
    addUpVote(state: RootState, id: number) {
      const index = state.containerList.findIndex(
        (container) => container.id === id
      );
      state.containerList[index].count++;
    },
    toggleUpVote(state: RootState, id: number) {
      const index = state.containerList.findIndex(
        (container) => container.id === id
      );
      
      state.containerList[index].state =
        state.containerList[index].state === IUpVote.NotSelected
          ? IUpVote.Selected
          : IUpVote.NotSelected;
    },
  },
  actions: {
    addUpVote(context, id: number) {
      context.commit("addUpVote", id);
    },
    addContainer(context) {
      context.commit("addContainer");
    },
    toggleUpVote(context, id: number) {
      context.commit("toggleUpVote", id);
    },
  },
});

export default store;
