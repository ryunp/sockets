usage: 
server.js [port]
client.js [port] [message]

port: integer
message: text data to send (quotes not needed)
*Sending a blank line ('\n' character, or Enter) will terminate the connection*

Output Example (sequence of client requests with respective server logging):

*Server Pane*
user@rNB-u64:~/node/sockets$ node server.js 6969
Server: started on port 6969
Server: connection from 127.0.0.1:49662
Server: incoming data [15]: session 1 msg 1
Server: incoming data [15]: session 1 msg 2
Server: Connection closed!
Server: connection from 127.0.0.1:49663
Server: incoming data [15]: session 2 msg 1
Server: incoming data [15]: session 2 msg 2

*Client Pane*
user@rNB-u64:~/node/sockets$ node client.js
Client: Connected to localhost:6969
Enter data: session 1 msg 1
Client: sending [15] session 1 msg 1 ...
Client: server response: Request #1 - session 1 msg 1 ...
Enter data: session 1 msg 2
Client: sending [15] session 1 msg 2 ...
Client: server response: Request #1 - session 1 msg 2 ...
Enter data:
Client: Connection closed
user@rNB-u64:~/node/sockets$ node client.js
Client: Connected to localhost:6969
Enter data: session 2 msg 1
Client: sending [15] session 2 msg 1 ...
Client: server response: Request #2 - session 2 msg 1 ...
Enter data: session 2 msg 2
Client: sending [15] session 2 msg 2 ...
Client: server response: Request #2 - session 2 msg 2 ...
Enter data:
