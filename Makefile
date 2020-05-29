deploy:
	ssh eac "cd ~/client && git checkout -f && git pull && npm run build"
