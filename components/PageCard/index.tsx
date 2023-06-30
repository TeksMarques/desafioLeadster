import React, { useState } from "react";
import { PageContainer, PageNumber, PageText } from "./style";

const PageCard = ({
  cardsPerPage,
  totalCards,
  setCurrentPage,
  currentPage,
}) => {
  const totalPages = Math.ceil(totalCards / cardsPerPage);
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  const [selectedPage, setSelectedPage] = useState(currentPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    setSelectedPage(pageNumber);
  };

  return (
    <PageContainer>
      <PageText>Página</PageText>
      <div>
        {pages.map((page) => (
          <PageNumber
            key={page}
            onClick={() => handlePageChange(page)}
            className={selectedPage === page ? "active" : ""}
          >
            {page}
          </PageNumber>
        ))}
      </div>
    </PageContainer>
  );
};

export default PageCard;
