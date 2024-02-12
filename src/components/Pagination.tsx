import React from 'react';
import ReactPaginate from 'react-paginate';


type PaginationProps = {
    currentPage: number;
    onChangePage: (page: number) => void;
};

export const Pagination: React.FC<PaginationProps> = ({currentPage, onChangePage}) => (
    <div>

        <div className="flex items-center justify-center border-t border-gray-200 bg-white px-4 py-3 sm:px-6">

                <div>
                    <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                        <ReactPaginate
                            className='flex items-center space-x-4'
                            breakLabel="..."
                            nextLabel=">"
                            previousLabel="<"
                            onPageChange={(event) => onChangePage(event.selected + 1)}
                            pageRangeDisplayed={4}
                            pageCount={3}
                            forcePage={currentPage - 1}
                        />
                    </nav>
                </div>
            </div>

    </div>
);
