const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

function updateBookStatus(bookId) {
    const bookStatus = document.querySelector(`#${bookId} .status`);
    const reserveBtn = document.querySelector(`#${bookId} .reserve`);
    const checkoutBtn = document.querySelector(`#${bookId} .checkout`);
    const checkinBtn = document.querySelector(`#${bookId} .checkin`);
    
    const status = bookStatus.textContent;
    const statusInfo = STATUS_MAP[status];
    
    bookStatus.style.color = statusInfo.color;
    reserveBtn.disabled = !statusInfo.canReserve;
    checkoutBtn.disabled = !statusInfo.canCheckout;
    checkinBtn.disabled = !statusInfo.canCheckIn;
    
    // Set buttons to grayscale or black
    reserveBtn.style.color = 'black';
    checkoutBtn.style.color = 'black';
    checkinBtn.style.color = 'black';
};

// Update book status for each book
updateBookStatus('book1');
updateBookStatus('book2');
updateBookStatus('book3');