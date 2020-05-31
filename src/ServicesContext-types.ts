import { ServicesContainer } from '@manzano/services'
import { ReactNode } from 'react'

export interface ServicesProviderProps {
  servicesContainer: ServicesContainer
  children?: ReactNode
}
