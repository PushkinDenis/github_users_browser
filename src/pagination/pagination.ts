const pagination = (): string => {
  return `<ul class="pagination">
    <button class="pagination__btn pagination__min-btn">&lt</button>
    <li class="pagination__li pagination__num">1</li>
    <li class="pagination__li pagination__num">2</li>
    <li class="pagination__li pagination__num">3</li>
    <li class="pagination__li pagination__num">4</li>
    <li class="pagination__li pagination__num">5</li>
    <li class="pagination__li pagination__num">6</li>
    <li class="pagination__li ">...</li>
    <li class="pagination__li ">10</li>
    <button class="pagination__btn pagination__pls-btn">&gt</button>
  </ul>`;
};

export { pagination };
