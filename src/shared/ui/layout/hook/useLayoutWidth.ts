import {useContext} from 'react';
import {LayoutContext} from '../MainLayout';

export function useLayoutWidth() {
  return useContext(LayoutContext);
}
