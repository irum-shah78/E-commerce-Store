// src/hooks.ts
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../store/index.ts';

export const useAppDispatch = () => useDispatch<AppDispatch>();
