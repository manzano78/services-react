import React, { createContext, useContext } from 'react'
import { AbstractService, ServicesContainer } from '@manzano/services'
import { ServiceConstructor } from '@manzano/services/AbstractService'
import { ServicesProviderProps } from './ServicesContext-types'

const ServicesContext = createContext<ServicesContainer>(null as any)

export function ServicesProvider(props: ServicesProviderProps) {
  const { servicesContainer, children } = props

  return (
    <ServicesContext.Provider value={servicesContainer}>
      {children}
    </ServicesContext.Provider>
  )
}

export function useService<Service extends AbstractService>(
  ServiceClass: ServiceConstructor<Service, any[]>
) {
  const { getService } = useContext(ServicesContext)

  return getService(ServiceClass)
}
