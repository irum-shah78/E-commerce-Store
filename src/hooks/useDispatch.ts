// src/hooks.ts
// import { useDispatch } from 'react-redux';
// import type { AppDispatch } from '../store/index.ts';

// export const useAppDispatch = () => useDispatch<AppDispatch>();


// src/store/hooks.ts
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../store/index.ts';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

