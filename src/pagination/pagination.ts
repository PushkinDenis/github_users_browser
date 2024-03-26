const pagination = (): string => {
  return `<ul class="pagination">
    <button class="pagination__btn pagination__min-btn">&lt</button>
    <li class="pagination__li pagination__num" tabindex="0">1</li>
    <li class="pagination__li pagination__num" tabindex="0">2</li>
    <li class="pagination__li pagination__num" tabindex="0">3</li>
    <li class="pagination__li pagination__num" tabindex="0">4</li>
    <li class="pagination__li pagination__num" tabindex="0">5</li>
    <li class="pagination__li pagination__num" tabindex="0">6</li>
    <li class="pagination__li ">...</li>
    <li class="pagination__li pagination__total-num" tabindex="0">100</li>
    <button class="pagination__btn pagination__pls-btn">&gt</button>
  </ul>`;
};

export { pagination };
