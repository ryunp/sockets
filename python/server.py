# Echo server program

def main():
	import socket

	HOST = ''                 # Symbolic name meaning all available interfaces
	PORT = 6969              # Arbitrary non-privileged port
	conn = 0
	reqCount = 0

	try:
		s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
		s.bind((HOST, PORT))
		s.listen(1)

		# Listen for connection
		while 1:
			conn, addr = s.accept()
			reqCount += 1
			print '\nConnecttion #' + str(reqCount) + ' from', addr

			# Wait for data
			while 1:
				# Received data
				data = conn.recv(1024)

				# Connection closed
				if not data:
					conn.sendall('Connection closing')
					conn.close()
					print 'Connection closed'
					break

				# Log data
				print 'Received data: ' + repr(data)

				# Send back data
				conn.sendall('[req#' + str(reqCount) + '] Server response: ' + str(data))
	except KeyboardInterrupt:
		if (conn):
			conn.close()
			print 'Closing Server...\n'
		print 'Exiting...\n'
	except Exception:
		if (conn):
			conn.close()

if __name__ == "__main__":
    main()
