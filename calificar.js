function calificar() {
	swal.setDefaults({
		input: 'select',
  inputOptions: {
    '1': 'Malo',
    '3': 'Regular',
    '5': 'Bueno'
  },
  inputPlaceholder: 'Seleccionar',
  confirmButtonText: 'Siguiente',
  confirmButtonColor: '#b7940d',
  showCancelButton: false,
  animation: true,
  progressSteps: ['1', '2', '3','4']
})
	var steps = [
  {
    title: 'Pregunta 1',
    text: 'Aseo de la habitación:'
  },
  {
    title: 'Pregunta 2',
    text: 'Confort y privacidad:'
  },
  {
    title: 'Pregunta 3',
    text: 'Precios:'
  },
  {
    title: 'Pregunta 4',
    text: 'Atención al Cliente:'
  },
  
]

swal.queue(steps).then(function (result) {
  swal.resetDefaults()
  swal({
  title: 'Si consideras que debemos mejorar escríbelo a continuación',
  input: 'textarea',
  showCancelButton: false,
  confirmButtonText: 'Enviar',
  confirmButtonColor: '#b7940d',
  showLoaderOnConfirm: true,
  preConfirm: function (email) {
    return new Promise(function (resolve, reject) {
      setTimeout(function() {
        if (email === 'taken@example.com') {
          reject('This email is already taken.')
        } else {
          resolve()
        }
      }, 2000)
    })
  },
  allowOutsideClick: true
}).then(function (email) {
  swal({
    type: 'success',
    confirmButtonColor: '#b7940d',
    title: 'Encuesta enviada con exito',
    html: 'Muchas gracias por calificar nuestro servicio.'
  })
})
}, 
function () {
  swal.resetDefaults()
})


}
