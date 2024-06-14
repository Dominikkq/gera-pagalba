import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mblMenu: false,
  dropdown: false,
  collection_activity_item_data: [],
  trendingCategoryItemData: [],
  sortedtrendingCategoryItemData: [],
  collectiondata: [],
  sortedCollectionData: [],
  renkingData: [],
  filteredRenkingData: [],
  statusModal: false,
  validationModal: false,
  statusDone: false,
  statusFailed: false,
  profileEditModal: false,
  buyModal: false,
  emailVerifiedModal: false,
  confirmAppointmentModalValue: false,
  confirmAppointmentModalData: {},
  trendingCategorySorText: "",
  reasonModal: false,
  busyModal: false,
  busyModalData: {},
  forgotPasswordModal: false,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    openMblMenu: (state) => {
      state.mblMenu = true;
    },
    closeMblMenu: (state) => {
      state.mblMenu = false;
    },

    openDropdown: (state) => {
      state.dropdown = true;
    },
    closeDropdown: (state) => {
      state.dropdown = false;
    },
    handle_collection_activity_item_data: (state, payload) => {
      state.collection_activity_item_data = payload.data;
    },
    statusDone: (state) => {
      state.statusDone = true;
      state.statusFailed = false;
    },
    statusFailed: (state) => {
      state.statusFailed = true;
      state.statusDone = false;
    },

    statusModalShow: (state) => {
      state.statusModal = true;
    },
    statusModalhide: (state) => {
      state.statusModal = false;
      state.statusDone = false;
      state.statusFailed = false;
    },
    reasonModalShow: (state, action) => {
      state.reasonModal = true;
      state.reasonAppointmentID = action.payload;
    },
    reasonModalHide: (state) => {
      state.reasonModal = false;
    },
    busyModalShow: (state, action) => {
      state.busyModal = true;
      state.busyModalData = action.payload;
    },
    busyModalHide: (state) => {
      state.busyModal = false;
    },
    profileEditModalShow: (state, action) => {
      state.profileEditModal = true;
    },
    bidsModalHide: (state) => {
      state.profileEditModal = false;
    },
    createModalShow: (state) => {
      state.buyModal = true;
    },
    buyModalHide: (state) => {
      state.buyModal = false;
    },
    emailVerifiedModalHide: (state) => {
      state.emailVerifiedModal = false;
    },
    emailVerifiedModalShow: (state) => {
      state.emailVerifiedModal = true;
    },
    forgotPasswordModalShow: (state) => {
      console.log("wwdwdwwdwd");
      state.forgotPasswordModal = true;
    },
    forgotPasswordModalHide: (state) => {
      state.forgotPasswordModal = false;
    },
    showConfirmAppointmentModal: (state, action) => {
      state.confirmAppointmentModalData = [];
      state.confirmAppointmentModalValue = true;
      state.confirmAppointmentModalData = action.payload;
    },
    closeConfirmAppointmentModal: (state) => {
      state.confirmAppointmentModalValue = false;
    },
    updateTrendingCategoryItemData: (state, action) => {
      state.trendingCategoryItemData = action.payload;
      state.sortedtrendingCategoryItemData = action.payload;
    },
    updatetrendingCategorySorText: (state, action) => {
      const sortText = action.payload;
      if (sortText === "Price: Low to High") {
        state.sortedtrendingCategoryItemData =
          state.trendingCategoryItemData.sort(
            (a, b) => a.sortPrice - b.sortPrice
          );
      } else if (sortText === "Price: high to low") {
        state.sortedtrendingCategoryItemData =
          state.trendingCategoryItemData.sort(
            (a, b) => b.sortPrice - a.sortPrice
          );
      } else if (sortText === "Recently Added") {
        state.sortedtrendingCategoryItemData =
          state.trendingCategoryItemData.sort((a, b) => a.addDate - b.addDate);
      } else if (sortText === "Auction Ending Soon") {
        state.sortedtrendingCategoryItemData =
          state.trendingCategoryItemData.sort((a, b) => b.addDate - a.addDate);
      } else {
        state.sortedtrendingCategoryItemData = state.trendingCategoryItemData;
      }
    },
    updateTrendingCategoryItemByInput: (state, action) => {
      const text = action.payload;
      if (text === "Verified Only") {
        state.sortedtrendingCategoryItemData =
          state.trendingCategoryItemData.filter((item) => {
            return item.verified;
          });
      } else if (text === "NFSW Only") {
        state.sortedtrendingCategoryItemData =
          state.trendingCategoryItemData.filter((item) => {
            return item.nfsw;
          });
      } else if (text === "Show Lazy Minted") {
        state.sortedtrendingCategoryItemData =
          state.trendingCategoryItemData.filter((item) => {
            return item.lazyMinted;
          });
      } else {
        state.sortedtrendingCategoryItemData = state.trendingCategoryItemData;
      }
    },
    collectCollectionData: (state, action) => {
      const data = action.payload;
      state.collectiondata = data;
      state.sortedCollectionData = data;
    },
    updateCollectionData: (state, action) => {
      const text = action.payload;
      console.log(text);
      if (text === "trending") {
        const tampItem = state.collectiondata.filter((item) => item.trending);
        state.sortedCollectionData = tampItem;
      }
      if (text === "top") {
        const tampItem = state.collectiondata.filter((item) => item.top);
        state.sortedCollectionData = tampItem;
      }
      if (text === "recent") {
        const tampItem = state.collectiondata.filter((item) => item.recent);
        state.sortedCollectionData = tampItem;
      }
      // state.sortedCollectionData = state.collectiondata;
    },
    collectRenkingData: (state, action) => {
      state.renkingData = action.payload;
      state.filteredRenkingData = action.payload;
    },
    updateRenkingData: (state, action) => {
      const text = action.payload;
      let tempItem = state.renkingData.filter((item) => item.category === text);
      if (text === "All") {
        tempItem = state.renkingData;
      }
      state.filteredRenkingData = tempItem;
    },
    updateRenkingDataByBlockchain: (state, action) => {
      const text = action.payload;
      let tempItem = state.renkingData.filter(
        (item) => item.blockchain === text
      );
      if (text === "All") {
        tempItem = state.renkingData;
      }
      state.filteredRenkingData = tempItem;
    },
    updateRenkingDataByPostdate: (state, action) => {
      const text = action.payload;
      let tempItem = state.renkingData.filter((item) => item.postDate === text);
      if (text === "All Time" || text === "Last Year") {
        tempItem = state.renkingData;
      }
      state.filteredRenkingData = tempItem;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setCreateData,
  returnAll,
  openMblMenu,
  closeMblMenu,
  openDropdown,
  closeDropdown,
  statusModalShow,
  statusModalhide,
  statusDone,
  statusFailed,
  profileEditModalShow,
  bidsModalHide,
  createModalShow,
  buyModalHide,
  showConfirmAppointmentModal,
  closeConfirmAppointmentModal,
  updatetrendingCategorySorText,
  updateTrendingCategoryItemData,
  updateTrendingCategoryItemByInput,
  collectCollectionData,
  updateCollectionData,
  collectRenkingData,
  updateRenkingData,
  updateRenkingDataByBlockchain,
  updateRenkingDataByPostdate,
  reasonModalShow,
  reasonModalHide,
  busyModalHide,
  busyModalShow,
  forgotPasswordModalShow,
  forgotPasswordModalHide,
  emailVerifiedModalShow,
  emailVerifiedModalHide,
} = counterSlice.actions;

export default counterSlice.reducer;
