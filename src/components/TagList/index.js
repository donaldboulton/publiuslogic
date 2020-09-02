import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Category, CategoryGrid, categoryIcons, CategoriesIcon, Toggle } from './styles'

export default function CategoryList ({ category: categories, activeCategory = `All`, setActiveCategory }) {
  const [open, setOpen] = useState(false)
  return (
    <CategoryGrid open={open}>
      <h2>
        <CategoriesIcon size='1em' />
        &nbsp; Categories
        <Toggle open={open} onClick={() => setOpen(!open)} />
      </h2>
      {categories.map(({ title, count }) => {
        const CategoryIcon = categoryIcons[title]
        return (
          <Category
            open={open}
            key={title}
            active={activeCategory === title || (title === `All` && !activeCategory)}
            onClick={() => setActiveCategory(title === `All` ? null : title)}
          >
            {CategoryIcon && <CategoryIcon size='1em' />}
            &nbsp; {title} ({count})
          </Category>
        )
      })}
    </CategoryGrid>
  )
}

CategoryList.propTypes = {
  activeCategory: PropTypes.string,
  setActiveCategory: PropTypes.func.isRequired,
  category: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
    }),
  ),
}
