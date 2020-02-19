# base image
FROM node:12.2.0-alpine

# set working directory
WORKDIR /timetables

# add `/app/node_modules/.bin` to $PATH
ENV PATH /timetables/node_modules/.bin:$PATH
ENV PORT 3000
ENV production=true

# install and cache app dependencies
COPY package.json /timetables/package.json
COPY server.js /timetables/server.js
COPY . ./
RUN npm install 
RUN npm install react-scripts@3.0.1 -g --silent
RUN npm run build

# Specify port, this doesnt actually do much, its just a directive
EXPOSE 3000

# start app
CMD ["npm", "start"]
