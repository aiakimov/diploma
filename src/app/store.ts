import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import alertsSlice from "./slices/alertsSlice";
import burgerMenuIsOpen from "./slices/burgerSlice";
import modalSlice from "./slices/modalSlice";
import isSelestedMenuItem from "./slices/NavigationSlice";
import reviewsSlice from "./slices/reviewsSlice";
import servicesSlice, { isLoadingServices } from "./slices/servicesSlice";
import spcialistsSlice, {
  isLoadingSpetialists,
} from "./slices/specialistsSlice";
import toBackBtn from "./slices/toBackBtnSlice";
import widgetMenuIsOpen from "./slices/widgetSlice";

export const store = configureStore({
  reducer: {
    reviews: reviewsSlice,
    alerts: alertsSlice,
    burger: burgerMenuIsOpen,
    navigation: isSelestedMenuItem,
    specialists: spcialistsSlice,
    services: servicesSlice,
    servicesByType: servicesSlice,
    loadingServices: isLoadingServices,
    loadingSpecialists: isLoadingSpetialists,
    widget: widgetMenuIsOpen,
    toBackBtn: toBackBtn,
    modal: modalSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
