#stage 1
FROM node:18-alpine as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod
#stage 2
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=node /app/dist/agent-v /usr/share/nginx/html