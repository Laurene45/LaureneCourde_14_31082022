import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { useTable } from 'react-table';
import { usePagination } from 'react-table';
import { useSortBy } from 'react-table';
import { headerList } from '../../datas/tableHeader';
//import { mockData } from '../../datas/mockDataEmployees';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpShortWide } from '@fortawesome/free-solid-svg-icons';
import { faArrowUpWideShort } from '@fortawesome/free-solid-svg-icons';
import { faArrowsUpDown } from '@fortawesome/free-solid-svg-icons';




import './Table.scss';

/**
 * Renders the 'EmployeesTable on current employees Page'
 * @function EmployeesTable
 * @param {array} employees: data
 * @returns {JSX}
 */

const EmployeesTable = ({ data }) => {
  const columns = useMemo(() => headerList, []);
  

  // Table instance
  const tableInstance = useTable({ columns, data }, useSortBy, usePagination);

  // comm info: usePagination : implémente la pagination des lignes.Il peut être utilisé pour la pagination côté client ou  côté serveur.

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    page,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow,
    state: { pageIndex, pageSize },
  } = tableInstance;

  return (
    <>
      <table className="employee-table" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, index) => (
            <tr key={index} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, i) => (
                <th key={i} {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}

                  <span>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <i className="fa fa-arrow-up-wide-short icon">
                          <FontAwesomeIcon icon={faArrowUpWideShort} />
                          
                        </i>
                      ) : (
                        <i className="fa fa-arrow-up-short-wide icon">
                          <FontAwesomeIcon icon={faArrowUpShortWide} />
                        </i>
                      )
                    ) : (
                      <i className="fa-solid fa-arrows-up-down icon">
                        <FontAwesomeIcon icon={faArrowsUpDown } />
                        
                    </i>
                    )}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {page.map((row, j) => {
            prepareRow(row);
            return (
              <tr key={j} {...row.getRowProps()}>
                {row.cells.map((cell, k) => {
                  return (
                    <td key={k} tabIndex="0" {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* pagination */}
      <div className="table-pagination">
        <div>
          <select
            tabIndex="0"
            className="page-size"
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
          >
            {[10, 25, 50, 100].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show{pageSize}
              </option>
            ))}
          </select>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}
        >
          <span className="pages">
            Page {''}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>
            {''}
          </span>
          <div className="pagination-button">
            <button
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
              aria-label="go to first page"
            >
              {'<<'}
            </button>

            <button
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
              aria-label="go to previous page"
            >
              Previous
            </button>

            <button
              onClick={() => nextPage()}
              disabled={!canNextPage}
              aria-label="go to next page"
            >
              Next
            </button>

            <button
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
              aria-label="go to last page"
            >
              {'>>'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};


EmployeesTable.propTypes = {
  data: PropTypes.array,
};

export default EmployeesTable;
