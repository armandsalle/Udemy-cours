var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('arguments must be numbers');
            }
        }, 1500);
    });
};

asyncAdd(5, '7').then((res) => {
    console.log(res);
    return asyncAdd(res, 33);
}).then((res) => {
    console.log('45 ? ', res);
}).catch((error) => {
    console.log(error)
});

// var somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Hey it worked!');
//         // reject('Unable to fulfil promise');
//     }, 2500);

// });

// somePromise
//     .then((message) => {
//             console.log('sucess : ', message);
//         },
//         (error) => {

//             console.log('Error: ', error);

//         });