import http from "http";
import url from "url";
import util from "util";
import os from "os";
import chalk from "chalk"
import {getdatetime, getdate, applicationName} from "./time/index.mjs";

const PORT = 4000;

http.createServer((req,res)=>{

    const reqPath = req.url;
    const parsed = url.parse(reqPath);
    const respnd = util.format("you are looking for %s query is %s. Application is running on %s OS arch is %s. Time is %s", 
    reqPath,parsed.query,os.platform(),os.arch(), getdatetime());

    console.log(respond);
    res.end(respnd);
}).listen(PORT,()=>{
    console.log(chalk.bgGreen(chalk.blue("server is listening on ")+chalk.bold(PORT)));
});