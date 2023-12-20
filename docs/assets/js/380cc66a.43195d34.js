"use strict";(self.webpackChunkrxdb=self.webpackChunkrxdb||[]).push([[2038],{4919:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>x});var s=t(5893),r=t(1151);const i={title:"Dexie.js RxStorage",slug:"rx-storage-dexie.html"},a="RxStorage Dexie.js",o={id:"rx-storage-dexie",title:"Dexie.js RxStorage",description:"To store the data inside of IndexedDB in the browser, you can also use the Dexie.js RxStorage.",source:"@site/docs/rx-storage-dexie.md",sourceDirName:".",slug:"/rx-storage-dexie.html",permalink:"/rx-storage-dexie.html",draft:!1,unlisted:!1,editUrl:"https://github.com/pubkey/rxdb/tree/main/docs-src/docs/rx-storage-dexie.md",tags:[],version:"current",frontMatter:{title:"Dexie.js RxStorage",slug:"rx-storage-dexie.html"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcc8 RxStorage Performance",permalink:"/rx-storage-performance.html"},next:{title:"LokiJS RxStorage",permalink:"/rx-storage-lokijs.html"}},d={},x=[{value:"Pros",id:"pros",level:2},{value:"Cons",id:"cons",level:2},{value:"Usage",id:"usage",level:2},{value:"Overwrite/Polyfill the native IndexedDB",id:"overwritepolyfill-the-native-indexeddb",level:2},{value:"Using addons",id:"using-addons",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"rxstorage-dexiejs",children:"RxStorage Dexie.js"}),"\n",(0,s.jsxs)(n.p,{children:["To store the data inside of IndexedDB in the browser, you can also use the ",(0,s.jsx)(n.a,{href:"https://github.com/dexie/Dexie.js",children:"Dexie.js"})," ",(0,s.jsx)(n.a,{href:"/rx-storage.html",children:"RxStorage"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Dexie.js is a minimal wrapper around IndexedDB.\nFor the Dexie based ",(0,s.jsx)(n.code,{children:"RxStorage"}),", we use the ",(0,s.jsx)(n.a,{href:"https://github.com/kofrasa/mingo",children:"mingo"})," query handler."]}),"\n",(0,s.jsx)(n.h2,{id:"pros",children:"Pros"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Can use ",(0,s.jsx)(n.a,{href:"https://dexie.org/docs/Tutorial/Building-Addons",children:"Dexie.js addons"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"cons",children:"Cons"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Does not use a ",(0,s.jsx)(n.a,{href:"/slow-indexeddb.html#batched-cursor",children:"Batched Cursor"})," or ",(0,s.jsx)(n.a,{href:"/slow-indexeddb.html#custom-indexes",children:"custom indexes"})," which makes queries slower compared to the ",(0,s.jsx)(n.a,{href:"/rx-storage-indexeddb.html",children:"IndexedDB RxStorage"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { createRxDatabase } from 'rxdb';\nimport { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';\n\nconst db = await createRxDatabase({\n    name: 'exampledb',\n    storage: getRxStorageDexie()\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"overwritepolyfill-the-native-indexeddb",children:"Overwrite/Polyfill the native IndexedDB"}),"\n",(0,s.jsxs)(n.p,{children:["Node.js has no IndexedDB API. To still run the Dexie ",(0,s.jsx)(n.code,{children:"RxStorage"})," in Node.js, for example to run unit tests, you have to polyfill it.\nYou can do that by using the ",(0,s.jsx)(n.a,{href:"https://github.com/dumbmatter/fakeIndexedDB",children:"fake-indexeddb"})," module and pass it to the ",(0,s.jsx)(n.code,{children:"getRxStorageDexie()"})," function."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { createRxDatabase } from 'rxdb';\nimport { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';\n\n//> npm install fake-indexeddb --save\nconst fakeIndexedDB = require('fake-indexeddb');\nconst fakeIDBKeyRange = require('fake-indexeddb/lib/FDBKeyRange');\n\nconst db = await createRxDatabase({\n    name: 'exampledb',\n    storage: getRxStorageDexie({\n        indexedDB: fakeIndexedDB,\n        IDBKeyRange: fakeIDBKeyRange\n    })\n});\n\n"})}),"\n",(0,s.jsx)(n.h2,{id:"using-addons",children:"Using addons"}),"\n",(0,s.jsxs)(n.p,{children:["Dexie.js has its own plugin system with ",(0,s.jsx)(n.a,{href:"https://dexie.org/docs/DerivedWork#known-addons",children:"many plugins"})," for encryption, replication or other use cases. With the Dexie.js ",(0,s.jsx)(n.code,{children:"RxStorage"})," you can use the same plugins by passing them to the ",(0,s.jsx)(n.code,{children:"getRxStorageDexie()"})," function."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const db = await createRxDatabase({\n    name: 'exampledb',\n    storage: getRxStorageDexie({\n        addons: [ /* Your Dexie.js plugins */ ]\n    })\n});\n"})})]})}function c(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var s=t(7294);const r={},i=s.createContext(r);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);