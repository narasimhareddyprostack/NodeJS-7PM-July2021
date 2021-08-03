
function Add() {

    for (var i = 100; i < 500; i++) {
        console.log(i);
        setTimeOut(() => {

            console.log(i)
        }, 2000)
    }
}
Add()