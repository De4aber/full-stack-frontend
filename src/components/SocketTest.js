import React, {useState, useEffect, useRef} from "react";
import * as signalR from "@microsoft/signalr";
import {runInAction} from "mobx";


const ENDPOINT = "https://localhost:7010/friendRequestHub";

const Chat = () => {
    /*
    const [ connection, setConnection ] = useState(null);
    useEffect(() => {
        const newConnection = new HubConnectionBuilder()
            .withUrl(ENDPOINT)
            .withAutomaticReconnect()
            .build();

        setConnection(newConnection);
    }, []);

     */

    useEffect(() => {
        var connection = new signalR.HubConnectionBuilder().withUrl("http://localhost:7010/friendRequestHub", {
            skipNegotiation: true,
            transport: signalR.HttpTransportType.WebSockets
        }).build();

        connection.on('load', (test) => {
            runInAction(() => {
                console.log(test);
            });
        });



        connection.start().then(function () {
            console.log("connection 2")
        }).catch(function (err) {
            return console.error(err.toString());
        });
    });


    return (
        <div>
            <p> socket test</p>
            <hr />

        </div>
    );
};

export default Chat;