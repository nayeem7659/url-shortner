
import { app } from "./app.js"
import connectDB from "./DB/index.js"

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`server is running at port: ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log(`mongo db connection faild !!`, err);
})
