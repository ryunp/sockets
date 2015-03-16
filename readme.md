**Description:**  
TCP Sockets are used for network connections allowing transfer of data. Implemented in NodeJS on Debian based GNU/Linux host. Working on python version.
[Standard protocol of communication](http://en.wikipedia.org/wiki/Berkeley_sockets#/media/File:InternetSocketBasicDiagram_zhtw.png) exists to ensure proper synchronization between hosts. My example workflow below is modeled from this diagram.

**Usage:**  
node server.js [port]  
node client.js

*Sending a blank line ('\n' character, or Enter) will terminate the client's connection*

Output example of server and client interaction decending in chronological order:

| Server Terminal (server.js) | Client Terminal (client.js) |
|---|---|
| user@rNB-u64:~/node/sockets$ node server.js 6969 | |
| Server: started on port 6969 | |
| | user@rNB-u64:~/node/sockets$ node client.js |
| Server: connection from 127.0.0.1:49662 | |
| | Client: Connected to localhost:6969 |
| | Enter data: session 1 msg 1 |
| | Client: sending [15] session 1 msg 1 ... |
| Server: incoming data [15]: session 1 msg 1 |  |
| | Client: server response: Request #1 - session 1 msg 1 ... |
| | Enter data: session 1 msg 2 |
| | Client: sending [15] session 1 msg 2 ... |
| Server: incoming data [15]: session 1 msg 2 | |
| | Client: server response: Request #1 - session 1 msg 2 ... |
| | Enter data: |
| Server: Connection closed! | |
| | Client: Connection closed |
| | user@rNB-u64:~/node/sockets$ node client.js |
| Server: connection from 127.0.0.1:49663 | |
| | Client: Connected to localhost:6969 |
| | Enter data: session 2 msg 1 |
| | Client: sending [15] session 2 msg 1 ... |
| Server: incoming data [15]: session 2 msg 1 | |
| | Client: server response: Request #2 - session 2 msg 1 ... |
| | Enter data: session 2 msg 2 |
| | Client: sending [15] session 2 msg 2 ... |
| Server: incoming data [15]: session 2 msg 2 | |
| | Client: server response: Request #2 - session 2 msg 2 ... |
| | Enter data: |
| Server: Connection closed! | |
| | Client: Connection closed |
