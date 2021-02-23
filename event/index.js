const EventEmitter=require('events');
const event=new EventEmitter();


event.on("welcome",()=>{
  console.log("event is created");
});

event.on("welcome",()=>{
  console.log("hahahhahahahah")
})

event.on("welcome",()=>{
  console.log("hahahhahahahah")
})

event.emit("welcome");

