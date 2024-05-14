let ex=require('express')
const fs=require('fs')
const app=ex()

app.use(ex.json())


app.get('/getdetails',(req,res)=>{
    let obj=JSON.parse(fs.readFileSync('./data.txt','utf-8'))
    res.json(obj)

})

app.get('/getcmt',(req,res)=>{
    console.log('dsfjsd')
    let obj=JSON.parse(fs.readFileSync('./cmt.txt','utf-8'))
    res.json(obj)
})

app.post('/addcmt',(req,res)=>{
    let master=JSON.parse(fs.readFileSync('./cmt.txt','utf-8'))
    master.cmt.push(req.body)
    fs.writeFileSync('./cmt.txt',JSON.stringify(master))
    res.json({status:'done'})
})



app.listen(3400)

let obj={
    time1:{
        date:'12-4-2024',
        head:'Advanced Concepts',
        img:['/advanced.svg','/socket.svg'],
        desc:[
            {
                img:'/webrtc.png',
                meta:'WebRTC for streaming',
                full:'WebRTC (Web Real-Time Communication) is an open-source project facilitating real-time communication directly in web browsers and mobile apps. Developed by Google, it offers APIs and protocols for peer-to-peer voice calling, video chat, and file sharing without requiring additional plugins. Leveraging JavaScript APIs, WebRTC ensures seamless audio and video streaming between users, optimizing performance and ensuring secure communication through encryption. Its simplicity and broad browser support make it a preferred choice for integrating real-time communication features into web applications, ranging from video conferencing platforms to online gaming and collaboration tools.'
            },
            {
                img:'/socketio.png',
                meta:'Socket.io realtime talk',
                full:`Socket.IO is a JavaScript library that enables real-time, bidirectional communication between web clients and servers. It works on top of the WebSocket protocol, providing an abstraction that simplifies real-time communication while ensuring compatibility with a wide range of devices and browsers. Socket.IO allows developers to build applications with features like chat, live updates, and multiplayer gaming by establishing persistent connections between clients and servers, facilitating instant data transfer and synchronization.

                One of Socket.IO's key features is its support for fallback mechanisms, which enable communication over alternative transport protocols such as long polling or WebSockets, depending on the client's capabilities. This ensures reliable connectivity and seamless user experiences across different environments. With its simple API and robust features, Socket.IO has become a popular choice for building real-time web applications that require efficient, scalable, and responsive communication.`
            },
        ]
    },
    time2:{
        date:'20-2-2024',
        head:'Famous Frameworks',
        img:['/angular.svg','/react.svg'],
        desc:[
        {
            img:'/react_.png',
            meta:'React Framwork',
            full:`React is a popular JavaScript library developed by Facebook for building user interfaces, particularly for single-page applications (SPAs) and dynamic web applications. It offers a component-based architecture, where UIs are broken down into reusable components, allowing for a more modular and scalable approach to development. React utilizes a virtual DOM to efficiently update and render UI components, resulting in better performance and improved user experience.

            One of React's main advantages is its declarative and component-based nature, which promotes code reusability, maintainability, and scalability. Developers can easily compose complex UIs by assembling smaller, self-contained components, each responsible for a specific part of the application's UI. Additionally, React's large and active community, along with its ecosystem of tools and libraries, provides extensive support and resources for developers, making it a popular choice for building modern web applications.`
        },
        {
            img:'angular_.png',
            meta:'Angular Framwork',
            full:`Angular is a popular open-source framework for building web applications developed and maintained by Google. It provides a comprehensive platform for creating dynamic and interactive single-page applications (SPAs) and progressive web apps (PWAs). Angular simplifies the development process by offering a robust set of features, including a powerful templating system, two-way data binding, dependency injection, and modular architecture.

            One of Angular's key features is its use of TypeScript, a superset of JavaScript that adds static typing and other advanced features to the language. TypeScript enhances code maintainability and scalability, making Angular applications more robust and easier to manage. Additionally, Angular's extensive ecosystem includes tools, libraries, and community support, making it a preferred choice for building modern web applications.`
        },
    ]
    },
    time3:{
        date:'20-1-2024',
        head:'Basic client/server JS',
        img:['/nodejs.svg','/js.svg'],
        desc:[
            {
                img:'dom.png',
                meta:'Dom manupulation in JS',
                full:'JavaScript DOM manipulation empowers developers to dynamically interact with the Document Object Model (DOM) of a webpage. Through methods like getElementById and querySelector, developers can access specific elements and then modify their properties, attributes, or content on-the-fly. This enables the creation of interactive user interfaces and dynamic web applications. By responding to user events such as clicks or input changes, developers can update the DOM in real-time, providing a seamless and engaging user experience. JavaScript frameworks and libraries further streamline DOM manipulation, offering efficient ways to build complex applications while harnessing the full potential of client-side scripting.'
            },
            {
                img:'async.png',
                meta:'Asynchronous Nature of JS',
                full:"JavaScript's asynchronous nature allows it to handle multiple tasks simultaneously without blocking other operations, vital for web development where it manages events, network requests, and DOM interactions. This capability is facilitated by mechanisms like callbacks, promises, and async/await. Callbacks were the initial method for asynchronous operations but led to complex code structures. Promises introduced a more organized approach, enabling sequential chaining of operations. The async/await syntax, introduced in ES2017, offers a more synchronous-like coding style for handling asynchronous tasks, enhancing code readability and maintainability. Understanding JavaScript's asynchronous nature is crucial for building responsive web applications, ensuring smooth user experiences and optimal performance."
            },
        ]
    }
}

obj={cmt:[{name:'pramath',msg:"Nice one"}]}

fs.writeFileSync('./cmt.txt',JSON.stringify(obj))