# Echo client program
def main():
	try:
		import socket

		HOST = 'localhost'    # The remote host
		PORT = 6969              # The same port as used by the server

		# Create socket
		s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

		# Connect to server
		s.connect((HOST, PORT))
		print 'Connected to ' + str(s.getpeername())
	
		while 1:
			# Input
			userInput = raw_input('Enter Data: ')

			# Exit on newline
			if not userInput:
				break

			# Send data
			s.sendall(userInput)

			# Receive Data
			data = s.recv(1024)
			print 'Received: ', repr(data)

		# Close connection
		print 'Connection closed\n'
		s.close()
	except KeyboardInterrupt:
		if (s):
			s.close()
			print '\nClosing connection...'
		print 'Exiting...'
	except Exception as e:
		if (s):
			s.close()
		print e.strerror

if __name__ == '__main__':
	main()
