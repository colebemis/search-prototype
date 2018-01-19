import React from 'react'
import queryString from 'query-string'
import pickBy from 'lodash.pickby'
import isEmpty from 'lodash.isempty'
import Link from './Link'

const TypeLink = props => {
  const { search, pathname } = window.location

  const params = {
    ...queryString.parse(search),
    type: props.to,
  }

  const path = pathname + createQueryString(params)

  return <Link to={path}>{props.children}</Link>
}

function createQueryString(params) {
  const cleanParams = pickBy(params)

  if (isEmpty(cleanParams)) {
    return ''
  }

  return '?' + queryString.stringify(cleanParams)
}

export default TypeLink
