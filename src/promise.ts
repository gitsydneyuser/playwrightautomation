// Exercise: Create a morning routine
async function morningRoutine() {
    console.log("🌅 Good morning!");
    
    // Task 1: Brush teeth (2 seconds)
    console.log("🪥 Brushing teeth...");
    await wait(2);
    console.log("✅ Teeth brushed!");
    
    // Task 2: Take shower (3 seconds)
    console.log("🚿 Taking shower...");
    await wait(3);
    console.log("✅ Shower done!");
    
    // Task 3: Get dressed (1 second)
    console.log("👔 Getting dressed...");
    await wait(1);
    console.log("✅ Dressed!");
    
    console.log("🎉 Ready for the day!");
}

// Helper function
function wait(seconds: number): Promise<void> {
    return new Promise(resolve => {
        setTimeout(resolve, seconds * 1000);
    });
}


// This DOES NOT WORK as expected!
function morningRoutineWrong() {
    console.log("🌅 Good morning!");
    
    console.log("🪥 Brushing teeth...");
    setTimeout(() => {
        console.log("✅ Teeth brushed!");
    }, 2000);
    
    console.log("🚿 Taking shower...");
    setTimeout(() => {
        console.log("✅ Shower done!");
    }, 3000);
    
    console.log("👔 Getting dressed...");
    setTimeout(() => {
        console.log("✅ Dressed!");
    }, 1000);
    
    console.log("🎉 Ready for the day!");
}

morningRoutineWrong();

// Run it
//morningRoutine();