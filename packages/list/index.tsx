import React from 'react'
import styled from 'styled-components'
import theme from '@zcool/theme'
import { T } from '@zcool/util'
import { Property } from 'csstype'

export interface ListProps {
  width?: number
  align?: Property.TextAlign
  children: React.ReactNode
}

export interface ListItemProps {
  selected?: boolean
  onClick?: (e: React.MouseEvent<HTMLLIElement>) => void
}

export const List = styled.ul<ListProps>`
  list-style: none;
  margin: 0;
  width: ${({ width }) => (width ? `${width}px` : '')};
  font-size: ${T('font.size.sm')}px;
  line-height: 1.45;
  text-align: ${({ align }) => align};
  background: ${T('palette.white')};
`

List.displayName = 'List'

List.defaultProps = {
  theme,
  align: 'left'
}

export const ListItem = styled.li.attrs({
  'data-selected': ({ selected }) => (selected ? 'true' : '')
})<ListItemProps>`
  list-style: none;
  margin: 0;
  padding: ${T('spacing.xs')}px 14px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  cursor: pointer;
  transition: background 0.3s;

  &[data-selected='true'] {
    font-weight: ${T('font.weight.medium')};
    color: ${T('palette.primary')};
  }

  &:hover {
    background-color: ${T('palette.pearl')};
  }
`

ListItem.displayName = 'ListItem'

ListItem.defaultProps = {
  theme,
  selected: false
}
