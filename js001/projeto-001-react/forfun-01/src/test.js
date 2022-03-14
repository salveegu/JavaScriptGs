module.exports = {

    repeat(){
        for (let i = 0; i < 10; i++) {
            
            Set.Timeout(() => {
                console.log(`teste ${i}`)}, 1000)
        }
        
    }
};