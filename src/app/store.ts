import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import burgerMenuIsOpen from "./slices/burgerSlice";
import isSelestedMenuItem from "./slices/navigationSlice";
import servicesSlice, { isLoadingServices } from "./slices/servicesSlice";
import spcialistsSlice, {
  isLoadingSpetialists,
} from "./slices/specialistsSlice";

export const store = configureStore({
  reducer: {
    burger: burgerMenuIsOpen,
    navigation: isSelestedMenuItem,
    specialists: spcialistsSlice,
    services: servicesSlice,
    servicesByType: servicesSlice,
    loadingServices: isLoadingServices,
    loadingSpecialists: isLoadingSpetialists,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
