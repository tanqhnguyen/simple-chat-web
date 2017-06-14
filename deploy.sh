#!/bin/bash
ssh dokku@tannguyen.org apps:create simple-chat
NODE_ENV=production npm run build
touch dist/.static
tar c dist | ssh dokku@tannguyen.org tar:in simple-chat
