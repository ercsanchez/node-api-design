// unhandledRejection event is only triggered with promise errors and not all async errors
// setTimeout is async error but will not trigger this event type
process.on('unhandledRejection', (err) => {
  console.error('unhandledRejection', err)
});

process.on('uncaughtException', (e) => {
  console.error("uncaughtException", e)
})

// promise error (specific type of async error)
new Promise(resolve =>
  setTimeout(() => {
    Promise.reject('async error/promise error');
  }, 1200)
)

// sync error
throw new Error('sync error')