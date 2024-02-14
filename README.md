# News API

FrontEnd - React <br />
Backend - Node/Express <br />
API - NewsAPI <br />
Styling - Chakra UI <br />

## Purpose

Goal is to implement News API for Bitcoing news using Chakra UI components <br />

### Key Lessons learned

1. Inside await newsapi.v2.then().catch() ... placing a return statement inside the then will return undefined because 'then' is a Promise. <br />
   Solution is either to: <br />
   i. Use a return statement at the end of the entire promise (i.e: newsapi.v2.then().catch()) <br />
   ii. Assign a variable in the beginning: <br />
   Ex: const data = await newsapi(.....).then().catch

2. Use OpenChakra to design UI components using visual editor
