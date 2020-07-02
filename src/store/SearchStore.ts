// import { observable, action, decorate, computed } from "mobx"
import { IBoxscore } from "../models/IBoxscore"
import { IFranchise } from "../models/IFranchise"

export function SearchStore() {
  return {
    selectedFranchise: '' as string,
    selectedYear: '' as string,
    boxscores: [] as Array<IBoxscore>,
    franchises: [] as Array<IFranchise>,

    updateYear (year: string) {
      this.selectedYear = year
    },

    updateFranchise (franchise: string) {
      this.selectedFranchise = franchise
    },

    updateFranchises (franchises: Array<IFranchise>) {
      this.franchises = franchises
    },

    updateBoxscores (boxscores: Array<IBoxscore>) {
      this.boxscores = boxscores
    },

    get getSelectedYear(): string {
      return this.selectedYear
    },

    get getSelectedFranchise(): string {
      return this.selectedFranchise
    },

    get getBoxscores(): Array<IBoxscore> {
      return this.boxscores
    },

    get getFranchises(): Array<IFranchise> {
      return this.franchises
    }
  }
}

// decorate(SearchStore, {
//   selectedFranchise: observable,
//   selectedYear: observable,
//   boxscores: observable,
//   franchises: observable,

//   updateFranchise: action,
//   updateYear: action,
//   updateBoxscores: action,
//   updateFranchises: action,

//   getSelectedFranchise: computed,
//   getSelectedYear: computed,
//   getBoxscores: computed,
//   getFranchises: computed
// })
