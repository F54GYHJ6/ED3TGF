#!/bin/sh
UUID=${UUID:-'d97e2665-c391-4727-a877-41c56b396555'}
sed -i "s#UUID#$UUID#g" ./config-vmess.json
