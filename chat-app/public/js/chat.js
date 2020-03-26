const socket = io();

//Elements
const $messageForm = document.querySelector('#message-form');
const $messageFormInput = $messageForm.querySelector('input');
const $messageFormButton = $messageForm.querySelector('button');

socket.on('message', message => {
    console.log(message)
});

$messageForm.addEventListener('submit', e => {
    e.preventDefault();

    $messageFormButton.setAttribute('disabled', 'disabled')

    const message = e.target.elements.message.value;
    socket.emit('sendMessage', message, (error) => {
        $messageFormButton.removeAttribute('disabled');

        if(error) {
            return console.log(error)
        }
        
        console.log('Message was delivered')
    })
})

document.querySelector('#send-location').addEventListener('click', (e) => {
    if(!navigator.geolocation) {
        return alert('Geolocation is not supported by your browser')
    }

    navigator.geolocation.getCurrentPosition(({coords: {longitude, latitude}}) => {
        socket.emit('sendLocation', {
            latitude,
            longitude
        }, () => {
            console.log('Location shared')
        })
    })
})