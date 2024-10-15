// script.js
document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.querySelector('.grid-container');
    const columnsInput = document.getElementById('columns');
    const rowsInput = document.getElementById('rows');
    const justifyItemsSelect = document.getElementById('justify-items');
    const alignItemsSelect = document.getElementById('align-items');
    const gapSlider = document.getElementById('gap');
    const codeOutput = document.querySelector('.code-output');

    function updateGrid() {
        const columns = columnsInput.value;
        const rows = rowsInput.value;
        const justifyItems = justifyItemsSelect.value;
        const alignItems = alignItemsSelect.value;
        const gap = gapSlider.value + 'px';

        gridContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        gridContainer.style.justifyItems = justifyItems;
        gridContainer.style.alignItems = alignItems;
        gridContainer.style.gap = gap;

        updateCodeOutput();
    }

    function updateCodeOutput() {
        const cssCode = `
.grid-container {
    display: grid;
    grid-template-columns: ${gridContainer.style.gridTemplateColumns};
    grid-template-rows: ${gridContainer.style.gridTemplateRows};
    justify-items: ${gridContainer.style.justifyItems};
    align-items: ${gridContainer.style.alignItems};
    gap: ${gridContainer.style.gap};
}`;
        codeOutput.textContent = cssCode;
    }

    columnsInput.addEventListener('input', updateGrid);
    rowsInput.addEventListener('input', updateGrid);
    justifyItemsSelect.addEventListener('change', updateGrid);
    alignItemsSelect.addEventListener('change', updateGrid);
    gapSlider.addEventListener('input', updateGrid);

    // Initialize with default values
    updateGrid();
});
