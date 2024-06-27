// Function Alert
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Este es un mensaje de alerta.', 'success')
  })
}



// Function Popover
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
const popover = new bootstrap.Popover('.example-popover', {
    container: 'body'
  })


  
// Function Toast

const toastButton = document.querySelector('#toast-button');

        const toastContent = document.querySelector('.toast');

        if (toastButton) {
            toastButton.addEventListener('click', function (){

                
        const toast = new bootstrap.Toast(toastContent);

        toast.show();


            });
        }
    
