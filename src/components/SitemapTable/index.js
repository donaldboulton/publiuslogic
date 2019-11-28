import React from 'react'
import styled from 'styled-components'

const TableWrapper = styled.div`
  overflow-x: auto;
}
`
const CustomTable = styled.table`
@media screen and (max-width: 800px)
table {
  border-collapse: separate;
  border-spacing: 0;
  color: #dbdbdb;
  font: 14px/1.4 "Helvetica Neue", Helvetica, Arial, sans-serif;
}
th,
td {
  padding: 10px 15px;
  vertical-align: middle;
}
thead {
  background: #171717;
  background: linear-gradient(#d64000,#c93c00);
  color: #fff;
  font-size: 11px;
  text-transform: uppercase;
}
th:first-child {
    border-top-left-radius: ${props => props.theme.mediumBorderRadius};

  text-align: left;
}
th:last-child {
    border-top-right-radius: ${props => props.theme.mediumBorderRadius};

}
tbody tr:nth-child(even) {
  background: #f0f0f2;
}
td {
  border-bottom: 1px solid #cecfd5;
  border-right: 1px solid #cecfd5;
}
td:first-child {
  border-left: 1px solid #cecfd5;
}
.book-title {
  color: #dedede;
  display: block;
}
.text-offset {
  color: #7c7c80;
  font-size: 12px;
}
.item-stock,
.item-qty {
  text-align: center;
}
.item-price {
  text-align: right;
}
.item-multiple {
  display: block;
}
tfoot {
  text-align: right;
}
tfoot tr:last-child {
  background: #343434;
  color: #395870;
  font-weight: bold;
}
tfoot tr:last-child td:first-child {
    border-bottom-left-radius: ${props => props.theme.mediumBorderRadius};
}
tfoot tr:last-child td:last-child {
    border-top-right-radius: ${props => props.theme.mediumBorderRadius};
} 
`

const StyledTable = () => {
  return (
    <>
      <TableWrapper>
        <CustomTable className='table is-responsive'>
          <thead>
            <tr>
              <th scope='col' colSpan='2'>Pages</th>
              <th scope='col'>Blog Posts</th>
              <th scope='col'>Admin</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong className='book-title'>Home Page</strong>
                <span className='text-offset'>By Donald Boulton</span>
              </td>
              <td className='item-stock'>In Stock</td>
              <td className='item-qty'>1</td>
              <td className='item-price'>$30.02</td>
            </tr>
            <tr>
              <td>
                <strong className='book-title'>A Project Guide to UX Design</strong>
                <span className='text-offset'>by Russ Unger &#38; Carolyn Chandler</span>
              </td>
              <td className='item-stock'>In Stock</td>
              <td className='item-qty'>2</td>
              <td className='item-price'>$52.94 <span className='text-offset item-multiple'>$26.47 &#215; 2</span></td>
            </tr>
            <tr>
              <td>
                <strong className='book-title'>Introducing HTML5</strong>
                <span className='text-offset'>by Bruce Lawson &#38; Remy Sharp</span>
              </td>
              <td className='item-stock'>Out of Stock</td>
              <td className='item-qty'>1</td>
              <td className='item-price'>$22.23</td>
            </tr>
            <tr>
              <td>
                <strong className='book-title'>Bulletproof Web Design</strong>
                <span className='text-offset'>by Dan Cederholm</span>
              </td>
              <td className='item-stock'>In Stock</td>
              <td className='item-qty'>1</td>
              <td className='item-price'>$30.17</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className='text-offset'>
              <td colSpan='3'>Subtotal</td>
              <td>$135.36</td>
            </tr>
            <tr className='text-offset'>
              <td colSpan='3'>Tax</td>
              <td>$13.54</td>
            </tr>
            <tr>
              <td colSpan='3'>Total</td>
              <td>$148.90</td>
            </tr>
          </tfoot>
        </CustomTable>
      </TableWrapper>
    </>
  )
}

export default StyledTable
