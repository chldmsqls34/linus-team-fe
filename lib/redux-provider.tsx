'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { store } from './index'
import{persistStore} from 'redux-persist'

persistStore(store);
export default function reduxProvider({children}: {children: React.ReactNode}) 
{
  return( <Provider store={store}>{children}</Provider>)
}