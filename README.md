# News API

FrontEnd - React <br />
Backend - Node/Express <br />
DB - MongoDB <br />
API - NewsAPI <br />

## Purpose

Goal is to implement News API with both FE & BE <br />

### Key Lessons learned

1. Inside await newsapi.v2.then().catch() ... placing a return statement inside the then will return undefined because 'then' is a Promise. <br />
   Solution is either to: <br />
   i. Use a return statement at the end of the entire promise (i.e: newsapi.v2.then().catch()) <br />
   ii. Assign a variable in the beginning: <br />
   Ex: const data = await newsapi(.....).then().catch
