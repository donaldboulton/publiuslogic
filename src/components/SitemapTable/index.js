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
  color: #ffffff;
  font: 14px/1.4 'Helvetica Neue', Helvetica, Arial, sans-serif;
}
tbody {
  display: block;
  width: auto;
  position: relative;
  overflow-x: auto;
  white-space: nowrap;
}
.is-responsive {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    display: block;
    position: relative;
}
thead {
  background: #395870;
  background: linear-gradient(#d64000, #812102);
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
td:empty:before {
      content: '\00a0';
}
th, td
  margin: 0;
  vertical-align: top;
}
th {
  text-align: left
}
tr {
  display: block;
  padding: 0 10px 0 0;
    th::before;
        content: "\00a0";
}
td, th {
  border-width: 0 0 1px;
}

tr {
  display: inline-block;
  vertical-align: top;
}
th {
  display: block;
  text-align: right;
}
td {
  display: block;
  min-height: 1.25em;
  text-align: left;
}
th, td {
  &:last-child;
  border-top-right-radius: ${props => props.theme.smallBorderRadius};
}
    tr {
      &:last-child
        td:not(:last-child);
          border: $table-cell-border;
          border-width: $table-cell-border-width;

    &.is-bordered
      td,
      th
        border-width: 1px;
}
tr td, th
    &:last-child
        border-bottom-width: 1px;
        &:last-child
          td,
          th
            border-width: 1px;
}
tfoot {
  text-align: right;
}
tfoot tr:last-child {
  background: #f0f0f2;
  color: #395870;
  font-weight: bold;
}
tfoot tr:last-child td:first-child {
  border-bottom-left-radius: ${props => props.theme.mediumBorderRadius};
}
tfoot tr:last-child td:last-child {
  border-bottom-right-radius: ${props => props.theme.mediumBorderRadius};

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
                <strong className='book-title'>Don&#8217;t Make Me Think</strong>
                <span className='text-offset'>by Steve Krug</span>
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
