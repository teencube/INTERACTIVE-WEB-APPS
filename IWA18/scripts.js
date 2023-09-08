/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event 
 */


import{TABLES,COLUMNS,state,updateDragging,createOrderData} from './data.js';

import { html,createOrderHtml,updateDraggingHtml,moveToColumn } from './view.js';
const handleDragOver = (event) => {
    event.preventDefault();
    const path = event.path || event.composedPath()
    let column = null

    for (const element of path) {
        const { area } = element.dataset
        if (area) {
            column = area
            break;
        }
    }

    if (!column) return
    updateDragging({ over: column })
    updateDraggingHtml({ over: column })
}

const handleHelpToggle = () => {
    html.help.overlay.toggleAttribute('open');
    if (html.help.overlay.hasAttribute('open')) {
        html.help.overlay.focus();
    } else {
        html.other.add.focus();
    }
};

const handleAddToggle = () => {
    html.add.overlay.toggleAttribute('open');
    if (html.add.overlay.hasAttribute('open')) {
        html.add.title.value = '';
        html.add.table.selectedIndex = 0;
        html.add.title.focus();
    } else {
        html.other.add.focus();
    }
};

const handleAddSubmit = (event) => {
    event.preventDefault();
    const title = html.add.title.value;
    const table = html.add.table.value;
    if (title && table) {
        const order = createOrderData({ title, table, column: 'ordered' });
        state.orders[order.id] = order;
        const orderHtml = createOrderHtml(order);
        html.columns.ordered.appendChild(orderHtml);
        handleAddToggle();
    }
};

const handleEditToggle = (event) => {
    if (event.target.closest('.order')) {
        const orderId = event.target.closest('.order').dataset.id;
        const order = state.orders[orderId];

        html.edit.title.value = order.title;
        html.edit.table.value = order.table;
        html.edit.column.value = order.column;
        html.edit.id.value = orderId;

        html.edit.overlay.toggleAttribute('open');
        if (html.edit.overlay.hasAttribute('open')) {
            html.edit.title.focus();
        } else {
            html.other.add.focus();
        }
    }
};

const handleEditSubmit = (event) => {
    event.preventDefault();
    const orderId = html.edit.id.value;
    const order = state.orders[orderId];
    order.title = html.edit.title.value;
    order.table = html.edit.table.value;
    const newColumn = html.edit.column.value;
    if (newColumn !== order.column) {
        moveToColumn(orderId, newColumn);
        order.column = newColumn;
    }
    handleEditToggle(event);
};

const handleDelete = (event) => {
    const orderId = html.edit.id.value;
    delete state.orders[orderId];
    const orderHtml = document.querySelector(`[data-id="${orderId}"]`);
    orderHtml.remove();
    handleEditToggle(event);
};

html.add.cancel.addEventListener('click', handleAddToggle);
html.other.add.addEventListener('click', handleAddToggle);
html.add.form.addEventListener('submit', handleAddSubmit);

html.other.grid.addEventListener('click', handleEditToggle);
html.edit.cancel.addEventListener('click', handleEditToggle);
html.edit.form.addEventListener('submit', handleEditSubmit);
html.edit.delete.addEventListener('click', handleDelete);

html.help.cancel.addEventListener('click', handleHelpToggle);
html.other.help.addEventListener('click', handleHelpToggle);

for (const htmlColumn of Object.values(html.columns)) {
    htmlColumn.addEventListener('dragstart', handleDragStart);
    htmlColumn.addEventListener('dragend', handleDragEnd);
}

for (const htmlArea of Object.values(html.area)) {
    htmlArea.addEventListener('dragover', handleDragOver);
}