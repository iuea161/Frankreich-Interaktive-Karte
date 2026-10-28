#!/usr/bin/env python3
import http.server
import socket
import os
import sys

DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class ThreadedHTTPServer(http.server.ThreadingHTTPServer):
    daemon_threads = True
    def server_bind(self):
        self.socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        super().server_bind()

def run(port=8080):
    handler = lambda *args, **kwargs: http.server.SimpleHTTPRequestHandler(*args, directory=DIRECTORY, **kwargs)
    with ThreadedHTTPServer(('0.0.0.0', port), handler) as httpd:
        print(f"Server started on http://0.0.0.0:{port} for {DIRECTORY}")
        sys.stdout.flush()
        httpd.serve_forever()

if __name__ == '__main__':
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8080
    run(port)
