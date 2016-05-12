import React from 'react'
import FilterLink from '../containers/FilterLink'

const ServiceFilter = () => (
  <p>
    Show:
    {" "}
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_HW">
      HardWare
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_OSD">
      OSD
    </FilterLink>
  </p>
)

export default ServiceFilter