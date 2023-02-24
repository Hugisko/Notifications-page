const mark_all = document.querySelector('.all-read');
const notify_count = document.querySelector('.notification-count');
const notifications = document.querySelectorAll('.notification');
let count = notify_count.innerText;

//all notifications are unread
/*
notifications.forEach(notification => {
    if(!notification.classList.contains('unread')){
        notification.classList.add('unread');
        count++;
        notify_count.innerText = `${count}`;
    }
});*/

notifications.forEach(notification => {
    notification.addEventListener('click', () => {
        if(notification.classList.contains('unread')){
            notification.classList.remove('unread');
            count--;
            notify_count.innerText = `${count}`;
        }
    });
});

mark_all.addEventListener('click', () => {
    notifications.forEach(notification => {
        if(notification.classList.contains('unread')){
            notification.classList.remove('unread');
        }
    });
    notify_count.innerText = '0';
});


