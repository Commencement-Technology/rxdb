"use strict";(self.webpackChunkrxdb=self.webpackChunkrxdb||[]).push([[561],{46:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var t=i(4848),n=i(8453);const s={title:"RxDB JavaScript Frontend Database - Efficient Data Storage in Frontend Applications",slug:"frontend-database.html",description:"Explore RxDB as simple frontend database - Learn the benefits of offline access, caching, and improved performance in modern web apps, making RxDB a superior choice over traditional SQL databases."},r="RxDB JavaScript Frontend Database: Efficient Data Storage in Frontend Applications",o={id:"articles/frontend-database",title:"RxDB JavaScript Frontend Database - Efficient Data Storage in Frontend Applications",description:"Explore RxDB as simple frontend database - Learn the benefits of offline access, caching, and improved performance in modern web apps, making RxDB a superior choice over traditional SQL databases.",source:"@site/docs/articles/frontend-database.md",sourceDirName:"articles",slug:"/articles/frontend-database.html",permalink:"/articles/frontend-database.html",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"RxDB JavaScript Frontend Database - Efficient Data Storage in Frontend Applications",slug:"frontend-database.html",description:"Explore RxDB as simple frontend database - Learn the benefits of offline access, caching, and improved performance in modern web apps, making RxDB a superior choice over traditional SQL databases."},sidebar:"tutorialSidebar",previous:{title:"RxDB as a Database in a Flutter Application",permalink:"/articles/flutter-database.html"},next:{title:"RxDB as In-memory NoSQL Database - Empowering Real-Time Applications",permalink:"/articles/in-memory-nosql-database.html"}},l={},d=[{value:"Why you might want to store data in the frontend",id:"why-you-might-want-to-store-data-in-the-frontend",level:2},{value:"Offline accessibility",id:"offline-accessibility",level:3},{value:"Caching",id:"caching",level:3},{value:"Decreased initial application start time",id:"decreased-initial-application-start-time",level:3},{value:"Password encryption for local data",id:"password-encryption-for-local-data",level:3},{value:"Local database for state management",id:"local-database-for-state-management",level:3},{value:"Low-latency local queries",id:"low-latency-local-queries",level:3},{value:"Building realtime applications with local data",id:"building-realtime-applications-with-local-data",level:3},{value:"Easier integration with JavaScript frameworks",id:"easier-integration-with-javascript-frameworks",level:3},{value:"Simplified replication of database state",id:"simplified-replication-of-database-state",level:3},{value:"Improved scalability",id:"improved-scalability",level:3},{value:"Why SQL databases are not a good fit for the front end of an application",id:"why-sql-databases-are-not-a-good-fit-for-the-front-end-of-an-application",level:2},{value:"Push/Pull based vs. reactive",id:"pushpull-based-vs-reactive",level:3},{value:"Initialization time and performance",id:"initialization-time-and-performance",level:3},{value:"Build size considerations",id:"build-size-considerations",level:3},{value:"Why RxDB is a good fit for the frontend",id:"why-rxdb-is-a-good-fit-for-the-frontend",level:2},{value:"Made in JavaScript, optimized for JavaScript applications",id:"made-in-javascript-optimized-for-javascript-applications",level:3},{value:"NoSQL (JSON) documents for UIs",id:"nosql-json-documents-for-uis",level:3},{value:"Better TypeScript support compared to SQL",id:"better-typescript-support-compared-to-sql",level:3},{value:"Observable Queries for automatic UI updates",id:"observable-queries-for-automatic-ui-updates",level:3},{value:"Optimized observed queries with the EventReduce Algorithm",id:"optimized-observed-queries-with-the-eventreduce-algorithm",level:3},{value:"Observable document fields",id:"observable-document-fields",level:3},{value:"Storing Documents Compressed",id:"storing-documents-compressed",level:3},{value:"Built-in Multi-tab support",id:"built-in-multi-tab-support",level:3},{value:"Replication Algorithm can be made compatible with any backend",id:"replication-algorithm-can-be-made-compatible-with-any-backend",level:3},{value:"Flexible storage layer for code reuse",id:"flexible-storage-layer-for-code-reuse",level:3},{value:"Handling schema changes in distributed environments",id:"handling-schema-changes-in-distributed-environments",level:3},{value:"Follow Up",id:"follow-up",level:2}];function c(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"rxdb-javascript-frontend-database-efficient-data-storage-in-frontend-applications",children:"RxDB JavaScript Frontend Database: Efficient Data Storage in Frontend Applications"}),"\n",(0,t.jsxs)(a.p,{children:["In modern web development, managing data on the front end has become increasingly important. Storing data in the frontend offers numerous advantages, such as offline accessibility, caching, faster application startup, and improved state management. Traditional SQL databases, although widely used on the server-side, are not always the best fit for frontend applications. This is where ",(0,t.jsx)(a.a,{href:"https://rxdb.info/",children:"RxDB"}),", a frontend JavaScript database, emerges as a powerful solution. In this article, we will explore why storing data in the frontend is beneficial, the limitations of SQL databases in the frontend, and how ",(0,t.jsx)(a.a,{href:"https://rxdb.info/",children:"RxDB"})," addresses these challenges to become an excellent choice for frontend data storage."]}),"\n",(0,t.jsx)("center",{children:(0,t.jsx)("a",{href:"https://rxdb.info/",children:(0,t.jsx)("img",{src:"../files/logo/rxdb_javascript_database.svg",alt:"JavaScript Frontend Database",width:"220"})})}),"\n",(0,t.jsx)(a.h2,{id:"why-you-might-want-to-store-data-in-the-frontend",children:"Why you might want to store data in the frontend"}),"\n",(0,t.jsx)(a.h3,{id:"offline-accessibility",children:"Offline accessibility"}),"\n",(0,t.jsxs)(a.p,{children:["One compelling reason to store data in the frontend is to enable ",(0,t.jsx)(a.a,{href:"/offline-first.html",children:"offline accessibility"}),". By leveraging a frontend database, applications can cache essential data locally, allowing users to continue using the application even when an internet connection is unavailable. This feature is particularly useful for ",(0,t.jsx)(a.a,{href:"/articles/mobile-database.html",children:"mobile"})," applications or web apps with limited or intermittent connectivity."]}),"\n",(0,t.jsx)(a.h3,{id:"caching",children:"Caching"}),"\n",(0,t.jsx)(a.p,{children:"Frontend databases also serve as efficient caching mechanisms. By storing frequently accessed data locally, applications can minimize network requests and reduce latency, resulting in faster and more responsive user experiences. Caching is particularly beneficial for applications that heavily rely on remote data or perform computationally intensive operations."}),"\n",(0,t.jsx)(a.h3,{id:"decreased-initial-application-start-time",children:"Decreased initial application start time"}),"\n",(0,t.jsx)(a.p,{children:"Storing data in the frontend decreases the initial application start time because the data is already present locally. By eliminating the need to fetch data from a server during startup, applications can quickly render the UI and provide users with an immediate interactive experience. This is especially advantageous for applications with large datasets or complex data retrieval processes."}),"\n",(0,t.jsx)(a.h3,{id:"password-encryption-for-local-data",children:"Password encryption for local data"}),"\n",(0,t.jsxs)(a.p,{children:["Security is a crucial aspect of data storage. With a front end database, developers can ",(0,t.jsx)(a.a,{href:"/encryption.html",children:"encrypt"})," sensitive local data, such as user credentials or personal information, using encryption algorithms. This ensures that even if the device is compromised, the data remains securely stored and protected."]}),"\n",(0,t.jsx)(a.h3,{id:"local-database-for-state-management",children:"Local database for state management"}),"\n",(0,t.jsx)(a.p,{children:"Frontend databases provide an alternative to traditional state management libraries like Redux or NgRx. By utilizing a local database, developers can store and manage application state directly in the frontend, eliminating the need for additional libraries. This approach simplifies the codebase, reduces complexity, and provides a more straightforward data flow within the application."}),"\n",(0,t.jsx)(a.h3,{id:"low-latency-local-queries",children:"Low-latency local queries"}),"\n",(0,t.jsx)(a.p,{children:"Frontend databases enable low-latency queries that run entirely on the client's device. Instead of relying on server round-trips for each query, the database executes queries locally, resulting in faster response times. This is particularly beneficial for applications that require real-time updates or frequent data retrieval."}),"\n",(0,t.jsx)("p",{align:"center",children:(0,t.jsx)("img",{src:"../files/latency-london-san-franzisco.png",alt:"latency london san franzisco",width:"300"})}),"\n",(0,t.jsx)(a.h3,{id:"building-realtime-applications-with-local-data",children:"Building realtime applications with local data"}),"\n",(0,t.jsxs)(a.p,{children:["Realtime applications often require immediate updates based on data changes. By storing data locally and utilizing a frontend database, developers can build ",(0,t.jsx)(a.a,{href:"/articles/realtime-database.html",children:"realtime applications"})," more easily. The database can observe data changes and automatically update the UI, providing a seamless and responsive user experience."]}),"\n",(0,t.jsx)(a.h3,{id:"easier-integration-with-javascript-frameworks",children:"Easier integration with JavaScript frameworks"}),"\n",(0,t.jsxs)(a.p,{children:["Frontend databases, including RxDB, are designed to integrate seamlessly with popular JavaScript frameworks such as ",(0,t.jsx)(a.a,{href:"/articles/angular-database.html",children:"Angular"}),", React.js, Vue.js, and Svelte. These databases offer well-defined APIs and support that align with the specific requirements of these frameworks, enabling developers to leverage the full potential of the frontend database within their preferred development environment."]}),"\n",(0,t.jsx)(a.h3,{id:"simplified-replication-of-database-state",children:"Simplified replication of database state"}),"\n",(0,t.jsx)(a.p,{children:"Replicating database state between the frontend and backend can be challenging, especially when dealing with complex REST routes. Frontend databases, however, provide simple mechanisms for replicating database state. They offer intuitive replication algorithms that facilitate data synchronization between the frontend and backend, reducing the complexity and potential pitfalls associated with complex REST-based replication."}),"\n",(0,t.jsx)(a.h3,{id:"improved-scalability",children:"Improved scalability"}),"\n",(0,t.jsx)(a.p,{children:"Frontend databases offer improved scalability compared to traditional SQL databases. By leveraging the computational capabilities of client devices, the burden on server resources is reduced. Queries and operations are performed locally, minimizing the need for server round-trips and enabling applications to scale more efficiently."}),"\n",(0,t.jsx)(a.h2,{id:"why-sql-databases-are-not-a-good-fit-for-the-front-end-of-an-application",children:"Why SQL databases are not a good fit for the front end of an application"}),"\n",(0,t.jsx)(a.p,{children:"While SQL databases excel in server-side scenarios, they pose limitations when used on the frontend. Here are some reasons why SQL databases are not well-suited for frontend applications:"}),"\n",(0,t.jsx)(a.h3,{id:"pushpull-based-vs-reactive",children:"Push/Pull based vs. reactive"}),"\n",(0,t.jsxs)(a.p,{children:["SQL databases typically rely on a push/pull model, where the server pushes data to the client upon request. This approach is not inherently reactive, as it requires explicit requests for data updates. In contrast, frontend applications often require reactive data flows, where changes in data trigger automatic updates in the UI. Frontend databases, like ",(0,t.jsx)(a.a,{href:"https://rxdb.info/",children:"RxDB"}),", provide reactive capabilities that seamlessly integrate with the dynamic nature of frontend development."]}),"\n",(0,t.jsx)(a.h3,{id:"initialization-time-and-performance",children:"Initialization time and performance"}),"\n",(0,t.jsxs)(a.p,{children:["SQL databases designed for server-side usage tend to have larger build sizes and initialization times, making them less efficient for ",(0,t.jsx)(a.a,{href:"/articles/browser-database.html",children:"browser-based"})," applications. Frontend databases, on the other hand, directly leverage browser APIs like IndexedDB, OPFS, and WebWorker, resulting in leaner builds and faster initialization times. Often the queries are such fast, that it is not even necessary to implement a loading spinner."]}),"\n",(0,t.jsx)("p",{align:"center",children:(0,t.jsx)("img",{src:"../files/loading-spinner-not-needed.gif",alt:"loading spinner not needed",width:"300"})}),"\n",(0,t.jsx)(a.h3,{id:"build-size-considerations",children:"Build size considerations"}),"\n",(0,t.jsx)(a.p,{children:"Server-side SQL databases typically come with a significant build size, which can be impractical for browser applications where code size optimization is crucial. Frontend databases, on the other hand, are specifically designed to operate within the constraints of browser environments, ensuring efficient resource utilization and smaller build sizes."}),"\n",(0,t.jsx)(a.p,{children:"For example the SQLite Webassembly file alone has a size of over 0.8 Megabyte with an additional 0.2 Megabyte in JavaScript code for connection."}),"\n",(0,t.jsx)(a.h2,{id:"why-rxdb-is-a-good-fit-for-the-frontend",children:"Why RxDB is a good fit for the frontend"}),"\n",(0,t.jsxs)(a.p,{children:["RxDB is a powerful frontend JavaScript database that addresses the limitations of SQL databases and provides an optimal solution for frontend ",(0,t.jsx)(a.a,{href:"/articles/browser-storage.html",children:"data storage"}),". Let's explore why RxDB is an excellent fit for frontend applications:"]}),"\n",(0,t.jsx)(a.h3,{id:"made-in-javascript-optimized-for-javascript-applications",children:"Made in JavaScript, optimized for JavaScript applications"}),"\n",(0,t.jsx)(a.p,{children:"RxDB is designed and optimized for JavaScript applications. Built using JavaScript itself, RxDB offers seamless integration with JavaScript frameworks and libraries, allowing developers to leverage their existing JavaScript knowledge and skills."}),"\n",(0,t.jsx)(a.h3,{id:"nosql-json-documents-for-uis",children:"NoSQL (JSON) documents for UIs"}),"\n",(0,t.jsxs)(a.p,{children:["RxDB adopts a ",(0,t.jsx)(a.a,{href:"/articles/in-memory-nosql-database.html",children:"NoSQL approach"}),", using ",(0,t.jsx)(a.a,{href:"/articles/json-database.html",children:"JSON documents as its primary data structure"}),". This aligns well with the JavaScript ecosystem, as JavaScript natively works with JSON objects. By using NoSQL documents, RxDB provides a more natural and intuitive data model for UI-centric applications."]}),"\n",(0,t.jsx)("p",{align:"center",children:(0,t.jsx)("img",{src:"../files/no-sql.png",alt:"NoSQL Documents",width:"120"})}),"\n",(0,t.jsx)(a.h3,{id:"better-typescript-support-compared-to-sql",children:"Better TypeScript support compared to SQL"}),"\n",(0,t.jsxs)(a.p,{children:["TypeScript has become increasingly popular for building frontend applications. RxDB provides excellent ",(0,t.jsx)(a.a,{href:"/tutorials/typescript.html",children:"TypeScript support"}),", allowing developers to leverage static typing and benefit from enhanced code quality and tooling. This is particularly advantageous when compared to SQL databases, which often have limited TypeScript support."]}),"\n",(0,t.jsx)(a.h3,{id:"observable-queries-for-automatic-ui-updates",children:"Observable Queries for automatic UI updates"}),"\n",(0,t.jsx)(a.p,{children:"RxDB introduces the concept of observable queries, powered by RxJS. Observable queries automatically update the UI whenever there are changes in the underlying data. This reactive approach eliminates the need for manual UI updates and ensures that the frontend remains synchronized with the database state."}),"\n",(0,t.jsx)("p",{align:"center",children:(0,t.jsx)("img",{src:"../files/animations/realtime.gif",alt:"realtime ui updates",width:"700"})}),"\n",(0,t.jsx)(a.h3,{id:"optimized-observed-queries-with-the-eventreduce-algorithm",children:"Optimized observed queries with the EventReduce Algorithm"}),"\n",(0,t.jsx)(a.p,{children:"RxDB optimizes observed queries with its EventReduce Algorithm. This algorithm intelligently reduces redundant events and ensures that UI updates are performed efficiently. By minimizing unnecessary re-renders, RxDB significantly improves performance and responsiveness in frontend applications."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-typescript",children:"const query = myCollection.find({\n    selector: {\n        age: {\n            $gt: 21\n        }\n    }\n});\nconst querySub = query.$.subscribe(results => {\n    console.log('got results: ' + results.length);\n});\n"})}),"\n",(0,t.jsx)(a.h3,{id:"observable-document-fields",children:"Observable document fields"}),"\n",(0,t.jsx)(a.p,{children:"RxDB supports observable document fields, enabling developers to track changes at a granular level within documents. By observing specific fields, developers can reactively update the UI when those fields change, ensuring a responsive and synchronized frontend interface."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-typescript",children:"myDocument.firstName$.subscribe(newName => console.log('name is: ' + newName));\n"})}),"\n",(0,t.jsx)(a.h3,{id:"storing-documents-compressed",children:"Storing Documents Compressed"}),"\n",(0,t.jsxs)(a.p,{children:["RxDB provides the option to store documents in a ",(0,t.jsx)(a.a,{href:"/key-compression.html",children:"compressed format"}),", reducing storage requirements and improving overall database performance. Compressed storage offers benefits such as reduced disk space usage, faster data read/write operations, and improved network transfer speeds, making it an essential feature for efficient frontend data storage."]}),"\n",(0,t.jsx)(a.h3,{id:"built-in-multi-tab-support",children:"Built-in Multi-tab support"}),"\n",(0,t.jsx)(a.p,{children:"RxDB offers built-in multi-tab support, allowing data synchronization and state management across multiple browser tabs. This feature ensures consistent data access and synchronization, enabling users to work seamlessly across different tabs without conflicts or data inconsistencies."}),"\n",(0,t.jsx)("p",{align:"center",children:(0,t.jsx)("img",{src:"../files/multiwindow.gif",alt:"multi tab support",width:"450"})}),"\n",(0,t.jsx)(a.h3,{id:"replication-algorithm-can-be-made-compatible-with-any-backend",children:"Replication Algorithm can be made compatible with any backend"}),"\n",(0,t.jsxs)(a.p,{children:["RxDB's ",(0,t.jsx)(a.a,{href:"/replication.html",children:"realtime replication algorithm"})," is designed to be flexible and compatible with various backend systems. Whether you're using your own servers, ",(0,t.jsx)(a.a,{href:"/replication-firestore.html",children:"Firebase"}),", ",(0,t.jsx)(a.a,{href:"/replication-couchdb.html",children:"CouchDB"}),", ",(0,t.jsx)(a.a,{href:"/replication-nats.html",children:"NATS"}),", ",(0,t.jsx)(a.a,{href:"/replication-websocket.html",children:"WebSocket"}),", or any other backend, RxDB can be seamlessly integrated and synchronized with the backend system of your choice."]}),"\n",(0,t.jsx)("p",{align:"center",children:(0,t.jsx)("img",{src:"../files/database-replication.png",alt:"database replication",width:"200"})}),"\n",(0,t.jsx)(a.h3,{id:"flexible-storage-layer-for-code-reuse",children:"Flexible storage layer for code reuse"}),"\n",(0,t.jsxs)(a.p,{children:["RxDB provides a ",(0,t.jsx)(a.a,{href:"/rx-storage.html",children:"flexible storage layer"})," that enables code reuse across different platforms. Whether you're building applications with ",(0,t.jsx)(a.a,{href:"/electron-database.html",children:"Electron.js"}),", ",(0,t.jsx)(a.a,{href:"/react-native-database.html",children:"React Native"}),", hybrid apps using ",(0,t.jsx)(a.a,{href:"/capacitor-database.html",children:"Capacitor.js"}),", or traditional web browsers, RxDB allows you to reuse the same codebase and leverage the power of a frontend database across different environments."]}),"\n",(0,t.jsx)(a.h3,{id:"handling-schema-changes-in-distributed-environments",children:"Handling schema changes in distributed environments"}),"\n",(0,t.jsxs)(a.p,{children:["In distributed environments where data is stored on multiple client devices, handling schema changes can be challenging. RxDB tackles this challenge by providing robust mechanisms for ",(0,t.jsx)(a.a,{href:"/migration-schema.html",children:"handling schema changes"}),". It ensures that schema updates propagate smoothly across devices, maintaining data integrity and enabling seamless schema evolution."]}),"\n",(0,t.jsx)(a.h2,{id:"follow-up",children:"Follow Up"}),"\n",(0,t.jsx)(a.p,{children:"To further explore RxDB and get started with using it in your frontend applications, consider the following resources:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.a,{href:"/quickstart.html",children:"RxDB Quickstart"}),": A step-by-step guide to quickly set up RxDB in your project and start leveraging its features."]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.a,{href:"https://github.com/pubkey/rxdb",children:"RxDB GitHub Repository"}),": The official repository for RxDB, where you can find the code, examples, and community support."]}),"\n"]}),"\n",(0,t.jsxs)(a.p,{children:["By adopting ",(0,t.jsx)(a.a,{href:"https://rxdb.info/",children:"RxDB"})," as your frontend database, you can unlock the full potential of frontend data storage and empower your applications with offline accessibility, caching, improved performance, and seamless data synchronization. RxDB's JavaScript-centric approach and powerful features make it an ideal choice for frontend developers seeking efficient and scalable data storage solutions."]})]})}function h(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,a,i)=>{i.d(a,{R:()=>r,x:()=>o});var t=i(6540);const n={},s=t.createContext(n);function r(e){const a=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),t.createElement(s.Provider,{value:a},e.children)}}}]);