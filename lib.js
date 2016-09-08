"use strict";

let SVCNAME = "com.roonlabs.browse:1";

function RoonApiBrowse(core) {
    this.core = core;
}

RoonApiBrowse.services = [ { name: SVCNAME } ];

RoonApiBrowse.prototype.browse = function(opts, cb) {
    this.core.moo.send_request(SVCNAME+"/browse",
                               opts,
                               (msg, body) => {
                                   if (cb)
                                       cb(msg && msg.name == "Success" ? false : (msg ? msg.name : "NetworkError"), body);
                               });
};
RoonApiBrowse.prototype.load = function(opts, cb) {
    this.core.moo.send_request(SVCNAME+"/load",
                               opts,
                               (msg, body) => {
                                   if (cb)
                                       cb(msg && msg.name == "Success" ? false : (msg ? msg.name : "NetworkError"), body);
                               });
};
RoonApiBrowse.prototype.pop_all = function(opts, cb) {
    this.core.moo.send_request(SVCNAME+"/pop_all",
                               opts,
                               (msg, body) => {
                                   if (cb)
                                       cb(msg && msg.name == "Success" ? false : (msg ? msg.name : "NetworkError"), body);
                               });
RoonApiBrowse.prototype.pop= function(opts, cb) {
    this.core.moo.send_request(SVCNAME+"/pop",
                               opts,
                               (msg, body) => {
                                   if (cb)
                                       cb(msg && msg.name == "Success" ? false : (msg ? msg.name : "NetworkError"), body);
                               });
};
};

exports = module.exports = RoonApiBrowse;
